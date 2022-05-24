import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { followUserHelper, unfollowUserHelper } from '../../features/user/userSlice';

const UserCard = ({ token, user, currentUserData }) => {
    const dispatch = useDispatch()
    return (
        <div className="flex justify-between py-1" key={user?._id}>
            <Link to={`/profile/${user?.username}`}>
                <li className="sidebar-list-item text-lg list-none flex items-center hover:cursor-pointer">
                    <div className="w-[48px] mr-2">
                        <img src={user?.avatarUrl} alt={user?.username} className="rounded-full" />
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="text-left">
                            {user?.firstName} {user?.lastName}
                        </p>
                        <p className="text-left">@{user?.username}</p>
                    </div>
                </li>
            </Link>
            {currentUserData?.following?.find(
                (followedUser) => user.username === followedUser.username,
            ) ? (
                <li
                    className="sidebar-list-item text-xl list-none flex items-center hover:cursor-pointer"
                    onClick={() =>
                        dispatch(
                            unfollowUserHelper({
                                followUserId: user._id,
                                token,
                            }),
                        )
                    }
                >
                    <i className="fal fa-user-minus"></i>
                </li>
            ) : (
                <li
                    className="sidebar-list-item text-xl list-none flex items-center hover:cursor-pointer"
                    onClick={() =>
                        dispatch(
                            followUserHelper({
                                followUserId: user._id,
                                token,
                            }),
                        )
                    }
                >
                    <i className="fal fa-user-plus"></i>
                </li>
            )}
        </div>
    );
};

export { UserCard };
