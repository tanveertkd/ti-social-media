import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { followUserHelper, unfollowUserHelper } from '../../features/user/userSlice';

const SearchModal = () => {
    const {
        token,
        currentUser: { username },
    } = useSelector((state) => state.auth);
    const { users, searchUserResult } = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const currentUserData = users.find((user) => user.username === username);

    return (
        <div className="bg-primary-bg border-[1px] border-color-grey rounded absolute xs:w-full xs:my-2 md:my-0 md:w-96">
            {searchUserResult?.length > 0 ? (
                <div>
                    {searchUserResult.map((user) => (
                        <div className="flex justify-between p-2" key={user?._id}>
                            <Link to={`/profile/${user?.username}`}>
                                <li className="sidebar-list-item text-lg list-none flex items-center hover:cursor-pointer">
                                    <div className="w-[48px] mr-2">
                                        <img
                                            src={user?.avatarUrl}
                                            alt={user?.username}
                                            className="rounded-full"
                                        />
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
                    ))}
                </div>
            ) : (
                <div>
                    <p className="text-base py-2 italic">No users found.</p>
                </div>
            )}
        </div>
    );
};

export { SearchModal };
