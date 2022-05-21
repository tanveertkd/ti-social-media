import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Comment, MobileNavigation, NavBar, Post, SideBar, SideBarRight } from '../../components';
import { addCommentsHelper } from '../../features/posts/postSlice';

const PostComment = () => {
    const { postId } = useParams();
    const { token } = useSelector((state) => state.auth);
    const { posts } = useSelector((state) => state.post);
    const { users } = useSelector((state) => state.users);
    const currentPost = posts?.find((post) => post?._id === postId);
    const currentPostUser = users?.find((user) => currentPost?.username === user.username);

    const dispatch = useDispatch();

    const [userInput, setUserInput] = useState({
        text: '',
    });

    const handleComment = (event, userInput) => {
        event.preventDefault();
        dispatch(addCommentsHelper({ postId: currentPost._id, userInput, token }));
        setUserInput({
            text: '',
        });
    };

    const currentPostComments = currentPost?.comments;

    return (
        <div className="flex flex-col h-screen">
            <div className="navbar fixed top-0 right-0 left-0 bg-primary-bg z-10">
                <NavBar />
            </div>
            <div className="xs:w-screen xs:mx-auto xs:px-0 flex justify-center p-4 mt-20">
                <div className="home-body flex h-full xs:w-full xs:px-1 w-4/5 justify-center">
                    <div className="sidebar-container z-10 hidden md:block h-full md:w-fit xl:w-[400px] fixed left-8">
                        <SideBar />
                    </div>

                    <div className="home-main xs:w-full flex flex-col md:items-end md:w-full xl:px-12 lg:items-center lg:w-7/12">
                        <div className="md:w-2/3 md:mr-4 lg:w-3/4">
                            <Post postData={currentPost} user={currentPostUser} />
                            <div className="filters flex md:justify-end lg:justify-between my-4 relative">
                                <form
                                    className="flex w-full"
                                    onSubmit={(event) => handleComment(event, userInput)}
                                >
                                    <input
                                        name="post-input"
                                        id="post-input"
                                        cols="60"
                                        rows="5"
                                        placeholder="Comment"
                                        value={userInput.text}
                                        onChange={(e) =>
                                            setUserInput({ ...userInput, text: e.target.value })
                                        }
                                        className="w-full border-[1px] border-color-grey p-1 rounded-sm outline-none focus:border-color-idle mr-1"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-color-alert-error h-10 w-24 rounded text-primary-bg hover:bg-color-highlight-orange"
                                    >
                                        Comment
                                    </button>
                                </form>
                            </div>

                            {currentPost?.comments?.length > 0 ? (
                                <div>
                                    {[...currentPostComments].reverse().map((comment) => (
                                        <Comment
                                            comment={comment}
                                            users={users}
                                            key={comment._id}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="my-2">No comments</div>
                            )}
                        </div>
                    </div>
                    <MobileNavigation />
                    <div className="sidebar-container z-10 hidden lg:block h-full xl:w-[400px] fixed right-8">
                        <SideBarRight />
                    </div>
                </div>
            </div>
        </div>
    );
};
export { PostComment };
