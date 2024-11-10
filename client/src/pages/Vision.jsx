import { motion } from "framer-motion";
import FAQ from "../components/FAQ/FAQ";
import visionCover from "/pub_campus.jpg";
import { useNavigate } from 'react-router-dom';

const Vision = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const navigate = useNavigate();

    return (
        <div className="">
            <motion.div
                className="relative text-right py-10 bg-cover bg-center flex flex-col items-end justify-center"
                style={{
                    backgroundImage: `url(${visionCover})`,
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
                    className="relative font-righteous text-xl md:text-5xl text-white font-semibold mr-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Why CONNECTPUB?
                </motion.p>

                {/* Server community button */}
                <motion.button
                    className="relative font-righteous text-white bg-blue-500 hover:bg-blue-700 rounded-md mt-5 py-2 mr-10 border border-white px-2 md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    onClick={() => { navigate("from-page") }}
                >
                    Join the Community
                </motion.button>
            </motion.div>


            <div className="my-20 font-righteous flex flex-col md:flex-row gap-[14px] px-6 md:px-[15px] lg:px-[200px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="text-justify bg-black text-white bg-opacity-80 p-4">
                        At our <span className="text-[#ff1c36]">Pundra University</span>, we've noticed a gap between juniors and seniors or alumni in terms of expertise and guidance in different fields. There are many students who want to seek help in various domains, but they often don't know who to reach out to. On the other hand, there are many seniors and alumni who have valuable experience and knowledge in these fields, but they don't always have an easy way to connect with students who need their help. That's why we created ConnectPUB. Our platform serves as an online directory of experts within our university, providing an easy and user-friendly way for juniors to find seniors and alumni with the specific skills and expertise they need.
                    </p>
                    <motion.img
                        src="/community_1.png"
                        alt=""
                        className="mt-4"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.img
                        src="/community_2.png"
                        alt=""
                        className="mb-4"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-justify bg-black text-white bg-opacity-80 p-4">
                        By simply searching for a particular domain or skill, students can find a list of experts seniors of their campus and their contact information, making it easy to reach out and get the guidance and support they need. We believe that <span className="text-[#ff1c36]">ConnectPUB</span> has the potential to transform the way that students and alumni connect and collaborate within our university. By bridging the gap between juniors and seniors/alumni, we can create a more cohesive and supportive community that fosters learning and growth for all that will lead the juniors to something great in their career and all over life.
                    </p>
                </motion.div>
            </div>

            <FAQ />
        </div>
    )
}

export default Vision;
