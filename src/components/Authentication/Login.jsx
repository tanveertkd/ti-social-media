import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginHelper } from '../../features/auth/authSlice';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
    const { toggleUser } = useAuth();

    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
    });

    const guestInput = {
        username: 'tanveerhazarika',
        password: 'test123',
    };

    const dispatch = useDispatch();

    const handlelogin = (e) => {
        e.preventDefault();
        dispatch(loginHelper(userInput));
    };

    const handleGuest = (e) => {
        e.preventDefault();
        dispatch(loginHelper(guestInput));
    };

    return (
        <div className="right login-container bg-primary-bg border-[1px] border-color-grey rounded xs:w-max md:w-[500px] md:h-[600px] p-4 flex flex-col justify-center shadow-xl">
            <div className="login w-full flex flex-col justify-center items-center">
                <p className="login-header text-3xl">Sign In</p>

                <form className="login-input-form w-10/12">
                    <div className="form-input my-4 flex flex-col">
                        <label htmlFor="login-username" className="input-label text-left text-lg">
                            Username:
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            name="login-username"
                            required
                            className="login-username input-form border-[1px] border-color-grey rounded p-1"
                            onChange={(e) =>
                                setUserInput({ ...userInput, username: e.target.value })
                            }
                        />
                    </div>

                    <div className="form-input my-4 flex flex-col">
                        <label htmlFor="login-password" className="input-label text-left text-lg">
                            Passsword:
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="login-password"
                            required
                            className="login-password input-form border-[1px] border-color-grey rounded p-1"
                            onChange={(e) => {
                                setUserInput({ ...userInput, password: e.target.value });
                            }}
                        />
                    </div>

                    <div className="form-input checkbox-reset flex justify-between">
                        <div>
                            <input type="checkbox" name="form-checkbox" className="form-checkbox" />
                            <label htmlFor="form-checkbox" className="checkbox-label">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <Link to="reset-credentials" className="password-reset hover:underline">
                                Forgot Passsword?
                            </Link>
                        </div>
                    </div>
                    <div className="form-submit-btn">
                        <button
                            className="btn form-btn bg-color-grey text-primary-bg w-full p-1.5 border-[1px] border-color-grey rounded my-4 hover:bg-color-hover-grey"
                            onClick={(e) => handlelogin(e, userInput)}
                        >
                            Sign In
                        </button>
                        <button
                            className="btn form-btn bg-color-grey text-primary-bg w-full p-1.5 border-[1px] border-color-grey rounded mb-4 hover:bg-color-hover-grey"
                            onClick={(e) => handleGuest(e, userInput)}
                        >
                            Sign In as Guest
                        </button>
                    </div>
                </form>

                <button
                    onClick={() => toggleUser()}
                    className="btn signup-cta text-color-grey bg-primary-bg p-1.5 border-[1px] border-color-grey rounded hover:bg-color-grey hover:text-primary-bg"
                >
                    Sign Up &#8594;
                </button>
            </div>
        </div>
    );
};

export { Login };
