import { NavBar, Post, PostInput, SideBar } from '../../components/';

const Home = () => {
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

                    <div className="home-main px-12 w-7/12 m-auto">
                        <PostInput />
                        <h3 className="text-xl text-left">Latest Posts</h3>
                        {[1,2,3,4,5,6,7,8,9,10].map(post => <Post />)}
                    </div>

                    <div className="sidebar-container h-full w-[450px] fixed right-0">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Home };
