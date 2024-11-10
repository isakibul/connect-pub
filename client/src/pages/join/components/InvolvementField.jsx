import { ErrorMessage, Field, useFormikContext } from "formik";
import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../../Context";

const InvolvementField = ({ refs, errors, touched }) => {
    const { values, setFieldValue, setFieldTouched } = useFormikContext();
    const { setInvolvement, setOtherInvolvementText } = useContext(MyContext);
    const otherInputRef = useRef(null);

    const { involvement, otherOptionInvolvement } = values;

    useEffect(() => {
        setInvolvement(involvement);
        setOtherInvolvementText(involvement === "Other" ? otherOptionInvolvement : "");

        if (!involvement === "Other") {
            setFieldTouched('otherOptionInvolvement', false);
        }

        if (involvement === "Other" && otherInputRef.current) {
            otherInputRef.current.focus();
        } else {
            setFieldTouched('otherOptionInvolvement', "");
        }
    }, [involvement, otherOptionInvolvement, setInvolvement, setOtherInvolvementText, setFieldValue, setFieldTouched]);

    return (
        <div className="involvement formComponent" ref={refs.involvement}>
            <label>
                What is your involvement in tech?
                <span className='star'>*</span>
            </label>
            <div className="involvement-div">
                <div>
                    <Field type="radio" name="involvement" value="Student" />
                    Student
                </div>
                <div>
                    <Field type="radio" name="involvement" value="Seeking employment" />
                    Seeking employment
                </div>
                <div>
                    <Field type="radio" name="involvement" value="Employed" />
                    Employed
                </div>
                <div>
                    <Field type="radio" name="involvement" value="Own a tech-based business" />
                    Own a tech-based business
                </div>
                <div>
                    <Field type="radio" name="involvement" value="Simply interested" />
                    Simply interested
                </div>
                <div className='otherField' ref={refs.otherOptionInvolvement}>
                    <div>
                        <Field type="radio" name="involvement" value="Other" />
                    </div>
                    <span>Other:</span>
                    <Field
                        className='otherTextInput'
                        type="text"
                        placeholder="Your involvement"
                        name="otherOptionInvolvement"
                        innerRef={otherInputRef}
                    />
                </div>

                {/* -----error messages----- */}
                <div className={`errorMsg ${errors.involvement && touched.involvement ? 'visible' : ''} otherInputErrorField`}>
                    <ErrorMessage name="involvement" component="div" />
                </div>
                <div
                    className={`errorMsg ${errors.otherOptionInvolvement && touched.otherOptionInvolvement ? 'visible' : ''} otherInputErrorField`}
                >
                    <ErrorMessage name="otherOptionInvolvement" component="div" />
                </div>
                <div className="otherInputErrorField">
                    {involvement === "Other" && otherOptionInvolvement === "" ? <span>Please provide a description for 'Other'</span> : ""}
                </div>
            </div>
        </div>
    );
};

export default InvolvementField;