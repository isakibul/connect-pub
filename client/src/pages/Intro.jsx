import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate();
    return (
        <div className="app h-screen flex flex-col md:flex-row justify-center items-center font-righteous">
            <img src="/community-icon.png" alt="" />
            <div className="flex flex-col text-center justify-center items-center md:mt-[70px] md:text-left">
                <div>
                    <p className="text-[45px] text-white font-semibold -mt-[20px] md:text-[60px] lg:text-[80px]">ConnectPUB</p>
                    <p className="text-[14px] md:text-[16px] ml-1 text-white -mt-[10px] lg:text-[22px]">Upskill By Harnessing the Power of Community!</p>
                </div>
                <button onClick={() => navigate("/vision")} className="mt-8 text-[20px] text-black rounded-md bg-white font-semibold border px-[20px] py-[10px] md:px-[50px] md:py-[20px] lg:px-[70px] lg:py-[25px] hover:bg-black hover:text-white">Get Started</button>
            </div>
        </div>
    );
}

export default Intro;