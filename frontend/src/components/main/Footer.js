import React from "react";

function Footer() {
  return (
    <>
      <>
        {/* Footer */}
        <footer className="text-center text-lg-start bg-white text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary" />
                    Project Name
                  </h6>
                  <p>
                    PosterMagicAR
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Tools</h6>
                  <p>
                    <a href="https://www.mongodb.com/" className="text-reset">
                      MongoDB
                    </a>
                  </p>
                  <p>
                    <a href="https://react.dev/" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="https://nodejs.org/en" className="text-reset">
                      Node.js
                    </a>
                  </p>
                  <p>
                    <a href="https://expressjs.com/" className="text-reset">
                      Express.js
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                  <p>
                    <a href="/main/Feedback" className="text-reset">
                      Feedback
                    </a>
                  </p>
                  <p>
                    <a href="/main/About" className="text-reset">
                      About
                    </a>
                  </p>                              
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3 text-secondary" /> BBD University, Lucknow
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary" />
                    postermagicar@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3 text-secondary" />8546072604, 7800477099
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              PosterMagic
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </>
    </>
  );
}

export default Footer;
