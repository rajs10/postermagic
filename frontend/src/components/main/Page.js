import React from 'react'

const Page = () => {
    return (
        <div className=' mt-3'>
            <div className="card">
                <div className="mt-3 text-info text-center"><h2>
                    Our built-in solution<span className="badge badge-primary"></span>
                </h2>
                </div>

                <><div className='text-center'>
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
                        <a href='#Entertainment'
                            type="button"
                            className="btn btn-outline-secondary btn-rounded m-2"
                            data-mdb-ripple-color="dark"
                        >
                            Entertainment
                        </a>
                    </>
                </div>
                </>

                <div className="d-flex">
                    <div className="p-2 w-100 float-md-left" id='Retail'><h3 className="card-title">Retail</h3>
                        <p className="card-text">
                            Enhance your retail experience with Postermagic AR! Step into a world where products come alive through augmented reality. Simply scan posters and watch as they transform into interactive displays, showcasing detailed information, product demos, and personalized recommendations. Visualize how furniture fits into your space, try on virtual clothing, or test out makeup virtually. With Postermagic AR, customers can make informed decisions, engage with brands in exciting ways, and enjoy a seamless blend of digital and physical shopping. Revolutionize your retail space and captivate your customers with this cutting-edge technology.

                        </p>
                    </div>
                    <div className="p-2 flex-shrink-1" id='Retail'><img
                        src="https://jingdaily.com/wp-content/uploads/2018/04/4718000514da94aa0992.gif"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Retail"
                    />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-shrink-1" id='Education'><img
                        src="https://diui35v2plbz7.cloudfront.net/blogs/20191124221446.gif"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Education"
                    />
                    </div>
                    <div className="p-2 w-100" id='Education'><h3 className="card-title">Education</h3>
                        <p className="card-text">
                            Elevate education with Postermagic AR! Transform traditional learning materials into immersive educational experiences. Students can scan posters to explore virtual worlds, dissect 3D models, and engage with interactive simulations. Dive into historical events, examine the human body, or explore scientific concepts in a whole new dimension. Postermagic AR brings subjects to life, making learning exciting and accessible for all. Teachers can create engaging lesson plans that captivate students' attention and enhance their understanding. With Postermagic AR, education becomes a journey of discovery and exploration, revolutionizing the classroom experience.

                        </p>
                    </div>

                </div>
                <div className="d-flex">
                    <div className="p-2 w-100" id='Tourism'><h3 className="card-title">Tourism</h3>
                        <p className="card-text">
                            Experience a new dimension of tourism with Postermagic AR! Scan posters and embark on virtual adventures that transport you to iconic landmarks and breathtaking destinations. Explore ancient ruins, stroll through bustling cities, or relax on pristine beaches, all from the comfort of your surroundings. Postermagic AR provides interactive guides, historical insights, and immersive storytelling, making every trip a memorable and educational experience. Whether planning your next vacation or reliving past travels, let Postermagic AR ignite your wanderlust and bring the world to your fingertips. Discover the wonders of the world like never before!


                        </p>
                    </div>
                    <div className="p-2 flex-shrink-1"><img
                        src="https://i.gifer.com/D6bd.gif"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Tourism"
                    />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="p-2 flex-shrink-1" id='Entertainment'><img
                        src="https://cdn.dribbble.com/users/361263/screenshots/5028034/ee.gif"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Entertainment"
                    />
                    </div>
                    <div className="p-2 w-100"><h3 className="card-title">Entertainment</h3>
                        <p className="card-text">
                            Prepare for unparalleled entertainment with Postermagic AR! Immerse yourself in a world where posters come to life with captivating augmented reality experiences. Witness stunning 3D animations, meet virtual characters, and interact with engaging games. From thrilling action adventures to mesmerizing fantasy realms, Postermagic AR delivers an immersive entertainment revolution. Whether at home or in public spaces, unleash your imagination and let Postermagic AR transport you to new realms of fun and excitement. Get ready for a mind-bending fusion of reality and digital magic that will leave you spellbound.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page