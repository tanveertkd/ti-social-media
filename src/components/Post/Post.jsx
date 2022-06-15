import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    dislikePostHelper,
    likePostHelper,
    addBookmarkHelper,
    removeBookmarkHelper,
} from '../../features/posts/postSlice';
import { EditPostModal } from '../EditPostModal/EditPostModal';
import { OverflowMenu } from '../OverflowMenu/OverflowMenu';
import { postTime, getSharableLink } from '../../utils/';

const Post = ({ postData }) => {
    const { token, currentUser } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);
    const { posts, bookmarkedPosts } = useSelector((state) => state.post);

    const dispatch = useDispatch();

    const currentLoggedUser = users?.find((currUser) => currUser?.username === postData?.username);
    const currentPost = posts?.find((post) => post?._id === postData?._id);

    const isPostAlreadyLiked = (postData, username) => {
        return postData?.likes?.likedBy?.find((user) => user.username === username);
    };

    const isPostAuthor = (post) => post.username === currentUser.username;
    const isPostBookmarked = (bookmarks, postId) =>
        bookmarks.find((bookmark) => bookmark === postId);

    const [postOverflowMenu, setPostOverflowMenu] = useState(false);
    const [editModal, setEditModal] = useState(false);
    return (
        <div
            className="post border-[1px] p-4 border-color-text-lighter-grey rounded my-4 shadow-md"
            key={postData?._id}
        >
            {editModal ? (
                <div className="edit-modal-container absolute top-0 right-0 bottom-0 left-0 z-10 w-full flex justify-center items-center bg-color-modal-bg">
                    <EditPostModal
                        postData={postData}
                        setEditModal={setEditModal}
                        token={token}
                        userAvatar={currentLoggedUser?.avatarUrl}
                    />
                </div>
            ) : null}
            <div className="list-none flex items-center justify-between">
                <div className="flex hover:cursor-pointer xs:w-full">
                    <Link to={`/profile/${currentLoggedUser?.username}`} className="flex xs:w-full">
                        <div className="w-[48px] mr-2">
                            <img
                                src={currentLoggedUser?.avatarUrl}
                                alt={currentLoggedUser?.username}
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex md:justify-start justify-center items-center xs:w-full xs:justify-start">
                            <div className="md:flex md:justify-start">
                                <p className="lg:text-lg xs:text-base text-left">
                                    {currentLoggedUser?.firstName} {currentLoggedUser?.lastName}
                                </p>
                                <p className="text-sm xs:px-0 md:px-2 md:m-auto">
                                    @{postData?.username}
                                </p>
                            </div>
                            <div className="flex items-center md:justify-start">
                                <p className="separator pr-2 hidden md:flex">•</p>
                                <p className="text-xs xs:mx-2">{postTime(postData?.createdAt)}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div
                    className="hover:bg-slate-200 px-2 rounded-full hover:cursor-pointer relative"
                    onClick={() => setPostOverflowMenu((menuState) => !menuState)}
                >
                    <i className="far fa-ellipsis-v hover:cursor-pointer p-2"></i>
                    {postOverflowMenu ? (
                        <OverflowMenu
                            menuType={isPostAuthor(postData)}
                            followUserId={currentLoggedUser?._id}
                            postId={postData?._id}
                            postUser={postData?.username}
                            token={token}
                            userData={currentUser?.username}
                            setEditModal={setEditModal}
                        />
                    ) : null}
                </div>
            </div>
            <Link to={`/post/${postData?._id}`}>
                <li className="list-none text-left py-2">{postData?.content}</li>
            </Link>
            <li className="list-none flex justify-around pb-2">
                <div>
                    {!isPostAlreadyLiked(currentPost, currentUser?.username) ? (
                        <i
                            className="fal fa-thumbs-up hover:text-color-highlight-orange hover:cursor-pointer"
                            onClick={() =>
                                dispatch(likePostHelper({ postId: postData._id, token }))
                            }
                        ></i>
                    ) : (
                        <i
                            className="fas fa-thumbs-up hover:text-color-highlight-orange hover:cursor-pointer"
                            onClick={() =>
                                dispatch(dislikePostHelper({ postId: postData._id, token }))
                            }
                        ></i>
                    )}

                    {postData?.likes?.likeCount}
                </div>
                <div>
                    <Link to={`/post/${postData?._id}`}>
                        <i className="fal fa-comments hover:text-color-highlight-orange hover:cursor-pointer"></i>{' '}
                        {postData?.comments?.length}
                    </Link>
                </div>
                <div>
                    <i
                        className="fal fa-share hover:text-color-highlight-orange hover:cursor-pointer"
                        onClick={() => getSharableLink(postData?._id)}
                    ></i>
                </div>
                <div>
                    {!isPostBookmarked(bookmarkedPosts, postData?._id) ? (
                        <i
                            className="fal fa-bookmark hover:text-color-highlight-orange hover:cursor-pointer"
                            onClick={() =>
                                dispatch(addBookmarkHelper({ postId: postData?._id, token }))
                            }
                        ></i>
                    ) : (
                        <i
                            className="fas fa-bookmark hover:text-color-highlight-orange hover:cursor-pointer"
                            onClick={() =>
                                dispatch(removeBookmarkHelper({ postId: postData?._id, token }))
                            }
                        ></i>
                    )}
                </div>
            </li>
        </div>
    );
};
export { Post };
