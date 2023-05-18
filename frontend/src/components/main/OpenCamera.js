import React from "react";

function OpenCamera() {
  return (
    <>
      <div className='fluid-container bg-dark '>
      <div className="container py-5 text-light my-1">
        <div className="row mb-4 align-items-center flex-lg-row-reverse">
          <div className="col-md-6 col-xl-7 mb-4 mb-lg-0 " style={{}}>
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
              <a className="btn btn-lg btn-primary" href="ARviewer" role="button">
              <h1 class="display-4">Open Camera</h1>
                
              </a>
            </div>
            {/* /lc-block */}
          </div>
          {/* /col */}
        </div>
      </div></div>
    </>
  );
}

export default OpenCamera;
