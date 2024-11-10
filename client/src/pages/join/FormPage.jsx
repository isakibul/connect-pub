import React, { useState, useEffect, useRef, useContext } from 'react';
import "./join.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { HashLoader } from 'react-spinners';
import { MyContext } from "../../Context";

/**
 * components
 */
import OtherCountryModal from '../../pages/join/components/OtherCountryModal';
import InvolvementField from '../../pages/join/components/InvolvementField';
import SpecialtyField from '../../pages/join/components/SpecialtyField';

const FormPage = () => {
    /**
     * necessary states
     */
    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        mobileNumber: '',
        city: '',
        involvement: '',
        otherOptionInvolvement: '',
        specialties: [],
        otherOptionSpecialty: "",
        referral: '',
    });

    /**
     * getting the necessary data from context
     */
    const { involvement, otherSpecialty, otherSpecialtyIncluded } = useContext(MyContext);

    const navigate = useNavigate();

    /**
     * refs for input fields
     */
    const refs = {
        email: useRef(null),
        firstName: useRef(null),
        lastName: useRef(null),
        mobileNumber: useRef(null),
        city: useRef(null),
        involvement: useRef(null),
        otherOptionInvolvement: useRef(null),
        specialties: useRef(null),
        otherOptionSpecialty: useRef(null),
        referral: useRef(null)
    };

    /**
     * involvement validation if it's not other
     * @param {String} involvement 
     */
    const involvementValidation = (involvement) => {
        if (involvement !== "Other") {
            return Yup.string().required("This field is required");
        }
    }

    /**
     * involvement validation if it's other
     * @param {String} involvement 
     */
    const otherInvolvementValidation = (involvement) => {
        if (involvement === "Other") {
            return Yup.string().max(255, "Description of 'Other' cannot exceed 255 characters").required("");
        }
    }

    /**
     * specialty validation if it's other
     * @param {Boolean} otherSpecialtyIncluded 
     */
    const otherSpecialtyValidation = (otherSpecialtyIncluded) => {
        if (otherSpecialtyIncluded) {
            return Yup.string()
                .max(255, "Description of 'Other' cannot exceed 255 characters")
                .required("")
        }
    }

    /**
     * input validation schema
     */
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").max(254, "Referral cannot exceed 254 characters").required("This field is required"),
        firstName: Yup.string().min(2, "First name must be at least 2 characters").max(50, "First name cannot exceed 50 characters").required("This field is required"),
        lastName: Yup.string().min(2, "Last name must be at least 2 characters").max(50, "Last name cannot exceed 50 characters").required("This field is required"),
        mobileNumber: Yup.string()
            .matches(/^(?:\01|01)[3-9]\d{8}$/, "Invalid mobile number")
            .required("Mobile number is required"),
        city: Yup.string()
            .min(2, "City name must be at least 2 characters")
            .max(20, "City name cannot exceed 20 characters")
            .required("This field is required"),
        involvement: involvementValidation(involvement),
        otherOptionInvolvement: otherInvolvementValidation(involvement),
        specialties: Yup.array().of(Yup.string()).min(1, "This field is required").required("This field is required"),
        otherOptionSpecialty: otherSpecialtyValidation(otherSpecialtyIncluded),
        referral: Yup.string()
            .min(2, "Referral must be at least 2 characters")
            .max(25, "Referral cannot exceed 25 characters")
            .required("This field is required"),
    });

    /**
     * prevent scrolling when modal is open
     */
    useEffect(() => {
        if (modalIsOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [modalIsOpen]);

    /**
     * scroll to error fields
     * 
     * @param {Object} errors
     */
    const scrollHandler = (errors) => {
        for (const key in errors) {
            if (refs[key]?.current) {
                refs[key].current.scrollIntoView({
                    block: 'center',
                    inline: 'center'
                });
                break;
            }
        }
    };

    /**
 /**
 * handles mobile number change and restricts input to digits
 * @param {Object} event
 * @param {Function} setFieldValue
 */
    const handleMobileNumberChange = (event, setFieldValue) => {
        const { value } = event.target;

        // Restrict input to digits only (remove non-digit characters)
        const formattedValue = value.replace(/\D/g, '');

        setFieldValue("mobileNumber", formattedValue);
    };

    /**
  * handles the form submission.
  * 
  * @param {Object} values
  * @param {string} values.involvement
  * @param {Array<string>} values.specialties
  * @param {String} values.country
  * @param {String} values.mobileNumber
  * @param {Object} values.rest
  */
    const handleSubmit = async (values) => {
        let { involvement, specialties, country, mobileNumber, otherOptionInvolvement, ...rest } = values;

        /**
         * involvement deciding
         */
        if (involvement === "Other") {
            involvement = otherOptionInvolvement;
        } else {
            delete rest.otherOptionInvolvement;
        }

        /**
         * adding other specialty to specialties array
         */
        specialties = specialties.filter(specialty => specialty !== "Other");
        if (otherSpecialty) {
            specialties.push(otherSpecialty);
        }

        const formData = {
            ...rest,
            involvement,
            specialties
        };

        setFormData(formData);
        setIsLoading(true);

        /**
         * sanitize form data before sending it to the server
         */
        const sanitizedFormData = {
            ...formData,
            email: DOMPurify.sanitize(formData.email),
            firstName: DOMPurify.sanitize(formData.firstName),
            lastName: DOMPurify.sanitize(formData.lastName),
            city: DOMPurify.sanitize(formData.city),
            postcode: DOMPurify.sanitize(formData.postcode),
            involvement: DOMPurify.sanitize(formData.involvement),
            specialties: formData.specialties.map(specialty => DOMPurify.sanitize(specialty)),
            referral: DOMPurify.sanitize(formData.referral)
        };

        // Log sanitized data to the console
        console.log("Sanitized Form Data:", sanitizedFormData);

        setIsLoading(false); // Stop loading spinner after logging to console

        // You can remove or comment out the following section if you only want to log data to the console
        // /**
        //  * api call to post data
        //  */
        // try {
        //     await axios.post('http://localhost:8000/api/register', sanitizedFormData);
        //     navigate('/thank-you');
        // } catch (error) {
        //     console.error('There was an error!', error);
        //     setIsLoading(false);
        //     navigate('/error');
        // }
    };

    return (
        <div className='flex justify-center font-rubik'>
            {isLoading ? (
                <div className="spinner-container">
                    <HashLoader size={50} color={"#218391"} loading={isLoading} />
                </div>
            ) : (
                <Formik
                    initialValues={formData}
                    validationSchema={validationSchema}
                    validateOnChange={true}
                    validateOnBlur={true}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, values, setFieldValue }) => (
                        <Form>
                            {/* <img src="/banner.png" alt="banner" /> */}

                            <div className="formContainer">
                                <div className='nameField'>
                                    {/* -----firstname field----- */}
                                    <div ref={refs.firstName}>
                                        <label>First Name<span className='star'>*</span></label>
                                        <Field type="text" name="firstName" placeholder="Your first name" />
                                        <div className={`errorMsg ${errors.firstName && touched.firstName ? 'visible' : ''} `}>
                                            <ErrorMessage name="firstName" component="div" />
                                        </div>
                                    </div>

                                    {/* -----lastname field----- */}
                                    <div ref={refs.lastName}>
                                        <label>Last Name<span className='star'>*</span></label>
                                        <Field type="text" name="lastName" placeholder="Your last name" />
                                        <div className={`errorMsg ${errors.lastName && touched.lastName ? 'visible' : ''} `}>
                                            <ErrorMessage name="lastName" component="div" />
                                        </div>
                                    </div>
                                </div>

                                {/* -----email field----- */}
                                <div ref={refs.email}>
                                    <label>Email<span className='star'>*</span></label>
                                    <br />
                                    <Field type="email" name="email" placeholder="Your email address" />
                                    <div className={`errorMsg ${errors.email && touched.email ? 'visible' : ''} `}>
                                        <ErrorMessage name="email" component="div" />
                                    </div>
                                </div>

                                {/* -----mobile number field----- */}
                                <div className='formComponent' ref={refs.mobileNumber}>
                                    <label>Mobile Number<span className='star'>*</span></label>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Field
                                            type="text"
                                            name="mobileNumber"
                                            placeholder="Your number"
                                            onChange={(event) => handleMobileNumberChange(event, setFieldValue)}
                                        />
                                    </div>
                                    <div style={{ marginTop: '-15px' }} className={`errorMsg ${errors.mobileNumber && touched.mobileNumber ? 'visible' : ''} `}>
                                        <ErrorMessage className='error' name="mobileNumber" component="div" />
                                    </div>
                                </div>

                                {/* -----city/town field----- */}
                                <div className='formComponent' ref={refs.city}>
                                    <label>City/Town<span className='star'>*</span></label>
                                    <br />
                                    <Field type="text" name="city" placeholder="Your city" />
                                    <div className={`errorMsg ${errors.city && touched.city ? 'visible' : ''} `}>
                                        <ErrorMessage name="city" component="div" />
                                    </div>
                                </div>

                                {/* -----involvement field----- */}
                                <InvolvementField
                                    refs={refs}
                                    errors={errors}
                                    touched={touched}
                                />

                                {/* -----specialty/interest field----- */}
                                <SpecialtyField
                                    otherSpecialty={otherSpecialty}
                                    errors={errors}
                                    touched={touched}
                                    refs={refs}
                                />

                                {/* -----reference field----- */}
                                <div className='formComponent' ref={refs.referral}>
                                    <label>Why you are interested to join CONNECTPUB?<span className='star'>*</span></label>
                                    <br />
                                    <Field type="text" placeholder="Your answer" name="referral" />
                                    <div className={`errorMsg ${errors.referral && touched.referral ? 'visible' : ''} `}>
                                        <ErrorMessage name="referral" component="div" />
                                    </div>
                                </div>

                                {/* -----buttons----- */}
                                <div className='button-div formComponent'>
                                    <button type="submit" onClick={() => scrollHandler(errors)}>
                                        Submit
                                    </button>
                                    <button
                                        className='formClearButton'
                                        type='reset'
                                        onClick={() => {
                                            window.location.reload();
                                            window.scrollTo(0, 0);
                                        }}
                                    > Clear Form
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik >
            )
            }
            <div>
                <OtherCountryModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
            </div>
        </div >
    );
};

export default FormPage;