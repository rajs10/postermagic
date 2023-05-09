import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const ManageMarkers = () => {

  // const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState([])

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
      setImg(data)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImage();
  }, []);

  const displayImage = () => {
    return (
      <div className='container'>

        <div className="">
          <label className="form-label" htmlFor="form12">
            Example label
          </label>
          {/* <input type="file" id="image" className="form-control" onChange={uploadFile} /> */}
          <input type="file" id="image" onChange={uploadFile} />
        </div>

        <div>
          <div className="row">
            {img.map((image) => (
              <div className="col-md-4 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="card shadow-0 border rounded-3">
                  <div className="card-body">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        // src={pack.image ? pack.image : "/images/space-placeholder.jpg"}
                        src={'http://localhost:5000/' + image.image}
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>
    )
  }







  return (
    <div>
      {displayImage()}
    </div>
  )
}

export default ManageMarkers