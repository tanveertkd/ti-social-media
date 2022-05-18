import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    followUserHelper,
    getAllUsersHelper,
    unfollowUserHelper,
} from '../../features/user/userSlice';

const SideBarRight = () => {
    const { token } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const {
        currentUser: { username },
    } = useSelector((state) => state.auth);

    const currentUserData = users.find((user) => user.username === username);
    const suggestedUsers = users.filter((user) => user.username !== username);

    // Will use this if I decide to remove users from list after following
    const filteredSuggestedUsers = users
        ?.filter((user) => user.username !== currentUserData.username)
        ?.filter(
            (user) =>
                !currentUserData?.following.find(
                    (followedUser) => followedUser.username === user.username,
                ),
        );

    useEffect(() => {
        dispatch(dispatch(() => getAllUsersHelper()));
    }, [dispatch]);

    return (
        <div className="hidden lg:block lg:w-3/5 lg:mx-auto xl:w-9/12 xl:ml-0 border-[1px] border-color-grey rounded">
            <h3 className="text-xl text-left p-2 w-full bg-color-grey text-primary-bg">
                Who to follow?
            </h3>
            <div className="flex flex-col w-full px-2">
                {suggestedUsers
                    .map((user) => {
                        return (
                            <div className="flex justify-between py-1" key={user?._id}>
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
                                                followUserHelper({ followUserId: user._id, token }),
                                            )
                                        }
                                    >
                                        <i className="fal fa-user-plus"></i>
                                    </li>
                                )}
                                {/* // <li
                                //     className="sidebar-list-item text-xl list-none flex items-center hover:cursor-pointer"
                                //     onClick={() =>
                                //         dispatch(
                                //             followUserHelper({ followUserId: user._id, token }),
                                //         )
                                //     }
                                // >
                                //     <i className="fal fa-user-plus"></i>
                                // </li> */}
                            </div>
                        );
                    })
                    .slice(0, 3)}
            </div>
        </div>
    );
};

export { SideBarRight };
