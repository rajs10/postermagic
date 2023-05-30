import React from "react";
import { NavLink } from "react-router-dom";

function OpenCamera() {
  return (
    <>
      <div className="fluid-container bg-dark mt-4" style={{ height: "100%" }}>
        <div className="container py-5 text-light my-1">
          <div className="row mb-4 align-items-center flex-lg-row-reverse">
            <div
              className="col-md-6 col-xl-7 mb-4 mb-lg-0"
              style={{ paddingTop: "5%" }}
            >
              {/* requires glightbox, please flag the option in the picostrap customizer panel*/}
              <div className="lc-block position-relative">
                <img
                  className="img-fluid rounded shadow"
                  src="https://images.unsplash.com/photo-1621947081720-86970823b77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80"
                  srcSet="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/032_Blog_768x440.gif"
                  width={3840}
                  height="100%"
                  alt="AR Poster"
                />
              </div>
            </div>
            {/* /col */}
            <div className="col-md-6 col-xl-5">
              <div className="lc-block mb-3">
                <div editable="rich">
                  <h1 className="fw-bolder display-2">Poster Magic</h1>
                </div>
              </div>
              {/* /lc-block */}
              {/* /lc-block */}
              <div className="lc-block mb-4">
                <div editable="rich">
                  <p className="lead">
                    Get details of any poster by just scanning it.
                  </p>
                </div>
              </div>
              <div className="lc-block">
                <NavLink
                  className="btn btn-danger btn-lg"
                  to="../Login"
                  role="button"
                >
                  Get Started
                </NavLink>
              </div>
              {/* /lc-block */}
            </div>
            {/* /col */}
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenCamera;
