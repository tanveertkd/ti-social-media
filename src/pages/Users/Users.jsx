import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader, MobileNavigation, NavBar, SideBar, SideBarRight } from '../../components';
import { UserCard } from '../../components/UserCard/UserCard';
import { getAllUsersHelper } from '../../features/user/userSlice';

const Users = () => {
    const { token } = useSelector((state) => state.auth);
    const { users, isLoading } = useSelector((state) => state.users);
    const { currentUser } = useSelector((state) => state.auth);
    const { searchedUser, searchUserResult } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const {
        currentUser: { username },
    } = useSelector((state) => state.auth);

    const currentUserData = users.find((user) => user.username === username);
    const suggestedUsers = users.filter((user) => user.username !== username);

    // Will use this if I decide to remove users from list after following
    // const filteredSuggestedUsers = users
    //     ?.filter((user) => user.username !== currentUserData.username)
    //     ?.filter(
    //         (user) =>
    //             !currentUserData?.following.find(
    //                 (followedUser) => followedUser.username === user.username,
    //             ),
    //     );

    useEffect(() => {
        dispatch(dispatch(() => getAllUsersHelper()));
    }, [dispatch]);

    return (
        <div className="flex flex-col h-screen">
            <div className="navbar fixed top-0 right-0 left-0 bg-primary-bg z-10">
                <NavBar />
            </div>
            <div className="xs:w-screen xs:mx-auto xs:px-0 flex justify-center p-4 mt-20">
                <div className="home-body flex h-full xs:w-full xs:px-1 w-4/5 justify-center">
                    <div className="sidebar-container z-10 hidden md:block h-full md:w-fit xl:w-[300px] fixed left-8">
                        <SideBar />
                    </div>

                    <div className="home-main xs:w-full flex flex-col md:items-end md:w-full xl:px-12 lg:items-center lg:w-7/12">
                        <div className="md:w-2/3 md:mr-4 lg:w-3/4 xl:w-11/12">
                            <p className="text-3xl">People</p>
                            {isLoading ? (
                                <div className="flex justify-center items-center h-max">
                                    <Loader />
                                </div>
                            ) : (
                                <div>
                                    {searchUserResult?.length > 0 ? (
                                        <div>
                                            {searchUserResult.map((user) => {
                                                return (
                                                    <UserCard
                                                        token={token}
                                                        user={user}
                                                        currentUserData={currentUserData}
                                                        key={user._id}
                                                    />
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div>
                                            {suggestedUsers.map((user) => {
                                                return (
                                                    <UserCard
                                                        token={token}
                                                        user={user}
                                                        currentUserData={currentUserData}
                                                        key={user._id}
                                                    />
                                                );
                                            })}
                                            {searchUserResult.length === 0 && searchedUser !== '' && (
                                                <div className="my-2 text-lg">
                                                    <p>Your search didn't match any users.</p>
                                                    <p>
                                                        We returned a list of users you might be
                                                        interested in.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <MobileNavigation username={currentUser?.username} />
                    </div>

                    <div className="sidebar-container z-10 hidden lg:block h-full xl:w-[300px] fixed right-8">
                        <SideBarRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Users };
