import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { dislikePostHelper, likePostHelper } from '../../features/posts/postSlice';

const Post = ({ postData }) => {
    const { token, currentUser } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);
    const { posts } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const currentLoggedUser = users?.find((currUser) => currUser?.username === postData?.username);
    const currentPost = posts?.find(post=>post?._id === postData?._id)

    const isPostAlreadyLiked = (postData, username) => {
        return postData?.likes?.likedBy?.find((user) => user.username === username);
    };
    
    return (
        <div
            className="post border-[1px] p-4 border-color-text-lighter-grey rounded my-4 shadow-md"
            key={postData?._id}
        >
            <li className="list-none flex items-center">
                <i className="far fa-user-circle pr-2 text-4xl"></i>
                <div className="flex justify-center items-center">
                    <p className="text-lg">
                        {currentLoggedUser?.firstName} {currentLoggedUser?.lastName}
                    </p>
                    <p className="text-sm px-2">@{postData?.username}</p>
                    <p className="separator pr-2">•</p>
                    <p className="text-sm">
                        24<sup>th</sup>Sep 2022
                    </p>
                </div>
            </li>
            <li className="list-none text-left py-2">{postData?.content}</li>
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
                    <i className="fal fa-share hover:text-color-highlight-orange hover:cursor-pointer"></i>
                </div>
                <div>
                    <i className="fal fa-bookmark hover:text-color-highlight-orange hover:cursor-pointer"></i>
                </div>
            </li>
        </div>
    );
};
export { Post };
