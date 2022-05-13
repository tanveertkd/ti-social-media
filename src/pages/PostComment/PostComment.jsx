import { NavBar, Post, SideBar, SideBarRight } from '../../components';

const PostComment = () => {
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
                        <Post />
                        <div className="flex">
                            <input
                                name="post-input"
                                id="post-input"
                                cols="60"
                                rows="5"
                                placeholder="Comment"
                                className="w-full border-[1px] border-color-grey p-1 rounded-sm outline-none focus:border-color-idle mr-1"
                            />
                            <button className="bg-color-alert-error h-10 w-24 rounded text-primary-bg hover:bg-color-highlight-orange">
                                Comment
                            </button>
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
export { PostComment };
