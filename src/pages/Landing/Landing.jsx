import { Login } from '../../components/Authentication/Login';
import landing from '../../assets/landing.svg';
const Landing = () => {
    return (
        <div className="w-screen">
            <h1 className="text-3xl m-8">Welcome To TI Social!</h1>
            <div className="justify-center items-center grid grid-cols-2">
                <div className="section-left flex justify-end align-middle">
                    <img src={landing} alt="landing asset" className="w-[750px] h-[750px]"/>
                </div>
                <div className="flex section-right justify-start align-middle">
                    <Login />
                </div>
            </div>
        </div>
    );
};

export { Landing };
