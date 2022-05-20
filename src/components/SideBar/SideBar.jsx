import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const active = {
    color: '#ff3d00',
};

const SideBar = () => {
    const {
        currentUser: { username, firstName, lastName },
    } = useSelector((state) => state.auth);

    const { users } = useSelector((state) => state.users);
    const currentUser = users?.find((currUser) => currUser.username === username);

    return (
        // hidden lg:flex
        <div className="flex flex-col justify-between w-full items-center">
            <div className="top-section md:w-50 xl:w-80">
                <ul className="sidebar-ul text-left px-4">
                    <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                        <NavLink
                            to="/home"
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i className="far fa-home-alt h-6 w-6 mr-2"></i> Home
                        </NavLink>
                    </li>
                    <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                        <NavLink
                            to="/explore"
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i className="far fa-compass h-6 w-6 mr-2"></i> Explore
                        </NavLink>
                    </li>
                    <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                        <NavLink
                            to="/bookmarks"
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i className="far fa-bookmark h-6 w-6 mr-2"></i> Bookamrks
                        </NavLink>
                    </li>
                    <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                        <i className="far fa-bell h-6 w-6 mr-2"></i> Notifications
                    </li>
                    <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                        <NavLink
                            to="/people"
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i className="far fa-users h-6 w-6 mr-2"></i> People
                        </NavLink>
                    </li>
                    <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                        <NavLink
                            to={`/profile/${username}`}
                            style={({ isActive }) => (isActive ? active : undefined)}
                        >
                            <i className="far fa-user-circle h-6 w-6 mr-2"></i> Profile
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="bottom-section md:w-50 xl:w-80 flex justify-between mt-20 px-4">
                <li className="sidebar-list-item p-2 lg:text-xl list-none flex items-center hover:cursor-pointer">
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
