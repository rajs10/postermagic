import React from 'react'
import './Feedback.css'
import Swal from "sweetalert2";


const Feedback = () => {
    const FeedbackForm = useFormik({
        initialValues: {
            Verygood: '',
            Good: '',
            Medicore: '',
            Bad: '',
            Verybad: ''

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

    const Feedback = () => {
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
                            <form onSubmit={FeedbackForm.handleSubmit}
                                className="px-4" action="">
                                <p className="text-center">
                                    <strong>Your rating:</strong>
                                </p>
                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="exampleForm"
                                        id="Very good"
                                        value={FeedbackForm.values.Verygood}
                                        onChange={FeedbackForm.handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="radio3Example1">
                                        Very good
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="exampleForm"
                                        id="Good"
                                        value={FeedbackForm.values.Good}
                                        onChange={FeedbackForm.handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="radio3Example2">
                                        Good
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="exampleForm"
                                        id="Medicore"
                                        value={FeedbackForm.values.Medicore}
                                        onChange={FeedbackForm.handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="radio3Example3">
                                        Medicore
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="exampleForm"
                                        id="Bad"
                                        value={FeedbackForm.values.Bad}
                                        onChange={FeedbackForm.handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="radio3Example4">
                                        Bad
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="exampleForm"
                                        id="Verybad"
                                        value={FeedbackForm.values.Verybad}
                                        onChange={FeedbackForm.handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="radio3Example5">
                                        Very bad
                                    </label>
                                </div>
                                <p className="text-center">
                                    <strong>What could we improve?</strong>
                                </p>
                                {/* Message input */}
                                <div className="form-outline mb-4">
                                    <textarea
                                        className="form-control"
                                        id="Yourfeedback"
                                        rows={4}
                                        defaultValue={""}
                                        value={FeedbackForm.values.Yourfeedback}
                                        onChange={FeedbackForm.handleChange}
                                    />
                                    <label className="form-label" htmlFor="form4Example3">
                                        Your feedback
                                    </label>
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

    export default Feedback;