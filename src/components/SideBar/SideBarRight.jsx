import { useSelector } from 'react-redux';

const SideBarRight = () => {
    const { users } = useSelector((state) => state.users);
    const {
        currentUser: { username },
    } = useSelector((state) => state.auth);
    const suggestedUsers = users.filter((user) => user.username !== username);
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
                                    <i className="far fa-user-circle pr-2 text-3xl"></i>
                                    <div className="flex flex-col justify-start">
                                        <p className="text-left">
                                            {user?.firstName} {user?.lastName}
                                        </p>
                                        <p className="text-left">@{user?.username}</p>
                                    </div>
                                </li>
                                <li className="sidebar-list-item text-xl list-none flex items-center hover:cursor-pointer">
                                    <i class="fal fa-user-plus"></i>
                                </li>
                            </div>
                        );
                    })
                    .slice(0, 3)}
            </div>
        </div>
    );
};

export { SideBarRight };
