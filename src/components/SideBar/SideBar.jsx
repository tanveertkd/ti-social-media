const SideBar = () => {
    return (
        <div className="flex flex-col justify-between w-full items-center">
            <div className="top-section w-80">
                <ul className="sidebar-ul text-left px-4">
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

            <div className="bottom-section w-80 flex justify-between mt-20 px-4">
                <li className="sidebar-list-item p-2 text-xl list-none flex items-center hover:cursor-pointer">
                    <i class="far fa-user-circle pr-2 text-3xl"></i>
                    <div className="flex flex-col">
                        <p>John Doe</p>
                        <p>@doejohn</p>
                    </div>
                </li>
                <li className="sidebar-list-item p-2 text-xl list-none flex items-center hover:cursor-pointer">
                    <i class="far fa-ellipsis-h"></i>
                </li>
            </div>
        </div>
    );
};

export { SideBar };
