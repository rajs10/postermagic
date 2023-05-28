import React from 'react'
import { useFormik } from "formik";
import './Feedback.css'
import Swal from "sweetalert2";


const Feedback = () => {
    const FeedbackForm = useFormik({
        initialValues: {
            Verygood: '',
            Good: '',
            Medicore: '',
            Bad: '',
            Verybad: '',
            Yourfeedback: ''
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
        <div className='card'>
            <div className="mx-0 mx-sm-auto mt-2 mb-3">
                <div className="card">
                    <div className="card-header bg-primary">
                        <h5 className="card-title text-white mt-2" id="exampleModalLabel">
                            Feedback request
                        </h5>
                    </div>
                    <div className="modal-body">
                        <div className="text-center">
                            <i className="far fa-file-alt fa-4x mb-3 text-primary" />
                            <p>
                                <strong>Your opinion matters</strong>
                            </p>
                            <p>
                                Have some ideas how to improve our product?
                                <strong>Give us your feedback.</strong>
                            </p>
                        </div>
                        <hr />
                        <form onSubmit={FeedbackForm.handleSubmit}>
                            <div className="px-4" action="">
                                <p className="text-center">
                                    <strong>Your rating:</strong>
                                </p>
                                <>
                                    <div className="container">
                                        <span id="rateMe1" />
                                    </div>
                                    {/* rating.js file */}
                                </>
                                </div>
                            
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <button type="button" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Feedback