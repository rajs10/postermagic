import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import app_config from '../../config';

const ManagePosters = () => {
  const [loading, setLoading] = useState(true);
  const [posterList, setPosterList] = useState([]);

  const url = app_config.apiUrl;

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const deletePoster = async (id) => {
    const res = await fetch(url + '/marker/delete/' + id, {
      method: 'DELETE'
    });

    if (res.status === 200) {
      fetchPosters();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Deleted Successfully!'
      });
      fetchPosters();
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
    }
  };

  const fetchPosters = async () => {
    setLoading(true);
    const res = await fetch(url + '/marker/getbyuser/' + currentUser._id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setPosterList(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosters();
  }, []);

  const displayPosters = () => {
    const arUrl = 'http://127.0.0.1:5501/';
    return posterList.map((poster) => (
      <div className="col-md-4">
        
        <div className="card">
          <img src={poster.image ? (url+'/'+poster.image.image) : ''} alt=""/>
          <div className="card-body">
            <a target="_blank" href={`${arUrl}?ar=${poster._id}`}>
              View Poster in AR
            </a>
          </div>
          <div className="card-footer">
          <button className="btn btn-danger" onClick={(e) => deletePoster(poster._id)}>
            Delete
          </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/laptop-retro-camera-white-background-with-green-leaves-concept-unity-with-nature-eco-still-life-top-view_175682-7110.jpg?w=740')",
        backgroundSize: 'cover',
        minHeight: '100vh'
      }}
    >
      <div className="container py-5">
        <div className="row">{displayPosters()}</div>
      </div>
    </div>
  );
};

export default ManagePosters;
