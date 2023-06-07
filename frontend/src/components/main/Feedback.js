import React from "react";
import { useFormik } from "formik";
import "./Feedback.css";
import Swal from "sweetalert2";
import Copyrightfooter from "./Copyrightfooter";

const Feedback = () => {
  const FeedbackForm = useFormik({
    initialValues: {
      name: "",
      rating: "",
      userfeedback: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      console.log(values);
      const res = await fetch("http://localhost:5000/feedback/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Thank you",
          text: "We got your feedback.",
        });
        resetForm();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Something went wrong",
        });
      }
    },
  });

  return (
    <>
      <div className="feedbackbg mt-5">
        <div className="container pt-2 mb-4">
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="card col-md-4 col-sm-3 col-xl-4 p-2 SignupCard"
              style={{
                marginLeft: "65%",
                backgroundColor: "#F3D6DC",
                height: "75%",
              }}
            >
              <div
                className="card-body p-2"
                style={{ border: "2px solid black" }}
              >
                <form onSubmit={FeedbackForm.handleSubmit}>
                  <h2 className="card-title text-center">Feedback Form</h2>
                  <hr></hr>
                  <label htmlFor="" className="form-label">
                    Enter Your Name :
                  </label>
                  <div className="feedback mb-2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={FeedbackForm.values.name}
                      onChange={FeedbackForm.handleChange}
                      className="form-control form-control-lg"
                      placeholder="John deo"
                    />
                  </div>
                  <label htmlFor="" className="form-label">
                    Rate your experience with our website ?
                  </label>
                  <div className="">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      id="rating"
                      name="rating"
                      value={FeedbackForm.values.rating}
                      onChange={FeedbackForm.handleChange}
                      className="form-control form-control-lg"
                      placeholder="Rate between 0 - 10"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Would you like to say something?
                    </label>
                    <textarea
                      className="form-control"
                      name="userfeedback"
                      id="userfeedback"
                      value={FeedbackForm.values.userfeedback}
                      onChange={FeedbackForm.handleChange}
                      placeholder="Write something...."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger btn-md btn-block"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-3 text-muted" style={{ lineHeight: "1.25" }}>
                  Note : Please share your actual experience with us so that we
                  can improve our Services much better.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyrightfooter />
    </>
  );
};

export default Feedback;
