import { Login } from '../../components/Authentication/Login';
import landing from '../../assets/landing.svg';
import { useAuth } from '../../hooks/useAuth';
import { Signup } from '../../components';

const Landing = () => {
    const { newUser } = useAuth();
    console.log(newUser);
    return (
        <div className="w-screen h-full">
            <div className="h-full justify-center items-center grid grid-cols-2">
                <div className="h-full section-left flex justify-center items-center bg-color-alert-warning">
                    <img src={landing} alt="landing asset" className="w-[750px] h-[750px]" />
                </div>
                <div className="flex flex-col section-right items-center">
                    <h1 className="text-3xl m-8">
                        Welcome To TI <span className="text-color-alert-warning">Social!</span>
                    </h1>
                    {!newUser ? <Login /> : <Signup />}
                </div>
            </div>
        </div>
    );
};

export { Landing };
