import React from "react";

const GeneratePoster = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/blue-purple-background-with-gradient-sky-word-love-it_1340-36620.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <header className="pt-5">
        <div
          className="container-fluid  text-center py-5"
          style={{
            height: "30vh",
            backgroundImage:
              "url('https://cdn.shopify.com/s/files/1/0070/7032/files/best_20free_20background_20remover.jpg?v=1681162331')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        >
          <h1
            style={{ color: "black", fontWeight: "bolder", fontSize: "12vh" }}
          >
            Generate Poster
          </h1>
        </div>
      </header>
      <main>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Select Poster Marker Pattern</h4>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Select Poster Video</h4>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Select Poster Video</h4>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneratePoster;
