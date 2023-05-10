import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const ManageMarkers = () => {

  // const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [loading, setLoading] = useState(true);
  const [markerList, setMarkerList] = useState([]);

  const url = 'http://localhost:5000'

  const [imageData, setImageData] = useState(null);

  const addImagetoDb = async (filename) => {
    //setSubmitting(true);
    console.log(filename);

    const res = await fetch('http://localhost:5000/image/add', {
      method: 'POST',
      body: JSON.stringify({
        image: filename,
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
    console.log(file.name)
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
          text: "Image Uploaded"
        })


        addImagetoDb(file.name)
        // console.log(file.name);
        // console.log(file);
        setImageData(file.name);
      }
    });
  };


  const fetchImage = async () => {
    setLoading(true);
    const res = await fetch(url + "/image/getall")
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setMarkerList(data)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImage();
  }, []);

  const displayImage = () => {
    return (
      <div className='container'>
        <div className="card mb-3">
          <div className="card-body">
            <label className="form-label upload-label" htmlFor="image">
              <i class="fa fa-arrow-up" aria-hidden="true"></i> Upload Marker Image
            </label>
            <input hidden type="file" id="image" onChange={uploadFile} />

          </div>
        </div>
        <div className="">
        </div>
        <section>
          <div className="container py-5">
            <div className='row'>
              {
                markerList.map(marker => (

                  <div className='col-md-3'>
                    <div className="mb-4">
                      <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                        <img
                          src={url+"/"+marker.file}
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
                  </div>
                ))
              }
            </div>
          </div>
        </section>


      </div>
    )
  }
  return (
    <div style={{backgroundImage: "url('https://academiccollegeprojects.com/wp-content/uploads/2015/07/Augmeneted-Reality-Projects-for-Engineering-students-support-panel.jpg')"}}>
      {displayImage()}
    </div>
  )
}

export default ManageMarkers