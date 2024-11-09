import digital_marketing from "/course-icons/Digital_Marketing.png";
import it_Support from "/course-icons/IT_Support.png";
import data_analytics from "/course-icons/Data_Analytics.png";
import project_management from "/course-icons/Project_Management.png";
import ux_design from "/course-icons/UX_Design.png";
import cybersecurity from "/course-icons/Cybersecurity.png";
import { motion } from "framer-motion";
import exploreCover from "/explore-cover.jpg";

/**
 * resources data
 */
const cardData = [
    {
        id: 1,
        title: "Digital Marketing & E-commerce",
        icon: digital_marketing,
        details: "Digital marketers use online tools to reach customers. E-commerce specialists grow online sales.",
        connection: "connecting with people online, building an online presence",
        certificateType: "FOUNDATIONAL",
        link: "https://www.coursera.org/google-certificates/digital-marketing-certificate?utm_source=google&utm_medium=institutions&utm_campaign=sou--google__med--organicsearch__cam--gwgsite__con--null__ter--null"
    },
    {
        id: 2,
        title: "IT Support",
        icon: it_Support,
        details: "IT Specialists troubleshoot problems so computers and networks run correctly.",
        connection: "solving problems, helping others",
        certificateType: "ADVANCED",
        link: "https://www.coursera.org/google-certificates/it-support-certificate?utm_source=google&utm_medium=institutions&utm_campaign=sou--google__med--organicsearch__cam--gwgsite__con--null__ter--null"
    },
    {
        id: 3,
        title: "Data Analytics",
        icon: data_analytics,
        details: "Data analysts collect, transform, and organize data in order to help make informed business decisions.",
        connection: "uncovering trends and patterns, visualizations",
        certificateType: "INDUSTRY SPECIALIZATIONS",
        link: "https://www.coursera.org/google-certificates/data-analytics-certificate?utm_source=google&utm_medium=institutions&utm_campaign=sou--google__med--organicsearch__cam--gwgsite__con--null__ter--null"
    },
    {
        id: 4,
        title: "Project Management",
        icon: project_management,
        details: "Project managers ensure projects within an organization are managed and completed with maximum value.",
        connection: "solving problems, organization, working with people",
        certificateType: "INDUSTRY SPECIALIZATIONS",
        link: "https://www.coursera.org/google-certificates/project-management-certificate?utm_source=google&utm_medium=institutions&utm_campaign=v2-sou--google__med--organicsearch__cam--gwgsite__con--null__ter--null"
    },
    {
        id: 5,
        title: "UX Design",
        icon: ux_design,
        details: "UX designers make digital and physical products easier and more enjoyable to use.",
        connection: "understanding people, drawing, thinking creatively",
        certificateType: "FOUNDATIONAL",
        link: "https://www.coursera.org/google-certificates/ux-design-certificate?utm_source=google&utm_medium=institutions&utm_campaign=v2-sou--google__med--organicsearch__cam--gwgsite__con--null__ter--null"
    },
    {
        id: 6,
        title: "Cybersecurity",
        icon: cybersecurity,
        details: "Cybersecurity analysts are responsible for monitoring and protecting information and systems.",
        connection: "investigating, solving puzzles",
        certificateType: "FOUNDATIONAL",
        link: "https://www.coursera.org/google-certificates/cybersecurity-certificate?utm_source=google&utm_medium=institutions&utm_campaign=sou--google__med--organicsearch__cam--gwgsite__con--null__ter--null"
    },
];

const Explore = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <motion.div
                className="relative text-right py-10 bg-cover bg-center flex items-center justify-end"
                style={{
                    backgroundImage: `url(${exploreCover})`,
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
                    className="relative font-righteous text-xl md:text-3xl text-white font-semibold mr-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Earn a Credential That Can Lead to <br /> Jobs in High-growth Fields
                </motion.p>
            </motion.div>

            <div className="my-20 grid grid-cols-1 md:grid-cols-2 md:px-20 lg:px-48 gap-10">
                {/* resources card */}
                {cardData.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className="font-rubik border-0 outline-none p-[20px] pb-[50px] bg-stone text-cardFont rounded-md flex flex-col justify-between h-full shadow-2xl border-t-4 border-t-amber"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ delay: index * 0.1, duration: 0.7 }}
                    >
                        <div>
                            <div className="flex justify-between mt-[10px]">
                                <p className="text-[18px] md:text-[26px] font-semibold">{card.title}</p>
                                <img className="w-32 -mt-[20px]" src={card.icon} alt="" />
                            </div>
                            <p className="my-[20px]">{card.details}</p>
                            <p className="mb-[20px]">
                                <span className="font-semibold">If you like:</span>
                                &nbsp;{card.connection}
                            </p>
                            <div className="mb-[20px]">
                                <p>Type:</p>
                                <p className="border inline-block p-1 text-[14px] rounded-sm mt-[5px]">
                                    {card.certificateType}
                                </p>
                            </div>
                        </div>

                        {/* Button to navigate to the details of resource */}
                        <button
                            onClick={() => { window.location.href = card.link; }}
                            style={{ backgroundColor: "#4285F4" }}
                            className="text-white px-5 py-2 mt-5 w-[140px]"
                        >
                            Learn more
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
