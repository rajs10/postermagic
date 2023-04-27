import React from "react";

function Team() {
  return (
    <>
      <h1 className="text-center py-4">Our Teams</h1>
      <div className="row row-cols-1 row-cols-md-2 g-5 p-5">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
              className="card-img-top"
              alt="Skyscrapers"
            />
            <div className="card-body">
              <h5 className="card-title">Raj Singh</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
              className="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
            <div className="card-body">
              <h5 className="card-title">Adarsh Mishra</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
