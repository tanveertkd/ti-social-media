const SideBarRight = () => {
    return (
        <div className="w-9/12 border-[1px] border-color-grey rounded">
            <h3 className="text-xl text-left p-2 w-full bg-color-grey text-primary-bg">Who to follow?</h3>
            <div className="flex flex-col w-full px-2">
                {[1, 2, 3].map((users) => {
                    return (
                        <div className="flex justify-between py-1">
                            <li className="sidebar-list-item text-lg list-none flex items-center hover:cursor-pointer">
                                <i class="far fa-user-circle pr-2 text-3xl"></i>
                                <div className="flex flex-col">
                                    <p>John Doe</p>
                                    <p>@doejohn</p>
                                </div>
                            </li>
                            <li className="sidebar-list-item text-xl list-none flex items-center hover:cursor-pointer">
                                <i class="fal fa-user-plus"></i>
                            </li>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { SideBarRight };
