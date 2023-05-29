import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../../context/UserProvider";
import Copyrightfooter from "./Copyrightfooter";

const Login = () => {
  const { loggedIn, setLoggedIn } = useUserContext();

  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "You have successfully logged in",
        });
        setLoggedIn(true);
        const data = await res.json();
        sessionStorage.setItem("user", JSON.stringify(data));

        navigate("/user/managevideos");
      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Error !!",
          text: "Invalid Crendentials",
        });
      }
    },
  });
  return (
    <>
      <div className="LoginForm mt-5">
        <div className="container pt-2 mb-0">
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="card col-md-4 col-sm-3 col-xl-4 p-2 SignupCard"
              style={{ marginLeft: "auto", backgroundColor: "#F3D6DC" }}
            >
              <div
                className="card-body p-2"
                style={{ border: "2px solid black" }}
              >
                <form onSubmit={loginForm.handleSubmit}>
                  <div className="mb-md-5 mt-md-4 pb-1">
                    <h2 className="fw-bold mb-1 text-uppercase">Login</h2>
                    <p className="mb-3">
                      Please enter your Email and password!
                    </p>
                    <div className="form-dark mb-2">
                      <label className="form-label " htmlFor="typeEmailX">
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
                      <label className="form-label " htmlFor="typePasswordX">
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
                    <p className="small mb-2 pb-lg-2">
                      <a className="text-dark-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <button
                      type="submit"
                      className="btn btn-danger btn-md btn-block"
                    >
                      Login
                    </button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>
                      <a href="#!" className="">
                        <i className="fab fa-twitter fa-lg mx-4 px-2" />
                      </a>
                      <a href="#!" className="dark">
                        <i className="fab fa-google fa-lg" />
                      </a>
                    </div>
                    <p className="mb-0 mt-2">
                      Don't have an account?{" "}
                      <a href="Signup" className=" fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Copyrightfooter />
    </>
  );
};

export default Login;
