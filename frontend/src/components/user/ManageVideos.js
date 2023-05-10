import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const ManageVideos = () => {


  const [videoData, setVideoData] = useState(null)
  const [video, setVideo] = useState([])
  const [loading, setLoading] = useState(true);

  const url = 'http://localhost:5000';

  const addVideotoDb = async (filename) => {
    //setSubmitting(true);
    console.log(filename);

    const res = await fetch('http://localhost:5000/video/add', {
      method: 'POST',
      body: JSON.stringify({
        video: filename,
        // user: currentUser._id,
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
        text: 'you have successfully registered'

      })

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Something went wrong'
      })
    }

  }





  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        Swal.fire({
          title: 'Success',
          icon: 'success',
          text: "Video Uploaded"
        })

        addVideotoDb(file.name)
        // console.log(file.name);
        // console.log(file);
        setVideoData(file.name);
      }
    });
  };

  const fetchVideo = async () => {
    setLoading(true);
    const res = await fetch(url + "/video/getall")
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setVideo(data)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVideo();
  }, []);

  const displayVideo = () => {
    return (
      <div style={{ backgroundImage: "url(https://academiccollegeprojects.com/wp-content/uploads/2015/07/Augmeneted-Reality-Projects-for-Engineering-students-support-panel.jpg)", backgroundSize:'cover', backgroundRepeat:'no-repeat' }}>

        <div className='container'>

          <div className="">
            <label className="form-label" htmlFor="form12">
              Example label
            </label>
            {/* <input type="file" id="image" className="form-control" onChange={uploadFile} /> */}
            <input type="file" id="video" onChange={uploadFile} />
          </div>
          <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
              <h4 className="text-center mb-5">
                <strong>Product listing</strong>
              </h4>
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                      >
                        <div className="d-flex justify-content-start align-items-start h-100">
                          <h5>
                            <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                              $123
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(2).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                      >
                        <div className="d-flex justify-content-start align-items-start h-100">
                          <h5>
                            <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                              $239
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(3).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                      >
                        <div className="d-flex justify-content-start align-items-start h-100">
                          <h5>
                            <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                              $147
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="bg-image hover-zoom ripple shadow-1-strong rounded ripple-surface">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                      >
                        <div className="d-flex justify-content-start align-items-start h-100">
                          <h5>
                            <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                              $83
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                      // style={{ backgroundImage: "url(https://academiccollegeprojects.com/wp-content/uploads/2015/07/Augmeneted-Reality-Projects-for-Engineering-students-support-panel.jpg)" }}
                      >
                        <div className="d-flex justify-content-start align-items-start h-100">
                          <h5>
                            <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                              $106
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(6).webp"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                      >
                        <div className="d-flex justify-content-start align-items-start h-100">
                          <h5>
                            <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                              $58
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div>
            <div className="row">
              {video.map((vid) => (
                <div className="col-md-4 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                      <div className="bg-image rounded ">
                        {/* <img
                src={'http://localhost:5000/' + vid.video}
                className="w-100"
                alt=""
              /> */}
                        {/* <video src={'http://localhost:5000/' + vid.video} controls />   */}
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

    )
  }
  return (


    <div>
      {displayVideo()}
    </div>

  )
}

export default ManageVideos;