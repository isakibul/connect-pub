import { motion } from "framer-motion";
import { GrOrganization } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaPersonChalkboard } from "react-icons/fa6";
import connectCover from "/cover/connect-cover.png";
import useFetchSeniors from "../hooks/useFetchSeniors";
import { HashLoader } from 'react-spinners';
import { FaWhatsappSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const Connect = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    const { data, loading, error } = useFetchSeniors();

    if (loading) {
        <HashLoader size={50} color={"#218391"} loading={loading} />
    }

    if (error) {
        return <p className="h-screen font-righteous flex justify-center items-center">Error: {error}</p>;
    }

    if (!data || data.length === 0) {
        return <p className="h-screen font-righteous flex justify-center items-center">No data found</p>;
    }

    return (
        <div>
            <motion.div
                className="relative text-left py-10 bg-cover bg-center flex items-center justify-start"
                style={{
                    backgroundImage: `url(${connectCover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm"></div> {/* Blurred overlay */}
                <motion.p
                    className="relative font-righteous text-xl md:text-3xl text-white font-semibold ml-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Let's Connect Your Expert Senior <br /> You Are Looking For
                </motion.p>
            </motion.div>

            <div className="font-rubik my-20 grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 lg:px-48 gap-10">
                {data.map((senior, index) => (
                    <motion.div
                        key={senior.id}
                        className="font-rubik border-0 outline-none p-[20px] pb-[50px] bg-stone text-cardFont rounded-md flex flex-col justify-between h-full shadow-2xl border-t-4 border-t-amber"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ delay: index * 0.1, duration: 0.7 }}
                    >
                        <div>
                            <img className="" src={senior.avatar} alt={senior.fullName} />

                            <p className="font-righteous mt-10 text-2xl">{senior.fullName}</p>

                            <p className="my-[20px] flex gap-2 items-center text-[16px] font-semibold">
                                <FaLocationDot />{senior.address}
                            </p>

                            <p className="my-[20px] flex gap-2 items-center text-[16px] font-semibold">
                                <FaPersonChalkboard className="text-[20px]" />{senior.position}
                            </p>
                            <p className="my-[20px] flex gap-2 items-center text-[16px] font-semibold">
                                <GrOrganization />{senior.industry}
                            </p>
                        </div>
                        <div className="flex gap-10 justify-center text-4xl mt-5">
                            <div className="flex gap-10 justify-center text-4xl mt-5">
                                <a href={`https://wa.me/${senior.mobileNumber}`} target="_blank" rel="noopener noreferrer">
                                    <FaWhatsappSquare />
                                </a>
                                <a href={`mailto:${senior.email}`} target="_blank" rel="noopener noreferrer">
                                    <BiLogoGmail />
                                </a>
                                <a href={senior.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
};

export default Connect;
