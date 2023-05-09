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
    // validationSchema:SignupSchema
});

return (
  <section
    className="bg-image py-5"
    style={{
      minHeight: '100vh',
      backgroundImage:
        'url("https://i.pinimg.com/736x/86/cf/48/86cf488c0f2f0b5ddc1e36bd45c86e5c.jpg")',
    }}
  >
<section className="h-100 ">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo"
                className="img-fluid"
                style={{
                  borderTopLeftRadius: ".25rem",
                  borderBottomLeftRadius: ".25rem"
                }}
              />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <form onSubmit={signupForm.handleSubmit}>
                <h3 className="mb-5 text-uppercase text-center">
                  Create Your Account
                </h3>
                <div className="row">
                  <div className=" mb-4">
                    <div className="   ">
                      <input
                        type="text"
                        id="name"
                        value={signupForm.values.name}
                        onChange={signupForm.handleChange}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        Full Name
                      </label>
                    </div>
                  </div>
                  
                </div>
                
                <div className=" mb-4">
                  <input
                    type="email"
                    id="email"
                        value={signupForm.values.email}
                        onChange={signupForm.handleChange}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example8">
                    Email
                  </label>
                </div>
                
                <div className="    mb-4">
                  <input
                    type="password"
                    id="password"
                        value={signupForm.values.password}
                        onChange={signupForm.handleChange}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example9">
                    Password
                  </label>
                </div>
                <div className="    mb-4">
                  <input
                    type="password"
                    id="cPassword"
                        value={signupForm.values.cPassword}
                        onChange={signupForm.handleChange}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example9">
                    Confirm Password
                  </label>
                </div>
                <div className="    mb-4">
                </div>
                <div className="    mb-4">
                  
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">
                    Reset all
                  </button>
                  <button type="submit" className="btn btn-warning btn-lg ms-2">
                    Submit form
                  </button>

                </div>
                <p className="mt-5">
                      Have an account?{" "}
                      <a href="Login" className="text-dark-50 fw-bold">
                        Login
                      </a>
                    </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  </section>
);
};

export default Signup;

