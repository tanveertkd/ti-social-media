import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    NavBar,
    Post,
    PostInput,
    SideBar,
    SideBarRight,
    SortOverflowMenu,
    Loader,
} from '../../components/';
import { getAllPostsHelper } from '../../features/posts/postSlice';
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
        dispatch(getAllPostsHelper());
    }, [dispatch]);

    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 right-0 left-0 bg-primary-bg z-10">
                <NavBar />
            </div>
            <div className="xs:w-screen xs:mx-auto xs:px-0 w-full h-full flex justify-center p-4 mt-20">
                <div className="home-body flex h-full w-4/5 justify-center">
                    <div className="sidebar-container hidden lg:block h-full w-[450px] fixed left-0">
                        <SideBar />
                    </div>

                    <div className="home-main xs:w-full lg:px-12 lg:w-7/12">
                        <PostInput />
                        <div className="filters flex justify-between my-4 relative">
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
                                        Seems empty here. You can follow someone to see their posts.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="sidebar-container hidden lg:block h-full w-[450px] fixed right-0">
                        <SideBarRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Home };
