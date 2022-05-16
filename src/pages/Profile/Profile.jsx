import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { NavBar, SideBar, Post, SideBarRight } from '../../components';
import { getAllUsersHelper, getUsersPost } from '../../features/user/userSlice';

const Profile = () => {
    const { username } = useParams();

    const { users, userPost } = useSelector((state) => state.users);
    const usersAll = users?.users;
    const dispatch = useDispatch();

    const currentUser = usersAll?.find((currUser) => currUser.username === username);
    // console.log(currentUser);

    useEffect(() => {
        dispatch(getAllUsersHelper());
        dispatch(getUsersPost(username));
    }, [dispatch, username]);

    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 right-0 left-0 bg-primary-bg">
                <NavBar />
            </div>
            <div className="w-full h-full flex justify-center p-4 mt-20">
                <div className="home-body flex h-full w-4/5">
                    <div className="sidebar-container h-full w-[450px] fixed left-0">
                        <SideBar />
                    </div>

                    <div className="profile-main px-12 w-7/12 mx-auto">
                        <div className="flex justify-center">
                            <img
                                src={'https://i.pravatar.cc/200'}
                                alt="profile-avatar"
                                className="rounded-full"
                            />
                        </div>

                        <div className="py-2">
                            <p className="text-xl">
                                {currentUser?.firstName} {currentUser?.lastName}
                            </p>
                            <p className="text-color-hover-grey">@{username}</p>
                        </div>

                        <div className="w-full py-2">
                            <Link
                                to="/edit-profile"
                                className="border-[1px] px-10 py-2 rounded bg-color-alert-error hover:bg-color-highlight-orange"
                            >
                                Edit Profile
                            </Link>
                        </div>

                        <div className="py-2">
                            <p>{currentUser?.bio}</p>
                            <a
                                href={currentUser?.site}
                                className="underline text-color-alert-error"
                            >
                                <i className="fal fa-globe pr-1"></i> {currentUser?.site}
                            </a>
                        </div>

                        <div className="py-2 flex justify-center border-[1px] rounded">
                            <div className="flex flex-col px-4">
                                <p>{currentUser?.following?.length}</p>
                                <p>Following</p>
                            </div>
                            <div className="flex flex-col px-4">
                                <p>10</p>
                                <p>Posts</p>
                            </div>
                            <div className="flex flex-col px-4">
                                <p>{currentUser?.followers?.length}</p>
                                <p>Folowers</p>
                            </div>
                        </div>

                        <div className="posts py-4 text-left">
                            <p className="text-xl">Your Posts</p>
                            {userPost?.map((post) => (
                                <Post
                                    postData={post}
                                    firstName={currentUser?.firstName}
                                    lastName={currentUser?.lastName}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-container h-full w-[450px] fixed right-0">
                        <SideBarRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Profile };
