import React, { useState } from 'react'
import Swal from 'sweetalert2';

const ManageVideos = () => {

  const url = 'http://localhost:5000';

  const [videoData, setVideoData] = useState(null)

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
        setVideoData(file.name);
      }
    });
  };







  return (
    <div>

      <div className="">
        <label className="form-label" htmlFor="form12">
          Example label
        </label>
        {/* <input type="file" id="image" className="form-control" onChange={uploadFile} /> */}
        <input type="file" id="image" className="form-control w-25" onChange={uploadFile} />
        
        

      </div>

    </div>
  )
}

export default ManageVideos;