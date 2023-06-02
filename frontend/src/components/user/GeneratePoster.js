import React, { useEffect, useState } from "react";
import app_config from "../../config";
import Swal from "sweetalert2";
import Copyrightfooter from "../main/Copyrightfooter";
import { useNavigate } from "react-router-dom";

const GeneratePoster = () => {
  const url = app_config.apiUrl;

  const [selPattern, setSelPattern] = useState(null);
  const [selImage, setSelImage] = useState(null);
  const [selVideo, setSelVideo] = useState(null);

  const [videoList, setVideoList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const navigate = useNavigate();

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
    if(res.status === 200){
      Swal.fire({
        icon: "success",
        title: "Nice",
        text: "Poster Created Successfully",
      });
      navigate('/user/manageposters');
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Something went wrong",
      });
    }
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
    setSelImage(data[0]._id);
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
      <div className="image-fluid backgroundattachment-fixed "
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/blue-purple-background-with-gradient-sky-word-love-it_1340-36620.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          minHeight:"100%"
          
          

        }}
      >
        <header className="pt-5">
          <div
            className="container-fluid  text-center py-5 p-3"
            style={{
              height: "30vh",
              backgroundImage:
                "url('https://i.pinimg.com/originals/63/7a/4d/637a4d42e1738853b2f96ffbbd60622a.gif')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <h1
              style={{ color: "pink", fontWeight: "bolder", fontSize: "8vw" }}
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
                    <input type="file" onChange={uploadPatternFile} id="patternfile" hidden />
                    <label className="btn btn-success w-100"  htmlFor="patternfile">
                      {" "}
                      <i className="fas fa-upload "></i> Upload
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
                        return <option value={image._id}>{image.image}</option>;
                      })}
                    </select>
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
