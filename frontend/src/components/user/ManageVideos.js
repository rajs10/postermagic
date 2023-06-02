import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageVideos = () => {
  const [videoData, setVideoData] = useState(null);
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  const [arPosters, setArPosters] = useState([]);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const url = 'http://localhost:5000';

  const addVideotoDb = async (filename) => {
    //setSubmitting(true);
    console.log(filename);

    const res = await fetch('http://localhost:5000/video/add', {
      method: 'POST',
      body: JSON.stringify({
        video: filename,
        user: currentUser._id,
        createdAt: new Date()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Nice',
        text: 'Video fetched'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Something went wrong'
      });
    }
  };

  

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file);
    fetch(url + '/util/uploadfile', {
      method: 'POST',
      body: fd
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
        Swal.fire({
          title: 'Success',
          icon: 'success',
          text: 'Video Uploaded'
        });

        addVideotoDb(file.name);
        // console.log(file.name);
        // console.log(file);
        setVideoData(file.name);
      }
    });
  };

  const deleteVideo = async (id) => {
    const res = await fetch(url + '/video/delete/' + id, {
      method: 'DELETE'
    });

    if (res.status === 200) {
      fetchVideo();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Deleted Successfully!'
      });
    }
  };

  const fetchVideo = async () => {
    setLoading(true);
    const res = await fetch(url + '/video/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setVideo(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  const displayVideo = () => {
    return (
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1627645835237-0743e52b991f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
          backgroundSize: 'cover'
        }}
      >
        <div className="container">
          <div className="card mb-3">
            <div className="card-body ">
              <label className="form-label upload-label" htmlFor="image">
                <i class="fa fa-arrow-up" aria-hidden="true"></i> Upload Manage Video
              </label>
              <input hidden type="file" id="image" onChange={uploadFile} />
            </div>
          </div>

          <div>
            <div className="row">
              {video.map((vid) => (
                <div className="col-md-4 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                      <button className="btn btn-danger" onClick={(e) => deleteVideo(vid._id)}>
                        Delete Video
                      </button>
                      <div className="bg-image rounded ">
                        <video src={'http://localhost:5000/' + vid.video} controls autoplay muted />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div>{displayVideo()}</div>;
};

export default ManageVideos;
