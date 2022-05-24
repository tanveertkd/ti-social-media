import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    NavBar,
    Post,
    PostInput,
    SideBar,
    SideBarRight,
    SortOverflowMenu,
    Loader,
    MobileNavigation,
} from '../../components/';
import { getAllPostsHelper } from '../../features/posts/postSlice';
import { getAllUsersHelper, resetSearch } from '../../features/user/userSlice';
import { sortPostsBy } from '../../utils/sortPostsBy';
const Home = () => {
    const {
        post: { posts, sortBy, isLoading },
        auth: { currentUser },
        users: { users },
    } = useSelector((state) => state);

    const dispatch = useDispatch();

    const userLoggedIn = users?.find((user) => user.username === currentUser.username);

    const userfollowingPosts = posts?.filter(
        (post) =>
            currentUser.username === post.username ||
            userLoggedIn?.following?.find(
                (user) =>
                    user?.username === post.username || currentUser.username === post.username,
            ),
    );

    const sortedPosts = sortPostsBy(userfollowingPosts, sortBy);
    const [sortOverflowMenu, setSortOverflowMenu] = useState(false);

    useEffect(() => {
        dispatch(getAllUsersHelper());
        dispatch(getAllPostsHelper());
        dispatch(resetSearch());
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
                            <PostInput />
                            <div className="filters flex md:justify-end lg:justify-between my-4 relative">
                                <h3 className="text-xl text-left">{sortBy} Posts</h3>
                                <i
                                    className="fa fa-sort-alt hover:bg-slate-200 hover:cursor-pointer p-2 rounded-full"
                                    onClick={() => setSortOverflowMenu((prev) => !prev)}
                                ></i>
                                {sortOverflowMenu && (
                                    <div className="absolute right-0 m-6 z-30">
                                        <SortOverflowMenu setSortOverflow={setSortOverflowMenu} />
                                    </div>
                                )}
                            </div>

                            {isLoading ? (
                                <div className="flex justify-center items-center h-max">
                                    <Loader />
                                </div>
                            ) : (
                                <div>
                                    {sortedPosts?.length > 0 ? (
                                        sortedPosts?.map((post) => (
                                            <Post key={post?._id} postData={post} />
                                        ))
                                    ) : (
                                        <div>
                                            Seems empty here. You can follow someone to see their
                                            posts.
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <MobileNavigation username={currentUser?.username}/>
                    </div>

                    <div className="sidebar-container z-10 hidden lg:block h-full xl:w-[300px] fixed right-8">
                        <SideBarRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Home };
