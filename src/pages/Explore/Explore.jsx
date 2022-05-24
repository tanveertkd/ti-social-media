import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, MobileNavigation, NavBar, Post, SideBar, SideBarRight } from '../../components';
import { resetSearch } from '../../features/user/userSlice';

const Explore = () => {
    const { posts, isLoading } = useSelector((state) => state.post);
    const { currentUser } = useSelector((state) => state.auth);
    const postReversed = [...posts]?.reverse();

    const dispatch = useDispatch();
    useEffect(() => {
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
                        <p className="text-3xl">Explore</p>
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

export { Explore };
