import { useFormik } from "formik";
import React from 'react'
import * as Yup from 'yup';
import Swal from "sweetalert2";
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


const Signup = () => {

const signupForm = useFormik({
  initialValues: {
    name : '',
    email : '',
    password : '',
    cPassword : ''
  },
  onSubmit: async (values,{setSubmitting}) => { 
      //setSubmitting(true);
          console.log(values);

          const res = await fetch('http://localhost:5000/user/add',{
            method:'POST',
            body :JSON.stringify(values),
            headers:{
              'Content-Type':'application/json'
            }
          });
          console.log(res.status);
          if(res.status === 200){

           Swal.fire({
            icon : 'success',
            title : 'Nice',
            text : 'you have successfully registered'

           })

          } else{
            Swal.fire({
              icon :'error',
              title : 'Oops',
              text : 'Something went wrong'
            })
          }           
      
    },
    validationSchema:SignupSchema
});

return (
  <section
    className="bg-image py-5"
    style={{
      minHeight: '100vh',
      backgroundImage:
        'url("https://mdbootstrap.com/img/new/fluid/city/018.jpg")',
    }}
  >
    <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">
                  Create an account
                </h2>
                <form onSubmit={signupForm.handleSubmit}>
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form3Example1cg">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={signupForm.values.name}
                      onChange={signupForm.handleChange}
                      className="form-control form-control-lg"
                    />
                    <span className="text-danger">{signupForm.errors.name}</span>
                  </div>
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form3Example3cg">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={signupForm.values.email}
                      onChange={signupForm.handleChange}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form3Example4cg">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={signupForm.values.password}
                      onChange={signupForm.handleChange}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className=" mb-4">
                    <label className="form-label" htmlFor="form3Example4cdg">
                      confirm password
                    </label>
                    <input
                      type="password"
                      id="cPassword"
                      value={signupForm.values.cPassword}
                      onChange={signupForm.handleChange}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3cg"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example3g"
                    >
                      I agree all statements in{" "}
                      <a href="#!" className="text-body">
                        <u>Terms of service</u>
                      </a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-success btn-block btn-lg"
                      disabaled={signupForm.isSubmitting}

                    >{ signupForm.isSubmitting && <span className="spinner-border spinner-border-sm"></span>}
                      Register
                    </button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">
                    Have already an account?{" "}
                    <a href="#!" className="fw-bold text-body">
                      <u>Login here</u>
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
);
};

export default Signup;
