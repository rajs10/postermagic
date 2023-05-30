import React from "react";

function Copyrightfooter() {
  return (
    <>
      <div
        className="text-center p-1 mt-3 fixed-bottom"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          PosterMagic
        </a>
      </div>
    </>
  );
}

export default Copyrightfooter;
