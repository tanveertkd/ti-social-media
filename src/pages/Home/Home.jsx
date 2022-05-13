import { NavBar, PostInput, SideBar } from '../../components/';

const Home = () => {
    return (
        <div className="flex flex-col h-screen">
            <NavBar />
            <div className="home-body flex h-full">
                <div className="sidebar-container h-full">
                    <SideBar />
                </div>
                <div className="home-main">
                    <PostInput />
                </div>
            </div>
        </div>
    );
};

export { Home };
