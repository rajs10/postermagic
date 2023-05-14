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

  const deleteVideo = async (id) => {
    const res = await fetch(url+'/video/delete/'+id, {
      method: 'DELETE'
    });

    if(res.status === 200){
      fetchVideo();
      Swal.fire({
        icon : 'success',
        title : 'Success',
        text : 'Deleted Successfully!'
      })
    }
  }

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
      <div style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/camera-setting-take-video-blogger-stage-background_10541-1386.jpg?w=740')", backgroundSize:'cover'}}>

        <div className='container'>
        <div className="card mb-3">
          <div className="card-body">
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