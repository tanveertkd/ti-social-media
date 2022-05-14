import { Link } from 'react-router-dom';
import { NavBar, SideBar, Post, SideBarRight } from '../../components';

const Profile = () => {
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
                            <p className="text-xl">John Doe</p>
                            <p className="text-color-hover-grey">@doejohn</p>
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
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Consectetur officiis dolor deserunt quod voluptatem veniam eaque
                                rerum tempore vitae minus laudantium corporis consequatur esse,
                                alias accusamus!
                            </p>
                            <Link
                                to={'https://www.portfolio.com'}
                                className="underline text-color-alert-error"
                            >
                                <i className="fal fa-globe pr-1"></i> portfolio.com
                            </Link>
                        </div>

                        <div className="py-2 flex justify-center border-[1px] rounded">
                            <div className="flex flex-col px-4">
                                <p>10</p>
                                <p>Following</p>
                            </div>
                            <div className="flex flex-col px-4">
                                <p>10</p>
                                <p>Posts</p>
                            </div>
                            <div className="flex flex-col px-4">
                                <p>10</p>
                                <p>Folowers</p>
                            </div>
                        </div>

                        <div className="posts py-4 text-left">
                            <p className="text-xl">Your Posts</p>
                            {[1,2,3,4,5,6,7,8,9,10].map(post => <Post />)}
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
