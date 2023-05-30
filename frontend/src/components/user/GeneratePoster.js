import React from 'react';

const GeneratePoster = () => {
  return (

    <div>
      <header className='bg-dark text-white'>
        <div className="container my-4" style={{ height: '30vh', backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWYenGebfzJCuwiR4WdjzTzI7BdavwbbeHA&usqp=CAU')"}}>
          <h1>Generate Poster</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Select Poster Marker Pattern</h4>
                </div>
                <div className="card-body">

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Select Poster Video</h4>
                </div>
                <div className="card-body">

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Select Poster Video</h4>
                </div>
                <div className="card-body">

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneratePoster;
