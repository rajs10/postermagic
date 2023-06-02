import React from "react";
import { useFormik } from "formik";
import "./Feedback.css";
import Swal from "sweetalert2";
import Copyrightfooter from "./Copyrightfooter";

const Feedback = () => {
  const FeedbackForm = useFormik({
    initialValues: {
      
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      //setSubmitting(true);
      console.log(values);
      const res = await fetch("http://localhost:5000/contact/add", {
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
          title: "Nice",
          text: "Message Sent",
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
                <h2 className="card-title text-center">Feedback Form</h2>
                <hr></hr>
                <label htmlFor="" className="form-label">
                  Rate your experience with our website ?
                </label>
                <div className="rating">
                  <input type="radio" name="rating" defaultValue={5} id={5} />
                  <label htmlFor={5}>☆</label>
                  <input type="radio" name="rating" defaultValue={4} id={4} />
                  <label htmlFor={4}>☆</label>
                  <input type="radio" name="rating" defaultValue={3} id={3} />
                  <label htmlFor={3}>☆</label>
                  <input type="radio" name="rating" defaultValue={2} id={2} />
                  <label htmlFor={2}>☆</label>
                  <input type="radio" name="rating" defaultValue={1} id={1} />
                  <label htmlFor={1}>☆</label>
                </div>

                <label htmlFor="" className="form-label">
                  Rate our Services ?
                </label>
                <div className="rating">
                  <input type="radio" name="rating" defaultValue={5} id={5} />
                  <label htmlFor={5}>☆</label>
                  <input type="radio" name="rating" defaultValue={4} id={4} />
                  <label htmlFor={4}>☆</label>
                  <input type="radio" name="rating" defaultValue={3} id={3} />
                  <label htmlFor={3}>☆</label>
                  <input type="radio" name="rating" defaultValue={2} id={2} />
                  <label htmlFor={2}>☆</label>
                  <input type="radio" name="rating" defaultValue={1} id={1} />
                  <label htmlFor={1}>☆</label>
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Would you like to say something?
                  </label>
                  <textarea
                    className="form-control"
                    name=""
                    id=""
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-danger btn-md btn-block"
                >
                  Send Message
                </button>

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
