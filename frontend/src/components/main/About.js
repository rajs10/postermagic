import React from "react";
import Copyrightfooter from "./Copyrightfooter";

const About = () => {
  return (
    <>
      <div class="container mt-4">
        <div class="row h-30">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Authentication System</h5>
                <p class="card-text">
                  The authentication system in AR (augmented reality) is
                  responsible for verifying the identity of users and
                  authorizing access to AR content based on predefined
                  permissions and roles. It ensures the security and privacy of
                  AR content and user data.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">AR Setup</h5>
                <p class="card-text">
                  The AR setup in the Poster Magic project involves using a
                  mobile device with an AR-enabled app to scan a physical poster
                  and overlay virtual content on it.
                  <br></br>The setup requires a stable internet connection and
                  access.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Video/Image Manager</h5>
                <p class="card-text">
                  The video/image manager in the Poster Magic AR project is
                  responsible for managing the display and interaction of video
                  and image content overlaid on a physical poster. It includes
                  features such as resizing, positioning, and scaling of video
                  and image elements to fit within the poster, creating an
                  immersive AR experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">QR Generation System</h5>
                <p class="card-text">
                  The QR code generation system in the Poster Magic AR project
                  creates unique QR codes that are associated with each physical
                  poster.
                  <br></br>The system ensures that each QR code can be scanned
                  to trigger the corresponding AR experience, allowing users to
                  access the AR content from their mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Camera Handler</h5>
                <p class="card-text">
                  The camera handler in the Poster Magic AR project is
                  responsible for capturing and processing images of the
                  physical posters, which are used to trigger the corresponding
                  AR content. The handler may include features such as image
                  recognition, tracking, and filtering to ensure accurate and
                  reliable detection of the posters.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Video Embedding System</h5>
                <p class="card-text">
                  The video embedding system in the Poster Magic AR project is
                  responsible for embedding video content within the AR
                  experience overlaid on a physical poster. The system includes
                  features such as video synchronization, layering, and
                  interaction with other AR elements to create an immersive and
                  engaging experience for users.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Offline Support System</h5>
                <p class="card-text">
                  The offline support system in the Poster Magic AR project
                  allows users to access the AR content even when an internet
                  connection is not available. The system stores the necessary
                  AR content locally on the user's device, ensuring that the
                  experience remains accessible and functional offline.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">User Dashboard</h5>
                <p class="card-text">
                  The user dashboard in the Poster Magic AR project provides
                  users with a personalized interface to access and manage their
                  AR content. The dashboard includes features such as user
                  profile management, AR content library, and social sharing
                  options.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Feedback System</h5>
                <p class="card-text">
                  The feedback system in the Poster Magic AR project enables
                  users to provide feedback on their AR experience, such as
                  rating the content, leaving comments, or reporting issues. The
                  system helps improve the quality of the AR content and user
                  satisfaction by allowing developers to address user concerns
                  and make necessary improvements.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Poster Publishing System</h5>
                <p class="card-text">
                  The poster publishing system in the Poster Magic AR project is
                  responsible for enabling users to publish their own posters
                  with associated AR content. The system includes features such
                  as poster creation tools, content uploading, and QR code
                  generation to allow users to create and share their own AR
                  experiences with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyrightfooter></Copyrightfooter>
    </>
  );
};

export default About;
