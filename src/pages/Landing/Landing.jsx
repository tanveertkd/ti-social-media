import { Login } from '../../components/Authentication/Login';
import landing from '../../assets/landing.svg';
import { useAuth } from '../../hooks/useAuth';
import { Signup } from '../../components';

const Landing = () => {
    const { newUser } = useAuth();
    return (
        <div className="w-screen h-full">
            <div className="relative h-full xs:flex justify-center items-center md:grid md:grid-cols-2">
                <div className="h-full section-left flex justify-center items-center bg-color-alert-warning">
                    <img src={landing} alt="landing asset" className="w-[750px] h-[750px]" />
                </div>
                <div className="xs:absolute md:relative flex flex-col section-right items-center w-full">
                    <h1 className="text-3xl m-8">
                        Welcome To TI <span className="text-color-alert-error">Social!</span>
                    </h1>
                    <div className="w-full flex justify-center">
                        {!newUser ? <Login /> : <Signup />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Landing };
