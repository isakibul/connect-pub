import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { MdPlayArrow } from "react-icons/md";
import HashLoader from "react-spinners/HashLoader";

const Intro = () => {
    const navigate = useNavigate();
    const [showConfetti, setShowConfetti] = useState(true);
    const { width, height } = useWindowSize();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleEnterCommunity = () => {
        setShowConfetti(false);
        navigate("/vision");
    };

    if (loading) {
        return (
            <div className="app h-screen flex justify-center items-center">
                <HashLoader size={50} color={"#4285F4"} loading={loading} />
            </div>
        );
    }

    return (
        <div className="app h-screen flex flex-col justify-center items-center font-righteous">
            {showConfetti && (
                <Confetti width={width} height={height} numberOfPieces={40} gravity={0.1} />
            )}
            <img className="w-2/3 lg:w-1/3" src="/logo.png" alt="" />
            <p className="text-[#333333] md:text-2xl">Upskill By Harnessing the Power of Community!</p>
            <button
                onClick={handleEnterCommunity}
                className="mt-4 text-[20px] text-[#333333] rounded-md bg-white font-semibold border px-[20px] py-[10px] md:px-[40px] md:py-[15px] lg:px-[60px] lg:py-[20px] hover:bg-[#4285F4] hover:text-white flex items-center transition delay-150 ease-in-out"
            >
                Enter The Community <MdPlayArrow className="text-2xl mt-1" />
            </button>
        </div>
    );
};

export default Intro;
