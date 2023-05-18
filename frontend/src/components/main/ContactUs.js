import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import Swal from "sweetalert2";

const ContactUs = () => {
    const ContactUsForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: async (values, { setSubmitting,resetForm }) => {
            //setSubmitting(true);
            console.log(values);
            const res = await fetch('http://localhost:5000/contact/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Nice',
                    text: 'Message Sent'

                })
                resetForm()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops',
                    text: 'Something went wrong'
                })
            }
        },
    });
    return (
        <div className='container py-5 h-100 '>
            <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className='card text-light'
                        style={{ backgroundImage:'url("https://img.freepik.com/free-photo/3d-render-concept-phone-receiver-3d-art-design-illustration_460848-9667.jpg?w=740&t=st=1684430612~exp=1684431212~hmac=092c7302635f346e527eee5aad7122bf0bbb80393479d46faceb535989cc164e")',backgroundColor: "olive" }}>
                        <>
                            {/* Contact Section */}
                            <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
                                <div className="card-body p-5 text-white,login" style={{ border: "2px solid black" }}>

                                    <form onSubmit={ContactUsForm.handleSubmit}>
                                        <h2 className="w3-text-light-grey text-center">ContactUs</h2>
                                        <hr></hr>
                                        <p>Let's get in touch. Send me a message:</p>
                                        {/* <form> */}
                                        <div className="form-dark mb-4">
                                            <label className="form-label text-white" htmlFor="typeNameX">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={ContactUsForm.values.name}
                                                onChange={ContactUsForm.handleChange}
                                                className="form-control form-control-lg"
                                            />
                                        </div>
                                        <div className="form-label mb-4">
                                            <label className="form-label text-white" htmlFor="typeEmailX">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={ContactUsForm.values.email}
                                                onChange={ContactUsForm.handleChange}
                                                className="form-control form-control-lg"
                                            />
                                        </div>
                                        <div className="form-dark mb-4">
                                            <label className="form-label text-white" htmlFor="typeMessageX">
                                                Message
                                            </label>
                                            <input
                                                type="text"
                                                id="message"
                                                value={ContactUsForm.values.message}
                                                onChange={ContactUsForm.handleChange}
                                                className="form-control form-control-lg"
                                            />
                                        </div>
                                        <button

                                            type="submit">
                                            <i className="fa fa-paper-plane" /> Send Message
                                        </button>
                                        <p>
                                            <hr></hr>
                                            <div className="w3-section">
                                                <p>
                                                    <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
                                                    BBD University, Lucknow
                                                </p>
                                                <p>
                                                    <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
                                                    Phone: 8546072604, 7800477099
                                                </p>
                                                <p>
                                                    <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right">
                                                        {" "}
                                                    </i>{" "}
                                                    Email: postermagicar@mail.com
                                                </p>
                                            </div>
                                        </p>
                                        {/* </form> */}
                                    </form>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;