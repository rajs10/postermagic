import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
            'content-Type': 'application/json',
       
    },
  });

  console.log(res.status);

  if (res.status === 200){
  Swal.fire({
    icon : "success",
    title: "Nice",
    text: "You have successfully logged in",
  });
}else if(res.status === 401){
    Swal.fire({
        icon:"error",
        title:"Error !!",
        text:"Invalid Crendentials",
    });
  }
},
});
  return (
    <>
      <section className="login-bg"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586191582151-f73872dfd183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div
          className="card text-light" 
          style={{ borderRadius: "1rem",backgroundColor:"black",boxShadow:"2px 2px 10px 8px black" }}
        >
          <div className="card-body p-5 text-white">
            <form onSubmit={loginForm.handleSubmit}>
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>
              <div className="form-dark mb-4">
                <label className="form-label text-white" htmlFor="typeEmailX">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={loginForm.values.email}
                  onChange={loginForm.handleChange}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-label mb-4">
              <label className="form-label text-white" htmlFor="typePasswordX">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  className="form-control form-control-lg"
                />
              </div>
              <p className="small mb-5 pb-lg-2">
                <a className="text-dark-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <button
                className="btn btn-outline-white btn-lg px-5"
                type="submit"
              >
                Login
              </button>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white">
                  <i className="fab fa-facebook-f fa-lg" />
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-twitter fa-lg mx-4 px-2" />
                </a>
                <a href="#!" className="dark">
                  <i className="fab fa-google fa-lg" />
                </a>
              </div>
            </div>
            </form>
            <div>
              <p className="mb-0">
                Don't have an account?{" "}
                <a href="#!" className="text-white-50 fw-bold">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Login;
