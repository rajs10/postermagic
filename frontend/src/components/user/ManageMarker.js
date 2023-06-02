import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Copyrightfooter from "../main/Copyrightfooter";

const ManageImage = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [loading, setLoading] = useState(true);
  const [markerList, setMarkerList] = useState([]);

  const url = "http://localhost:5000";

  const [imageData, setImageData] = useState(null);

  const addImagetoDb = async (filename) => {
    //setSubmitting(true);
    console.log(filename);

    const res = await fetch("http://localhost:5000/image/add", {
      method: "POST",
      body: JSON.stringify({
        image: filename,
        user: currentUser._id,
        createdAt: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Nice",
        text: "you have successfully uploded",
      });
      fetchImage();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Something went wrong",
      });
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Image Uploaded",
        });

        addImagetoDb(file.name);
        // console.log(file.name);
        // console.log(file);
        setImageData(file.name);
      }
    });
  };

  const deleteMarker = async (id) => {
    const res = await fetch(url + "/image/delete/" + id, {
      method: "DELETE",
    });

    if (res.status === 200) {
      fetchImage();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Deleted Successfully!",
      });
    }
  };

  const fetchImage = async () => {
    setLoading(true);
    const res = await fetch(url + "/image/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setMarkerList(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const displayImage = () => {
    return (
      <div className="container pt-4">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <label className="form-label upload-label" htmlFor="image">
              <i class="fa fa-arrow-up" aria-hidden="true"></i> Upload Image
            </label>
            <input hidden type="file" id="image" onChange={uploadFile} />
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            {markerList.map((marker) => (
              <div className="col-md-4 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="card shadow-0 border rounded-3">
                  <div className="card-body">
                    <div className="mb-4">
                      <div className="bg-image ripple shadow-1-strong rounded">
                        <img
                          src={url + "/" + marker.image}
                          className="w-100"
                          alt="managemarker"
                        />
                        <a href="#!">
                          <div className="d-flex justify-content-start align-items-start h-100">
                            <h5>
                              <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                                {marker.image}
                              </span>
                            </h5>
                          </div>
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            />
                          </div>
                        </a>
                      </div>
                      <button
                        className="btn btn-danger btn-lg btn-block mt-2"
                        onClick={(e) => deleteMarker(marker._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/008/167/404/non_2x/simply-soft-gradation-technology-background-free-vector.jpg')",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        {displayImage()}
      </div>
      <Copyrightfooter />
    </>
  );
};

export default ManageImage;
