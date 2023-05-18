import React from 'react'
import './Feedback.css'

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
                        <form className="px-4" action="">
                            <p className="text-center">
                                <strong>Your rating:</strong>
                            </p>
                            <div className="form-check mb-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleForm"
                                    id="radio3Example1"
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
                                    id="radio3Example2"
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
                                    id="radio3Example3"
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
                                    id="radio3Example4"
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
                                    id="radio3Example5"
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
                                    id="form4Example3"
                                    rows={4}
                                    defaultValue={""}
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

export default Feedback