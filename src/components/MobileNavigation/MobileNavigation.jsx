import { Link } from 'react-router-dom';
const MobileNavigation = ({ username }) => {
    return (
        <div className="mobile-nav md:hidden fixed bottom-0 bg-primary-bg w-full">
            <ul className="nav-main-left nav-main-ul hover:cursor-pointer xs:flex xs:justify-between xs:w-full md:w-fit">
                <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                    <Link to="/home">
                        <i className="fas fa-home-alt h-6 w-6 mr-2"></i>
                    </Link>
                </li>
                <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                    <Link to="/explore">
                        <i className="fas fa-compass h-6 w-6 mr-2"></i>
                    </Link>
                </li>
                <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                    <Link to="/bookmarks">
                        <i className="fas fa-bookmark h-6 w-6 mr-2"></i>
                    </Link>
                </li>
                <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                    <Link to="/people">
                        <i className="fad fa-users h-6 w-6 mr-2"></i>
                    </Link>
                </li>
                <li className="sidebar-list-item p-2 lg:text-xl hover:cursor-pointer">
                    <Link to={`/profile/${username}`}>
                        <i className="fas fa-user-circle h-6 w-6 mr-2"></i>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export { MobileNavigation };
