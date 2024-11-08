import FAQ from "../components/FAQ/FAQ";

const Vision = () => {
    return (
        <div className="px-6 md:px-20">
            <p className="font-righteous mt-[80px] mb-[80px] text-center text-white font-semibold text-3xl md:text-5xl">Why ConnectPUB?</p>

            <div className="font-rubik flex flex-col md:flex-row gap-[20px]">
                <div>
                    <p className="text-justify bg-black text-white bg-opacity-70 p-4">At our university, we've noticed a gap between juniors and seniors/alumni in terms of expertise and guidance in different fields. There are many students who want to seek help in various domains, but they often don't know who to reach out to. On the other hand, there are many seniors and alumni who have valuable experience and knowledge in these fields, but they don't always have an easy way to connect with students who need their help. That's why we created ConnectPUB. Our platform serves as an online directory of experts within our university, providing an easy and user-friendly way for juniors to find seniors and alumni with the specific skills and expertise they need.</p>
                    <img src="/community_1.jpg" alt="" />
                </div>
                <div>
                    <img src="/community_2.jpg" alt="" />
                    <p className="text-justify bg-black text-white bg-opacity-70 p-4">By simply searching for a particular domain or skill, students can find a list of experts seniors of their campus and their contact information, making it easy to reach out and get the guidance and support they need. We believe that ConnectPUB has the potential to transform the way that students and alumni connect and collaborate within our university. By bridging the gap between juniors and seniors/alumni, we can create a more cohesive and supportive community that fosters learning and growth for all that will lead the juniors to something great in their career and all over life.</p>
                </div>
            </div>

            <FAQ />
        </div>
    )
}

export default Vision;