import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupHelper } from '../../features/auth/authSlice';
import { useAuth } from '../../hooks/useAuth';

const Signup = () => {
    const { toggleUser } = useAuth();
    const dispatch = useDispatch();

    const [userInput, setUserInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
    });

    const signUpHandler = (e, userInput) => {
        e.preventDefault();
        dispatch(signupHelper(userInput));
    }

    return (
        <div className="login-container border-[1px] border-color-grey rounded w-[500px] h-[700px] p-4, flex flex-col, justify-center, shadow-xl">
            <div className="login w-full flex flex-col justify-center items-center">
                <p className="login-header text-3xl">Sign Up</p>

                <form
                    className="login-input-form w-10/12"
                    onSubmit={(event) => signUpHandler(event, userInput)}
                >
                    <div className="form-input my-4 flex flex-col">
                        <label for="login-firstName" className="input-label text-left text-lg">
                            {' '}
                            First Name:{' '}
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your first name"
                            name="login-firstName"
                            className="login-firstName input-form border-[1px] border-color-grey rounded p-1"
                            onChange={(event) =>
                                setUserInput({ ...userInput, firstName: event.target.value })
                            }
                        />
                    </div>

                    <div className="form-input my-4 flex flex-col">
                        <label for="login-lastName" className="input-label text-left text-lg">
                            {' '}
                            Last Name:{' '}
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your last name"
                            name="login-lastName"
                            className="login-lastName input-form border-[1px] border-color-grey rounded p-1"
                            onChange={(event) =>
                                setUserInput({ ...userInput, lastName: event.target.value })
                            }
                        />
                    </div>

                    <div className="form-input my-4 flex flex-col">
                        <label for="login-email" className="input-label text-left text-lg">
                            {' '}
                            Email:{' '}
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your email address"
                            name="login-email"
                            className="login-email input-form border-[1px] border-color-grey rounded p-1"
                            onChange={(event) =>
                                setUserInput({ ...userInput, email: event.target.value })
                            }
                        />
                    </div>
                    
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
                        <label for="login-password" className="input-label text-left text-lg">
                            {' '}
                            Passsword:{' '}
                        </label>
                        <input
                            type="password"
                            required
                            placeholder="Enter your password"
                            name="login-password"
                            className="login-password input-form border-[1px] border-color-grey rounded p-1"
                            onChange={(event) =>
                                setUserInput({ ...userInput, password: event.target.value })
                            }
                        />
                    </div>

                    <div className="form-input checkbox-reset">
                        <div>
                            <input type="checkbox" name="form-checkbox" className="form-checkbox" />
                            <label for="form-checkbox" className="checkbox-label">
                                {' '}
                                I accept all Terms & Conditions{' '}
                            </label>
                        </div>
                    </div>
                    <div className="form-submit-btn">
                        <button
                            type="submit"
                            className="btn form-btn bg-color-grey text-primary-bg w-full p-1.5 border-[1px] border-color-grey rounded my-4 hover:bg-color-hover-grey"
                        >
                            Create New Account
                        </button>
                    </div>
                </form>

                <div className="sign-up text-color-grey bg-primary-bg p-1.5 border-[1px] border-color-grey rounded hover:bg-color-grey hover:text-primary-bg">
                    <button onClick={() => toggleUser()} className="btn signup-cta">
                        I already have an account &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

export { Signup };
