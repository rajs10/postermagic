import React from "react";

const Marker = () => {
  return (
    <>
      <title>AR.js Marker Training</title>
      {/* include mdl */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      {/* Include pdfMake - http://pdfmake.org/ */}
      {/* include THREEx.ArPatternFile */}
      <style
        media="screen"
        dangerouslySetInnerHTML={{
          __html:
            "\n\tbody {\n\t\tfont-family: arial;\n\t\tbackground-color: #eee;\n\t}\n\th1 {\n\t\ttext-align: center;\n\t\tfont-size: 500%;\n\t}\n\tdiv.mdl-cell {\n\t\ttext-align: center;\n\t}\n\n\th1 a {\n\t\ttext-decoration: none;\n\t}\n\th1 a:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t#imageContainer img {\n\t\twidth: 100%;\n\t\tmax-width: 512px;\n\t}\n\n\t#topRightButtons {\n\t\tposition: fixed;\n\t\ttop: 1em;\n\t\tright: 1em;\n\t}\n",
        }}
      />
      <h1>
        <a href="https://github.com/jeromeetienne/ar.js" target="_blank">
          AR.js
        </a>{" "}
        Marker Training
      </h1>
      {/* *********************************************************************** */}
      {/* *********************************************************************** */}
      {/* *********************************************************************** */}

      {/* *********************************************************************** */}
      {/* *********************************************************************** */}
      {/* *********************************************************************** */}
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <label
            id="buttonUpload"
            htmlFor="fileinput"
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          >
            <input type="file" id="fileinput" style={{ display: "none" }} />
            Upload
          </label>
          <div className="mdl-tooltip" htmlFor="buttonUpload">
            Upload the image to put inside the marker
          </div>
          <div style={{ justifyContent: "center" }} className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
              <label
                className="mdl-js-ripple-effect"
                htmlFor="patternRatioSlider"
              >
                <span className="">Pattern Ratio 0.50</span>
                <input
                  id="patternRatioSlider"
                  className="mdl-slider mdl-js-slider"
                  type="range"
                  min={10}
                  max={90}
                  defaultValue={50}
                />
              </label>
              <div className="mdl-tooltip" htmlFor="patternRatioSlider">
                Set size of inner image vs black border
              </div>
            </div>
          </div>
          <div style={{ justifyContent: "center" }} className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
              <label className="mdl-js-ripple-effect" htmlFor="imageSize">
                <span className="">Image size 512px</span>
                <input
                  id="imageSize"
                  className="mdl-slider mdl-js-slider"
                  type="range"
                  min={150}
                  max={2500}
                  defaultValue={512}
                />
              </label>
              <div className="mdl-tooltip" htmlFor="patternRatioSlider">
                Set the pixel width/height of the image.
              </div>
            </div>
          </div>
          <div style={{ justifyContent: "center" }} className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
              <label className="mdl-js-ripple-effect" htmlFor="borderColor">
                <span className="">
                  Border color. Please choose a dark one.
                </span>
                <input id="borderColor" type="text" defaultValue="black" />
              </label>
              <div className="mdl-tooltip" htmlFor="borderColor">
                Set the marker border color, using hexa code or color name.
              </div>
            </div>
          </div>
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          <button
            id="buttonDownloadEncoded"
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          >
            Download Marker
          </button>
          <div className="mdl-tooltip" htmlFor="buttonDownloadEncoded">
            Download marker encoded from the uploaded image
          </div>
          <br />
          <br />
          <button
            id="buttonDownloadFullImage"
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          >
            Download Image
          </button>
          <div className="mdl-tooltip" htmlFor="buttonDownloadFullImage">
            Download marker image
          </div>
        </div>
      </div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--3-col" />
        <div className="mdl-cell mdl-cell--6-col">
          <div id="imageContainer" />
        </div>
        <div className="mdl-cell mdl-cell--3-col" />
      </div>
    </>
  );
};

export default Marker;
