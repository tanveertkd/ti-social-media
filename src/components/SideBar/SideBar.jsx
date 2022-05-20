import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const {
        currentUser: { username, firstName, lastName },
    } = useSelector((state) => state.auth);

    const { users } = useSelector((state) => state.users);
    const currentUser = users?.find((currUser) => currUser.username === username);

    return (
        <div className="hidden lg:flex flex-col justify-between w-full items-center">
            <div className="top-section w-80">
                <ul className="sidebar-ul text-left px-4">
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <Link to="/home">
                            <i className="far fa-home-alt h-6 w-6 mr-2"></i> Home
                        </Link>
                    </li>
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <Link to="/explore">
                            <i className="far fa-compass h-6 w-6 mr-2"></i> Explore
                        </Link>
                    </li>
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <Link to="/bookmarks">
                            <i className="far fa-bookmark h-6 w-6 mr-2"></i> Bookamrks
                        </Link>
                    </li>
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <i className="far fa-bell h-6 w-6 mr-2"></i> Notifications
                    </li>
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <Link to={`/profile/${username}`}>
                            <i className="far fa-user-circle h-6 w-6 mr-2"></i> Profile
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="bottom-section w-80 flex justify-between mt-20 px-4">
                <li className="sidebar-list-item p-2 text-xl list-none flex items-center hover:cursor-pointer">
                    <Link to={`/profile/${username}`} className="flex items-center">
                        <div className="w-[48px] mr-2">
                            <img
                                src={currentUser?.avatarUrl}
                                alt={currentUser?.username}
                                className="rounded-full border-[2px] border-color-alert-success"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <p>
                                {firstName} {lastName}
                            </p>
                            <p>@{username}</p>
                        </div>
                    </Link>
                </li>
                <li className="sidebar-list-item p-2 text-xl list-none flex items-center hover:cursor-pointer">
                    <i className="far fa-ellipsis-h"></i>
                </li>
            </div>
        </div>
    );
};

export { SideBar };
