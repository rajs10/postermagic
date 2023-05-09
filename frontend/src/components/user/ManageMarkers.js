import React, { useState } from 'react'
import Swal from 'sweetalert2';

const ManageMarkers = () => {

  const url = 'http://localhost:5000'

  const [imageData, setImageData] = useState(null)

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
          text: "Image Uploaded"
        })
        // console.log(file.name);
        // console.log(file);
        setImageData(file.name);
      }
    });
  };







  return (
    <div className='container'>

      <div className="">
        <label className="form-label" htmlFor="form12">
          Example label
        </label>
        <input type="file" id="image" className="form-control" onChange={uploadFile} />
      </div>

      <div>
        <div className="card">
          <div className="card-body">
            <img src="backend\static\uploads\machine-learning-life-cycle.png" alt="" />
            <button type="button" className="btn btn-primary">
              Button
            </button>
          </div>
        </div>


      </div>


    </div>
  )
}

export default ManageMarkers