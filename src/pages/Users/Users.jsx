import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MobileNavigation, NavBar, SideBar, SideBarRight } from '../../components';
import {
    followUserHelper,
    getAllUsersHelper,
    unfollowUserHelper,
} from '../../features/user/userSlice';

const Users = () => {
    const { token } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const {
        currentUser: { username },
    } = useSelector((state) => state.auth);

    const currentUserData = users.find((user) => user.username === username);
    const suggestedUsers = users.filter((user) => user.username !== username);

    // Will use this if I decide to remove users from list after following
    const filteredSuggestedUsers = users
        ?.filter((user) => user.username !== currentUserData.username)
        ?.filter(
            (user) =>
                !currentUserData?.following.find(
                    (followedUser) => followedUser.username === user.username,
                ),
        );

    useEffect(() => {
        dispatch(dispatch(() => getAllUsersHelper()));
    }, [dispatch]);

    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 right-0 left-0 bg-primary-bg z-10">
                <NavBar />
            </div>
            <div className="xs:w-screen xs:mx-auto xs:px-0 w-full h-full flex justify-center p-4 mt-20">
                <div className="home-body flex h-full xs:w-full lg:w-4/5">
                    <div className="sidebar-container hidden lg:block h-full w-[450px] fixed left-0">
                        <SideBar />
                    </div>

                    <div className="home-main xs:w-full lg:px-12 lg:w-7/12 mx-auto">
                        <h3 className="text-xl text-left">People</h3>
                        <div className="xs:w-full lg:block lg:w-full lg:mx-auto xl:w-9/12 xl:ml-0">
                            {/* <h3 className="text-xl text-left p-2 w-full bg-color-grey text-primary-bg">
                                All Users
                            </h3> */}
                            <div className="flex flex-col w-full px-2">
                                {suggestedUsers.map((user) => {
                                    return (
                                        <div className="flex justify-between py-1" key={user?._id}>
                                            <Link to={`/profile/${user?.username}`}>
                                                <li className="sidebar-list-item text-lg list-none flex items-center hover:cursor-pointer">
                                                    <div className="w-[48px] mr-2">
                                                        <img
                                                            src={user?.avatarUrl}
                                                            alt={user?.username}
                                                            className="rounded-full"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <p className="text-left">
                                                            {user?.firstName} {user?.lastName}
                                                        </p>
                                                        <p className="text-left">
                                                            @{user?.username}
                                                        </p>
                                                    </div>
                                                </li>
                                            </Link>
                                            {currentUserData?.following?.find(
                                                (followedUser) =>
                                                    user.username === followedUser.username,
                                            ) ? (
                                                <li
                                                    className="sidebar-list-item text-xl list-none flex items-center hover:cursor-pointer"
                                                    onClick={() =>
                                                        dispatch(
                                                            unfollowUserHelper({
                                                                followUserId: user._id,
                                                                token,
                                                            }),
                                                        )
                                                    }
                                                >
                                                    <i className="fal fa-user-minus"></i>
                                                </li>
                                            ) : (
                                                <li
                                                    className="sidebar-list-item text-xl list-none flex items-center hover:cursor-pointer"
                                                    onClick={() =>
                                                        dispatch(
                                                            followUserHelper({
                                                                followUserId: user._id,
                                                                token,
                                                            }),
                                                        )
                                                    }
                                                >
                                                    <i className="fal fa-user-plus"></i>
                                                </li>
                                            )}
                                            {/* // <li
                                //     className="sidebar-list-item text-xl list-none flex items-center hover:cursor-pointer"
                                //     onClick={() =>
                                //         dispatch(
                                //             followUserHelper({ followUserId: user._id, token }),
                                //         )
                                //     }
                                // >
                                //     <i className="fal fa-user-plus"></i>
                                // </li> */}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-container hidden lg:block h-full w-[450px] fixed right-0">
                        <SideBarRight />
                    </div>
                </div>
            </div>
            <MobileNavigation />
        </div>
    );
};

export { Users };
