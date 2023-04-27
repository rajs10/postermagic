import React from "react";

function OpenCamera() {
  return (
    <>
      <div className="container py-5">
        <div className="row mb-4 align-items-center flex-lg-row-reverse">
          <div className="col-md-6 col-xl-7 mb-4 mb-lg-0 " style={{}}>
            {/* requires glightbox, please flag the option in the picostrap customizer panel*/}
            <div className="lc-block position-relative">
              <img
                className="img-fluid rounded shadow"
                src="https://images.unsplash.com/photo-1621947081720-86970823b77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80"
                srcSet="https://images.unsplash.com/photo-1621947081720-86970823b77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3840&q=80 3840w, https://images.unsplash.com/photo-1621947081720-86970823b77a??ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80 150w, https://images.unsplash.com/photo-1621947081720-86970823b77a??ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80 300w, https://images.unsplash.com/photo-1621947081720-86970823b77a??ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80 768w, https://images.unsplash.com/photo-1621947081720-86970823b77a??ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80 1024w"
                sizes="(max-width: 3840px) 100vw, 3840px"
                width={3840}
                height=""
                alt="Richard Horvath"
              />
              <a
                className="position-absolute top-50 start-50 translate-middle glightbox d-flex justify-content-center align-items-center"
                href="https://www.youtube.com/watch?v=BKgpLOUYZJ4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5em"
                  height="5em"
                  fill="currentColor"
                  className="text-white"
                  viewBox="0 0 16 16"
                  lc-helper="svg-icon"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
              </a>
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
              <a className="btn btn-lg btn-primary" href="/" role="button">
                Open Camera
              </a>
            </div>
            {/* /lc-block */}
          </div>
          {/* /col */}
        </div>
      </div>
    </>
  );
}

export default OpenCamera;
