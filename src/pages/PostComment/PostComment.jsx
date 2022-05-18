import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavBar, Post, SideBar, SideBarRight } from '../../components';
import { addCommentsHelper } from '../../features/posts/postSlice';

const PostComment = () => {
    const { postId } = useParams();
    const { token } = useSelector((state) => state.auth);
    const { posts } = useSelector((state) => state.post);
    const { users } = useSelector((state) => state.users);
    const currentPost = posts?.find((post) => post?._id === postId);
    const currentPostUser = users?.find((user) => currentPost?.username === user.username);
    // console.log(currentPost);

    const dispatch = useDispatch();

    const [userInput, setUserInput] = useState({
        text: '',
    });

    const handleComment = (event, userInput) => {
        event.preventDefault();
        dispatch(addCommentsHelper({ postId: currentPost._id, userInput, token }));
    };

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
                        <Post postData={currentPost} user={currentPostUser} />
                        <div className="flex">
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

                        {currentPost?.comments?.map((comment) => (
                            <div
                                className="post border-[1px] p-4 border-color-text-lighter-grey rounded my-4 shadow-md"
                                key={comment?._id}
                            >
                                <li className="list-none flex items-center">
                                    <i className="far fa-user-circle pr-2 text-4xl"></i>
                                    <div className="flex justify-center items-center">
                                        <p className="text-lg">Test</p>
                                        <p className="text-sm px-2">@{comment?.username}</p>
                                        <p className="separator pr-2">•</p>
                                        <p className="text-sm">
                                            24<sup>th</sup>Sep 2022
                                        </p>
                                    </div>
                                </li>
                                <li className="list-none text-left py-2">{comment?.text}</li>
                            </div>
                        ))}
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
