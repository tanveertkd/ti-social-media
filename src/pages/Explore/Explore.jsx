import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, MobileNavigation, NavBar, Post, SideBar, SideBarRight } from '../../components';
import { resetSearch } from '../../features/user/userSlice';

const Explore = () => {
    const { posts, isLoading } = useSelector((state) => state.post);
    const { currentUser } = useSelector((state) => state.auth);
    const postReversed = [...posts]?.reverse();
    
    const dispatch = useDispatch();
    useEffect(() => dispatch(resetSearch()))

    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 right-0 left-0 bg-primary-bg z-10">
                <NavBar />
            </div>
            <div className="xs:w-screen xs:mx-auto xs:px-0 w-full h-full flex justify-center p-4 mt-20">
                <div className="home-body flex h-full w-4/5">
                    <div className="sidebar-container z-10 hidden md:block h-full md:w-fit xl:w-[400px] fixed left-8">
                        <SideBar />
                    </div>

                    <div className="home-main xs:w-full lg:px-12 lg:w-7/12 mx-auto">
                        <h3 className="text-3xl text-center">Explore</h3>
                        {isLoading ? (
                            <div className="flex justify-center items-center h-max">
                                <Loader />
                            </div>
                        ) : (
                            <div>
                                {postReversed?.length > 0 ? (
                                    postReversed?.map((post) => (
                                        <Post key={post?._id} postData={post} />
                                    ))
                                ) : (
                                    <div>Seems a bit empty here.</div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="sidebar-container z-10 hidden lg:block h-full xl:w-[400px] fixed right-8">
                        <SideBarRight />
                    </div>
                </div>
            </div>
            <MobileNavigation username={currentUser?.username} />
        </div>
    );
};

export { Explore };
