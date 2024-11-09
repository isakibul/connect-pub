import React, { useState } from "react";
import "./FAQstyle.css";
import FAQassist from "./FAQassist";

export default function FAQ() {
    const [faqs, setFaqs] = useState([
        {
            question: "What is ConnectPUB?",
            answer:
                "ConnectPUB is a platform designed to bridge the gap between current students and alumni of our university. It allows students to seek guidance and support from alumni who have expertise in various domains, helping them connect and learn from experienced professionals.",
            open: true
        },
        {
            question: "How can ConnectLNM benefit me?",
            answer: "ConnectPUB provides you with a directory of alumni and seniors who have expertise in different domains such as technology, marketing, design, and more. You can reach out to them for guidance, mentorship, and assistance in your academic and professional journey.",
            open: false
        },
        {
            question:
                "How do I contact a seniors on ConnectPUB?",
            answer: "ConnectLNM provides you with the contact information, such as Email Addresses and LinkedIn handles, of the mentors listed on the platform. You can use this information to reach out to them directly and initiate a conversation regarding your specific query or request for guidance.",
            open: false
        },
        {
            question:
                "Why are some skills listed but do not have much data?",
            answer: "We are working on expanding and scaling our database which is currently facing some non-technical issues. Hopefully we'll get it resolved ASAP. Meanwhile you can check all of other domains that we have to offer!",
            open: false
        },
        {
            question:
                "How can I contribute to ConnectPUB?",
            answer: "Absolutely! If you are an alumni or senior or anyone from the fraternity with expertise in a particular field, we encourage you to contribute to ConnectLNM. All you have to do is head to the Get Listed! section and fill out a small form specifying to us your skills and relevant experience. You can give back to the community by sharing your knowledge, providing guidance, and supporting the current students in their academic and professional endeavors.",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <div className="font-rubik px-4 md:px-[15px] lg:px-[200px]">
            <p className="text-center mt-[100px] mb-[40px] text-[20px] md:text-[40px] font-righteous font-semibold text-[#333333]" >Frequently Asked Questions [FAQs]</p>
            <div className="faqs mb-[100px]">
                {faqs.map((faq, index) => (
                    <FAQassist faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    );
}