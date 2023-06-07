import React from "react";

function Team() {
  return (
    <>
      <div className="container-fluid mt-4 mb-4 text-center text-danger fw-bold fs-5">
        <h2>
          Example Based on Augmented Reality
        </h2>

        <div className="team row row-cols-1 row-cols-md-4 p-2">
          <div className="col">
            <div className="card h-100 ">
              <img
                src="https://i.gifer.com/iaB.gif"
                className="card-img-top"
                alt="Skyscrapers"
              />
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://i.gifer.com/9xkZ.gif"
                className="card-img-top"
                alt="Los Angeles Skyscrapers"
              />
            </div>
          </div>
          <div className="col">
            <div className="card h-100 ">
              <img
                src="https://i.gifer.com/4pze.gif"
                className="card-img-top"
                alt="Skyscrapers"
              />
            </div>
          </div>
          <div className="col">
            <div className="card h-100 ">
              <img
                src="https://fast.artivive.com/assets/uploads/2021/11/4c79cf9593778fe79cafe94ea704d379.gif"
                className="card-img-top"
                alt="Skyscrapers"
              />
            </div>
          </div>
        </div >
      </div>
    </>
  );
}

export default Team;
