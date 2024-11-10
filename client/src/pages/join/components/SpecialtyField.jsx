import React, { useEffect, useRef } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { useContext } from 'react';
import { MyContext } from '../../../Context';

const SpecialtyField = ({ errors, touched, ref }) => {
    const { values, setFieldValue, setFieldTouched, } = useFormikContext();
    const { specialties, otherOptionSpecialty } = values;
    const { setOtherSpecialty, setOtherSpecialtyIncluded } = useContext(MyContext);

    const otherSpecialtyRef = useRef(null);
    const includesOtherSpecialty = specialties.includes("Other");

    useEffect(() => {
        setOtherSpecialtyIncluded(includesOtherSpecialty);
        if (includesOtherSpecialty && otherSpecialtyRef.current) {
            otherSpecialtyRef.current.focus();
            setOtherSpecialty(otherOptionSpecialty);
        } else {
            setFieldTouched("otherOptionSpecialty", "");
        }
    }, [includesOtherSpecialty, otherOptionSpecialty, setOtherSpecialty, setOtherSpecialtyIncluded, setFieldValue, setFieldTouched]);

    return (
        <div className="formComponent" ref={ref}>
            <label>
                What's your tech specialty/interest?<span className='star'>*</span>
                <br />
                <span style={{ fontSize: '14px', color: '#1c1c1c' }}>You can choose more than one</span>
            </label>
            <div className="interest-div">
                <div>
                    <Field type="checkbox" name="specialties" value="Software Engineering" />
                    Software Engineering
                </div>
                <div>
                    <Field type="checkbox" name="specialties" value="Data Science" />
                    Data Science
                </div>
                <div>
                    <Field type="checkbox" name="specialties" value="Data Engineering" />
                    Data Engineering
                </div>
                <div>
                    <Field type="checkbox" name="specialties" value="Artificial Intelligence" />
                    Artificial Intelligence
                </div>
                <div>
                    <Field type="checkbox" name="specialties" value="Machine Learning (Deep Learning, NLP, Neural Networks...)" />
                    Machine Learning (Deep Learning, NLP, Neural Networks...)
                </div>
                <div>
                    <Field type="checkbox" name="specialties" value="Technical Art (Animation, Design, 3D, VFX...)" />
                    Technical Art (Animation, Design, 3D, VFX...)
                </div>
                <div>
                    <Field type="checkbox" name="specialties" value="Hardware Engineering" />
                    Hardware Engineering
                </div>
                <div>
                    <Field type="checkbox" name="specialties" value="Data Analytics" />
                    Data Analytics
                </div>
                <div>
                    <Field type="checkbox" name="specialties" value="UI/UX" />
                    UI/UX
                </div>
                <div>
                    <Field type="checkbox" name="specialties" value="Product Management" />
                    Product Management
                </div>
                <div className='otherField'>
                    <div>
                        <Field type="checkbox" name="specialties" value="Other" />
                    </div>
                    <span>Other:</span>
                    <Field
                        className='otherTextInput'
                        type="text"
                        placeholder="Your specialty"
                        name="otherOptionSpecialty"
                        innerRef={otherSpecialtyRef}
                    />
                </div>

                {/* -----error messages----- */}
                <div className={`errorMsg ${errors.specialties && touched.specialties ? 'visible' : ''} otherInputErrorField`}>
                    <ErrorMessage name="specialties" component="div" />
                </div>
                <div className={`errorMsg ${!errors.specialties && errors.otherOptionSpecialty && touched.otherOptionSpecialty ? 'visible' : ''} otherInputErrorField`}>
                    <ErrorMessage name="otherOptionSpecialty" component="div" />
                </div>
                <div className="otherInputErrorField" style={{ marginTop: '-12px', marginLeft: '-3px', fontSize: '14px' }}>
                    {includesOtherSpecialty && otherOptionSpecialty === "" ? <span>Please provide a description for 'Other'</span> : ""}
                </div>
            </div>
        </div>
    );
};

export default SpecialtyField;