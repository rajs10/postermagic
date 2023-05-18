import React from 'react'

const Page = () => {
    return (
        <div className="card text-center">
            <div className="mt-3"><h2>
                Our built-in solution<span className="badge badge-primary"></span>
            </h2>
            </div>

            <><div className=''>
                <>
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded m-2"
                        data-mdb-ripple-color="dark"
                    >
                        Retail
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded m-2"
                        data-mdb-ripple-color="dark"
                    >
                        Education
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded m-2"
                        data-mdb-ripple-color="dark"
                    >
                        Tourism
                    </button>
                </>
            </div>
            </>

            <div className="d-flex">
                <div className="p-2 w-100"><h5 className="card-title">Retail</h5>
                    <p className="card-text">
                        Magic AR can enhance the shopping experience by allowing customers to visualize products in their own space before purchasing, as well as providing personalized recommendations and interactive product information.

                    </p>
                    <button type="button" className="btn btn-primary">
                        Button
                    </button></div>
                <div className="p-2 flex-shrink-1"><img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
                </div>
            </div>
            <div className="d-flex">
            <div className="p-2 flex-shrink-1"><img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
                </div>
                <div className="p-2 w-100"><h5 className="card-title">Retail</h5>
                    <p className="card-text">
                        Magic AR can enhance the shopping experience by allowing customers to visualize products in their own space before purchasing, as well as providing personalized recommendations and interactive product information.

                    </p>
                    <button type="button" className="btn btn-primary">
                        Button
                    </button></div>
                
            </div>
            <div className="d-flex">
                <div className="p-2 w-100"><h5 className="card-title">Retail</h5>
                    <p className="card-text">
                        Magic AR can enhance the shopping experience by allowing customers to visualize products in their own space before purchasing, as well as providing personalized recommendations and interactive product information.

                    </p>
                    <button type="button" className="btn btn-primary">
                        Button
                    </button></div>
                <div className="p-2 flex-shrink-1"><img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
                </div>
            </div>
        </div>
    )
}

export default Page