import React from 'react'

const Page = () => {
    return (
        <div className="card text-center">
            <div className="mt-3 text-info"><h2>
                Our built-in solution<span className="badge badge-primary"></span>
            </h2>
            </div>

            <><div className=''>
                <>
                    <a href='#Retail'
                        type="button"
                        className="btn btn-outline-secondary btn-rounded m-2"
                        data-mdb-ripple-color="dark"
                    >
                        Retail
                    </a>
                    <a href='#Education'
                        type="button"
                        className="btn btn-outline-secondary btn-rounded m-2"
                        data-mdb-ripple-color="dark"
                    >
                        Education
                    </a>
                    <a href='#Tourism'
                        type="button"
                        className="btn btn-outline-secondary btn-rounded m-2"
                        data-mdb-ripple-color="dark"
                    >
                        Tourism
                    </a>
                </>
            </div>
            </>

            <div className="d-flex">
                <div className="p-2 w-100 float-md-left" id='Retail'><h3 className="card-title">Retail</h3>
                    <p className="card-text">
                        Augmented reality can be used in retail to enhance the shopping experience for customers. Some possible applications include virtual try-on for clothing and makeup, product visualization in 3D, and interactive in-store displays that provide additional information and engagement.

                    </p>
                </div>
                <div className="p-2 flex-shrink-1" id='Education'><img
                    src="https://jingdaily.com/wp-content/uploads/2018/04/4718000514da94aa0992.gif"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
                </div>
            </div>
            <div className="d-flex">
                <div className="p-2 flex-shrink-1" i><img
                    src="https://diui35v2plbz7.cloudfront.net/blogs/20191124221446.gif"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
                </div>
                <div className="p-2 w-100"><h3 className="card-title">Education</h3>
                    <p className="card-text">
                        Augmented reality in education can help make learning more interactive and engaging. It can be used to provide visual and interactive demonstrations, simulations, and educational games. AR can also help students explore complex concepts, such as anatomy or astronomy, in a more immersive and memorable way.

                    </p>
                </div>

            </div>
            <div className="d-flex">
                <div className="p-2 w-100" id='Tourism'><h3 className="card-title">Tourism</h3>
                    <p className="card-text">
                    Augmented reality can enhance the tourism experience by providing virtual guides, 3D maps, and historical reconstructions. AR can also help visitors navigate unfamiliar environments, learn about landmarks and attractions, and immerse themselves in local culture. AR can transform tourism by making it more informative, entertaining, and interactive for travelers.


                    </p>
                </div>
                <div className="p-2 flex-shrink-1"><img
                    src="https://i.gifer.com/D6bd.gif"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
                </div>
            </div>
        </div>
    )
}

export default Page