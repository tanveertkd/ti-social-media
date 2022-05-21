import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import { setSearchedUser } from '../../features/user/userSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState({
        searchedUser: '',
    });

    const navigate = useNavigate();

    const handleSearch = (e) => {
        console.log(setSearchedUser(searchInput.searchedUser));
        dispatch(setSearchedUser(searchInput.searchedUser));
        navigate('/people');
    };

    const { searchUserResult } = useSelector((state) => state.users);
    console.log('searchedusers', searchUserResult);

    return (
        <div>
            <nav className="nav-main flex flex-wrap justify-between items-center xs:p-1 md:px-4 border-b-2 text-lg xs:h-20 md:h-16">
                {/*  Nav left */}
                <ul className="nav-main-left nav-main-ul hover:cursor-pointer xs:flex xs:justify-between xs:w-full md:w-fit">
                    <li className="nav-main-li nav-section-one">
                        <Link to="/" className="nav-main-item nav-item-home">
                            TI <span className="text-color-highlight-orange">Social</span>
                        </Link>
                    </li>
                    <li className="nav-main-li xs:flex md:hidden border-[1px] rounded border-color-grey px-2 hover:bg-color-highlight-orange hover:text-primary-bg hover:border-color-highlight-orange hover:shadow hover:shadow-orange-600">
                        <button
                            onClick={() => dispatch(logout())}
                            className="nav-main-item nav-btn-login"
                        >
                            <i className="fal fa-sign-out"></i>
                        </button>
                    </li>
                </ul>

                {/* {Nav middle} */}
                <ul className="nav-main-middle nav-main-ul xs:w-full md:w-fit">
                    <li className="nav-main-li">
                        <label htmlFor="nav-main-search" className="nav-item-search">
                            <input
                                className="nav-item-search-input border-[1px] border-color-grey rounded xs:w-full xs:my-2 md:my-0 md:w-96 p-1 text-sm relative"
                                type="text"
                                placeholder="Looking for someone?"
                                name="nav-search"
                                onChange={(e) => {
                                    setSearchInput({ searchedUser: e.target.value });
                                }}
                            />
                            <i
                                className="far fa-search nav-main-middle-icn hover:cursor-pointer absolute ml-[-20px] xs:mt-3 md:mt-1.5"
                                onClick={(e) => handleSearch(e, searchInput)}
                            ></i>
                        </label>
                    </li>
                </ul>

                {/* Nav right */}
                <ul className="hidden nav-main-right nav-main-ul md:flex hover:cursor-pointer">
                    <li className="nav-main-li border-[1px] rounded border-color-grey px-2 hover:bg-color-highlight-orange hover:text-primary-bg hover:border-color-highlight-orange hover:shadow hover:shadow-orange-600">
                        <button
                            onClick={() => dispatch(logout())}
                            className="nav-main-item nav-btn-login"
                        >
                            <i className="fal fa-sign-out"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export { NavBar };
