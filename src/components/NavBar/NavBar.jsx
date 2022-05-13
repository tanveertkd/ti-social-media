import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="nav-main flex flex-wrap justify-between items-center p-4 border-b-2 text-lg h-18">
                {/*  Nav left */}
                <ul className="nav-main-left nav-main-ul hover:cursor-pointer">
                    <li className="nav-main-li nav-section-one">
                        <Link to="/" className="nav-main-item nav-item-home">
                            TI <span className="text-color-highlight-orange">Social</span>
                        </Link>
                        {/* <i
                            className="far fa-bars hamburger-menu"
                            onClick={() => toggleHamburger()}
                        ></i> */}
                    </li>
                </ul>

                {/* {Nav middle} */}
                <ul className="nav-main-middle nav-main-ul">
                    <li className="nav-main-li">
                        <label for="nav-main-search" className="nav-item-search">
                            <input
                                className="nav-item-search-input border-[1px] border-color-grey rounded w-96 p-1 text-sm relative"
                                type="text"
                                placeholder="Looking for someone?"
                                name="nav-search"
                            />
                            <i className="far fa-search nav-main-middle-icn hover:cursor-pointer absolute ml-[-20px] mt-1.5"></i>
                        </label>
                    </li>
                </ul>

                {/* Nav right */}
                <ul className="nav-main-right nav-main-ul flex hover:cursor-pointer">
                    <li className="nav-main-li">
                        <Link to="/" className="nav-main-item nav-btn-login">
                            Logout
                        </Link>
                    </li>

                    {/* <li className="nav-main-li">
                        {!auth ? (
                            <Link to="/login" className="nav-main-item nav-btn-login">
                                Login
                            </Link>
                        ) : (
                            <div className="nav-main-item nav-btn-login" onClick={signOutHandler}>
                                Logout
                            </div>
                        )}
                    </li> */}
                </ul>

                {/* {Nav middle mobile} */}
                {/* <ul className="nav-main-ul nav-main-mobile">
                    <li className="nav-main-li">
                        <label for="nav-main-search" className="nav-item-search">
                            <input
                                className="nav-item-search-input"
                                type="text"
                                placeholder="Looking for something?"
                                name="nav-search"
                            />
                            <i className="far fa-search nav-main-middle-icn"></i>
                        </label>
                    </li>
                </ul> */}

                {/* Nav right Mobile*/}
                {/* <ul className={`${navHamburger} nav-main-ul`}>
                    <li className="nav-main-li-res">
                        {!auth ? (
                            <Link
                                to="/login"
                                className="nav-main-item nav-btn-login"
                                onClick={toggleHamburger}
                            >
                                Login
                            </Link>
                        ) : (
                            <div
                                className="nav-main-item nav-btn-login"
                                onClick={() => {
                                    toggleHamburger();
                                    signOutHandler();
                                }}
                            >
                                Logout
                            </div>
                        )}
                    </li>
                    <li className="nav-main-li-res">
                        <Link to="/" className="nav-right-btn" onClick={toggleHamburger}>
                            Explore
                        </Link>
                    </li>
                </ul> */}
            </nav>
        </div>
    );
};

export { NavBar };
