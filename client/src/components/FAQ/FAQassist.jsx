import React from "react";
import "./FAQstyle.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
    return (
        <div
            className={"faq " + (faq.open ? "open" : "")}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question text-[14px] md:text-[20px]">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
        </div>
    );
};

export default FAQ;