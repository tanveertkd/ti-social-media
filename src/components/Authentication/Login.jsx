import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="right login-container border-[1px] border-color-grey rounded w-[500px] h-[600px] p-4 flex flex-col justify-center shadow-xl">
            <div className="login w-full flex flex-col justify-center items-center">
                <p className="login-header text-3xl">Sign In</p>

                <form className="login-input-form w-10/12">
                    <div className="form-input my-4 flex flex-col">
                        <label htmlFor="login-email" className="input-label text-left text-lg">
                            Email:
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            name="login-email"
                            required
                            className="login-email input-form border-[1px] border-color-grey rounded p-1"
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
                            type="submit"
                            className="btn form-btn bg-color-grey text-primary-bg w-full p-1.5 border-[1px] border-color-grey rounded my-4 hover:bg-color-hover-grey"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <Link
                    to="/signup"
                    className="btn signup-cta text-color-grey bg-primary-bg p-1.5 border-[1px] border-color-grey rounded hover:bg-color-grey hover:text-primary-bg"
                >
                    Sign Up &#8594;
                </Link>
            </div>
        </div>
    );
};

export { Login };
