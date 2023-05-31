import React, { useEffect, useState } from "react";
import app_config from "../../config";
import Swal from "sweetalert2";
import Copyrightfooter from "../main/Copyrightfooter";

const GeneratePoster = () => {
  const url = app_config.apiUrl;

  const [selPattern, setSelPattern] = useState(null);
  const [selImage, setSelImage] = useState(null);
  const [selVideo, setSelVideo] = useState(null);

  const [videoList, setVideoList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const saveMarker = async () => {
    const data = {
      image: selImage,
      video: selVideo,
      pattern: selPattern,
      user: currentUser._id,
    };
    const res = await fetch(url + "/marker/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(res.status);
    
  };

  const uploadPatternFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setSelPattern(file.name);
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
          text: "Video Uploaded",
        });
      }
    });
  };

  const fetchUserVideos = async () => {
    const res = await fetch(url + "/video/getbyuser/" + currentUser._id);
    const data = await res.json();
    console.log(data);
    setVideoList(data);
    setSelVideo(data[0]._id);
  };

  const fetchUserImages = async () => {
    const res = await fetch(url + "/image/getbyuser/" + currentUser._id);
    const data = await res.json();
    console.log(data);
    setImageList(data);
    // setSelImage(data[0]._id);
  };

  const getUserPosters = async () => {
    const res = await fetch(url + '/marker/getbyuser/' + currentUser._id);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
    }
  };

  useEffect(() => {
    getUserPosters();
  }, []);

  useEffect(() => {
    fetchUserVideos();
    fetchUserImages();
  }, []);

  return (
    <>
      <div className="image-fluid "
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
              style={{ color: "black", fontWeight: "bolder", fontSize: "8vw" }}
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
                  <div className="card-body">
                    <input type="file" onChange={uploadPatternFile} />
                    <label className="btn btn-success mt-3">
                      {" "}
                      <i className="fas fa-upload "></i> Upload{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Select Poster Video</h4>
                  </div>
                  <div className="card-body">
                    <select
                      className="form-control"
                      onChange={(e) => setSelVideo(e.target.value)}
                    >
                      {videoList.map((video) => {
                        return <option value={video._id}>{video.video}</option>;
                      })}
                    </select>
                    <label className="btn btn-success mt-3">
                      {" "}
                      <i className="fas fa-upload "></i> Upload{" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Select Poster Image</h4>
                  </div>
                  <div className="card-body">
                    <select
                      className="form-control"
                      onChange={(e) => setSelImage(e.target.value)}
                    >
                      {imageList.map((image) => {
                        return <option value={image._id}>{image.name}</option>;
                      })}
                    </select>
                    <label className="btn btn-success mt-3">
                      {" "}
                      <i className="fas fa-upload "></i> Upload{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-danger w-100 mt-5 mb-5"
              onClick={saveMarker}
            >
              Generate POSTER
            </button>
          </div>
        </main>
      </div>
      <Copyrightfooter />
    </>
  );
};

export default GeneratePoster;
