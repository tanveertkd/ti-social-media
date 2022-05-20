import { useSelector } from 'react-redux';
import { NavBar, Post, SideBar, SideBarRight } from '../../components';

const Explore = () => {
    const { posts } = useSelector((state) => state.post);
    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 right-0 left-0 bg-primary-bg z-10">
                <NavBar />
            </div>
            <div className="xs:w-screen xs:mx-auto xs:px-0 w-full h-full flex justify-center p-4 mt-20">
                <div className="home-body flex h-full w-4/5">
                    <div className="sidebar-container hidden lg:block h-full w-[450px] fixed left-0">
                        <SideBar />
                    </div>

                    <div className="home-main xs:w-full lg:px-12 lg:w-7/12 m-auto">
                        <h3 className="text-xl text-left">Explore</h3>
                        {posts?.map((post) => (
                            <Post key={post?._id} postData={post} />
                        )).reverse()}
                    </div>

                    <div className="sidebar-container hidden lg:block h-full w-[450px] fixed right-0">
                        <SideBarRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Explore };