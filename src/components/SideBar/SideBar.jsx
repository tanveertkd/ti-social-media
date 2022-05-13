const SideBar = () => {
    return (
        <div className="flex flex-col justify-between h-full w-fit">
            <div className="top-section">
                <ul className="sidebar-ul text-left p-4 w-[250px]">
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <i class="far fa-home-alt pr-2"></i> Home
                    </li>
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <i class="far fa-compass pr-2"></i> Explore
                    </li>
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <i class="far fa-bookmark pr-2"></i> Bookamrks
                    </li>
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <i class="far fa-bell pr-2"></i> Notifications
                    </li>
                    <li className="sidebar-list-item p-2 text-xl hover:cursor-pointer">
                        <i class="far fa-user-circle pr-2"></i> Profile
                    </li>
                </ul>
            </div>

            <div className="bottom-section">
                <li className="sidebar-list-item p-2 text-xl list-none flex items-center hover:cursor-pointer">
                    <i class="far fa-user-circle pr-2 text-3xl"></i>
                    <div className="flex flex-col">
                        <p>John Doe</p>
                        <p>@doejohn</p>
                    </div>
                </li>
            </div>
        </div>
    );
};

export { SideBar };
