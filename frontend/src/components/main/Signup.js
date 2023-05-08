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
                <h3 className="mb-5 text-uppercase">
                  Create Your Account
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="   ">
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="   ">
                      <input
                        type="text"
                        id="form3Example1n"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1n">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="   ">
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="   ">
                    
              
                    </div>
                  </div>
                </div>
                <div className="    mb-4">
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example8">
                    Address
                  </label>
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender: </h6>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" htmlFor="otherGender">
                      Other
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>State</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>City</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="    mb-4">
                  <input
                    type="text"
                    id="form3Example9"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example9">
                    DOB
                  </label>
                </div>
                <div className="    mb-4">
                  <input
                    type="text"
                    id="form3Example90"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example90">
                    Pincode
                  </label>
                </div>
                <div className="    mb-4">
                  
                </div>
                <div className="    mb-4">
                  <input
                    type="text"
                    id="form3Example97"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example97">
                    Email ID
                  </label>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">
                    Reset all
                  </button>
                  <button type="button" className="btn btn-warning btn-lg ms-2">
                    Submit form
                  </button>
                </div>
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

