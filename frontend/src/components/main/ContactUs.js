import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
    const ContactUsForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
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
        <div className="contactbg">
            <div className="container pt-4 mb-0">
                <div className="row d-flex justify-content-center align-items-center my-4">
                    <div
                        className="card col-md-5 col-sm-3 col-xl-5 p-2"
                        style={{ marginLeft: "auto", backgroundColor: "#F3D6DC" }}
                    >
                        {/* Contact Section */}
                        <div className="w3-padding-64 w3-content" id="contact">
                            <div className="card-body p-2" style={{ border: "2px solid black" }}>

                                <form onSubmit={ContactUsForm.handleSubmit}>
                                    <h2 className="text-center">ContactUs</h2>
                                    <hr></hr>
                                    <p>Let's get in touch. Send me a message:</p>
                                    {/* <form> */}
                                    <div className="form-dark mb-0">
                                        <label className="form-label text-dark" htmlFor="typeNameX">
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
                                    <div className="form-label mb-0">
                                        <label className="form-label text-dark" htmlFor="typeEmailX">
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
                                    <div className="form-dark mb-3">
                                        <label className="form-label text-dark" htmlFor="typeMessageX">
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
                                    <button type="submit" className="btn btn-danger btn-md btn-block">
                                        Send Message
                                    </button>
                                    <p>
                                        <hr></hr>
                                        <div>
                                            <p className="mb-0">
                                                <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
                                                BBD University, Lucknow
                                            </p>
                                            <p className="mb-0">
                                                <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
                                                Phone: 8546072604, 7800477099
                                            </p>
                                            <p className="mb-0">
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
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ContactUs;