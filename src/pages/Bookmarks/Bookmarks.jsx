import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar, Post, SideBar, SideBarRight } from '../../components';
import { getAllBookmarksHelper } from '../../features/posts/postSlice';

const Bookmarks = () => {
    const {
        auth: { token },
        post: { bookmarkedPosts },
    } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBookmarksHelper({ token }));
    }, [dispatch, token]);

    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 right-0 left-0 bg-primary-bg">
                <NavBar />
            </div>
            <div className="w-full h-full flex justify-center p-4 mt-20">
                <div className="home-body flex justify-center h-full w-4/5">
                    <div className="sidebar-container h-full w-[450px] fixed left-0">
                        <SideBar />
                    </div>

                    <div className="home-main px-12 w-7/12">
                        <p className='text-3xl'>Bookmarks</p>
                        {bookmarkedPosts?.length > 0 ? (
                            bookmarkedPosts?.map((post) => <Post postData={post} />)
                        ) : (
                            <div>No bookmarks added.</div>
                        )}
                    </div>

                    <div className="sidebar-container h-full w-[450px] fixed right-0">
                        <SideBarRight />
                    </div>
                </div>
            </div>
        </div>
    );
};
export { Bookmarks };
