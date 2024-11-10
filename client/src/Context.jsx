import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [involvement, setInvolvement] = useState("");
    const [otherInvolvementText, setOtherInvolvementText] = useState("");
    const [otherSpecialty, setOtherSpecialty] = useState("");
    const [otherSpecialtyIncluded, setOtherSpecialtyIncluded] = useState(false);

    return (
        <MyContext.Provider
            value={{
                involvement,
                setInvolvement,
                otherInvolvementText,
                setOtherInvolvementText,
                otherSpecialty,
                setOtherSpecialty,
                otherSpecialtyIncluded,
                setOtherSpecialtyIncluded
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export { MyProvider, MyContext };