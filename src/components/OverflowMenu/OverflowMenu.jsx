import { useDispatch, useSelector } from 'react-redux';
import { followUserHelper, unfollowUserHelper } from '../../features/user/userSlice';
import { deletePostHelper } from '../../features/posts/postSlice';

const OverflowMenu = ({ menuType, followUserId, postId, postUser, token, userData }) => {
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const user = users?.find((data) => data?.username === userData);
    const isFollowing = user?.following?.find((user) => user.username === postUser);
    return (
        <div className="absolute right-0">
            {menuType ? (
                <div className="user-overflow-menu select-none border-[1px] w-max text-left list-none p-2 bg-primary-bg">
                    <li className="p-2">Edit post</li>
                    <li
                        className="p-2"
                        onClick={() => dispatch(deletePostHelper({ postId, token }))}
                    >
                        Delete Post
                    </li>
                </div>
            ) : (
                <div className="visitor-overflow-menu select-none border-[1px] w-max text-left list-none p-2 bg-primary-bg">
                    {!isFollowing ? (
                        <li
                            className="p-2"
                            onClick={() => dispatch(followUserHelper({ followUserId, token }))}
                        >
                            Follow user
                        </li>
                    ) : (
                        <li
                            className="p-2"
                            onClick={() => dispatch(unfollowUserHelper({ followUserId, token }))}
                        >
                            Unfollow user
                        </li>
                    )}
                </div>
            )}
        </div>
    );
};

export { OverflowMenu };
