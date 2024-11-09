import { motion } from "framer-motion";
import { GrOrganization } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import jobsCover from "/cover/jobs-cover.png";

// Jobs data
const jobData = [
    {
        "id": "1",
        "title": "Junior Software Engineer",
        "companyName": "Jence",
        "location": "Dhaka",
        "experience": "At least 1 year",
        "deadline": "30 November",
        "link": "https://jobs.bdjobs.com/jobdetails.asp?id=1304999&fcatId=8&ln=1"
    },
    {
        "id": "2",
        "title": "Full Stack Developer",
        "companyName": "Lancepilot Ltd",
        "location": "Dhaka (Niketan)",
        "experience": "Not required",
        "deadline": "6 December",
        "link": "https://jobs.bdjobs.com/jobdetails.asp?id=1305040&fcatId=8&ln=1"
    }
]

const Opportunities = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <div>
            <motion.div
                className="relative text-left py-10 bg-cover bg-center flex items-center justify-start"
                style={{
                    backgroundImage: `url(${jobsCover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-sm"></div> {/* Blurred overlay */}
                <motion.p
                    className="relative font-righteous text-xl md:text-3xl text-white font-semibold ml-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Opportunities You Don't <br /> Want to Miss
                </motion.p>
            </motion.div>

            <div className="font-rubik my-20 grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 lg:px-48 gap-10">
                {/* resources card */}
                {jobData.map((job, index) => (
                    <motion.div
                        key={job.id}
                        className="font-rubik border-0 outline-none p-[20px] pb-[50px] bg-stone text-cardFont rounded-md flex flex-col justify-between h-full shadow-2xl border-t-4 border-t-amber"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ delay: index * 0.1, duration: 0.7 }}
                    >
                        <div>
                            <div className="flex justify-between mt-[10px]">
                                <p className="font-righteous text-[20px] md:text-[18px] lg:text-[20px] font-semibold">{job.title}</p>
                            </div>
                            <p className="my-[20px] flex gap-2 items-center text-[16px] font-semibold"><GrOrganization />{job.companyName}</p>
                            <p className="my-[20px] flex gap-2 items-center text-[16px] font-semibold"><FaLocationDot />{job.location}</p>

                            <div className="flex flex-col justify-between xl:flex-row">
                                <p className="my-[20px]">
                                    <strong>Experience:</strong>
                                    &nbsp;
                                    {job.experience}
                                </p>
                                <p className="my-[20px] flex items-center gap-2 text-[16px] font-semibold"><MdDateRange className="text-[20px] mb-1" />{job.deadline}</p>
                            </div>
                        </div>

                        {/* Button to navigate to the details of resource */}
                        <button
                            onClick={() => { window.location.href = job.link; }}
                            style={{ backgroundColor: "#4285F4" }}
                            className="text-white px-5 py-2 mt-5 w-[140px]"
                        >
                            View Job
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>

    )
};

export default Opportunities;