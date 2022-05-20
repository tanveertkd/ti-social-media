import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    NavBar,
    SideBar,
    Post,
    SideBarRight,
    EditProfileModal,
    Loader,
    MobileNavigation,
} from '../../components';
import {
    followUserHelper,
    unfollowUserHelper,
    getAllUsersHelper,
    getUsersPost,
} from '../../features/user/userSlice';

const Profile = () => {
    const { username } = useParams();

    const { currentUser, token } = useSelector((state) => state.auth);
    const { users, userPost, isLoading } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const currentLoggedUser = users?.find((currUser) => currUser.username === username);
    const user = users?.find((currUser) => currUser.username === currentUser.username);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        dispatch(getAllUsersHelper());
        dispatch(getUsersPost(username));
    }, [dispatch, username]);

    return (
        <div className="flex flex-col h-screen">
            <div className="navbar fixed top-0 right-0 left-0 bg-primary-bg z-10">
                <NavBar />
            </div>
            <div className="xs:w-screen xs:mx-auto xs:px-0 flex justify-center p-4 mt-20">
                <div className="home-body flex h-full xs:w-full xs:px-1 w-4/5 justify-center">
                    <div className="sidebar-container z-10 hidden md:block h-full md:w-fit xl:w-[400px] fixed left-8">
                        <SideBar />
                    </div>

                    <div className="home-main xs:w-full flex flex-col md:items-end md:w-full xl:px-12 lg:items-center lg:w-7/12">
                        <div className="md:w-2/3 md:mr-4 lg:w-3/4">
                            <div className="flex justify-center">
                                <img
                                    src={currentLoggedUser?.avatarUrl}
                                    alt="profile-avatar"
                                    className="rounded-full w-[200px]"
                                />
                            </div>

                            <div className="py-2">
                                <p className="text-xl">
                                    {currentLoggedUser?.firstName} {currentLoggedUser?.lastName}
                                </p>
                                <p className="text-color-hover-grey">@{username}</p>
                            </div>

                            <div className="w-full py-2">
                                {currentUser?.username === currentLoggedUser?.username ? (
                                    <button
                                        onClick={() => setModal(true)}
                                        className="border-[1px] px-10 py-2 rounded bg-color-alert-error hover:bg-color-highlight-orange"
                                    >
                                        Edit Profile
                                    </button>
                                ) : user?.following?.find(
                                      (followedUser) =>
                                          currentLoggedUser.username === followedUser.username,
                                  ) ? (
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                unfollowUserHelper({
                                                    followUserId: currentLoggedUser?._id,
                                                    token,
                                                }),
                                            )
                                        }
                                        className="border-[1px] px-10 py-2 rounded bg-color-alert-error hover:bg-color-highlight-orange"
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                followUserHelper({
                                                    followUserId: currentLoggedUser?._id,
                                                    token,
                                                }),
                                            )
                                        }
                                        className="border-[1px] px-10 py-2 rounded bg-color-alert-error hover:bg-color-highlight-orange"
                                    >
                                        Follow
                                    </button>
                                )}
                            </div>

                            {modal ? (
                                <div className="modal-container absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-color-modal-bg z-10">
                                    <EditProfileModal
                                        setModal={setModal}
                                        currentUser={currentLoggedUser}
                                    />
                                </div>
                            ) : null}

                            <div className="py-2">
                                <p>{currentLoggedUser?.bio}</p>
                                <a
                                    href={currentLoggedUser?.site}
                                    className="underline text-color-alert-error"
                                >
                                    <i className="fal fa-globe pr-1"></i> {currentLoggedUser?.site}
                                </a>
                            </div>

                            <div className="py-2 flex justify-center border-[1px] rounded">
                                <div className="flex flex-col px-4">
                                    <p>{currentLoggedUser?.following?.length}</p>
                                    <p>Following</p>
                                </div>
                                <div className="flex flex-col px-4">
                                    <p>{userPost?.length}</p>
                                    <p>Posts</p>
                                </div>
                                <div className="flex flex-col px-4">
                                    <p>{currentLoggedUser?.followers?.length}</p>
                                    <p>Folowers</p>
                                </div>
                            </div>

                            <div className="posts py-4 text-left">
                                <p className="text-xl">Your Posts</p>
                                {isLoading ? (
                                    <div className="flex justify-center items-center h-max">
                                        <Loader />
                                    </div>
                                ) : (
                                    <div>
                                        {userPost?.map((post) => (
                                            <Post
                                                key={post?._id}
                                                postData={post}
                                                firstName={currentLoggedUser?.firstName}
                                                lastName={currentLoggedUser?.lastName}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <MobileNavigation username={currentLoggedUser?.username} />
                    </div>

                    <div className="sidebar-container z-10 hidden lg:block h-full xl:w-[400px] fixed right-8">
                        <SideBarRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Profile };
