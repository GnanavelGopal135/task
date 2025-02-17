import img1 from "../assets/Feature-Course/1.png"
import img2 from "../assets/Feature-Course/2.png"
import img3 from "../assets/Feature-Course/3.png"
import img4 from "../assets/Feature-Course/4.png"
import img5 from "../assets/Feature-Course/5.png"
import img6 from "../assets/Feature-Course/6.png"
import icon from "../assets/Feature-Course/icon.png"


function Featured() {
  return (
    <div>
       {/* <!-- Featured-Course --> */}
     <section>
        <div className="text-center featured-Course content-center items-center">
            <h1 className="text-5xl mt-10">Featured <span className="text-blue-700">Course</span></h1>
            <p className="uppercase text-lg mt-4">The feature courses are we invented our teaching part</p>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 place-items-center mt-10 course-content">
                <div className="h-96 w-90 rounded text-start bg-white shadow-2xl cursor-pointer cards">
                    <div className="h-56 w-80">
                        <img src={img1} alt="1"/>
                    </div>
                    <div>
                        <div className="flex justify-around text-start mb-5">
                            <p className="text-xs text-gray-400">1,957 Students</p>
                            <p className="text-xs text-gray-400">01h 59m</p>
                        </div>
                        <h3 className="ml-10 mb-5 font-bold">Motion Graphics: Create a Nice <br/>
                            Typography Animation</h3>
                            <div className="flex justify-around">
                                <p>Rs.499</p>
                                <div><img src={icon} alt="icon"/></div>
                            </div>
                    </div>
                </div>
                <div className="h-96 w-90 rounded bg-white text-start shadow-2xl cursor-pointer cards">
                    <div className="h-56 w-80">
                        <img src={img2} alt="2"/>
                    </div>
                    <div>
                        <div className="flex justify-around text-start mb-5">
                            <p className="text-xs text-gray-400">9,575 Students</p>
                            <p className="text-xs text-gray-400">01h 59m</p>
                        </div>
                        <h3 className="ml-10 mb-5 font-bold">Advance PHP knowledge with JS to <br/>
                            make smart web</h3>
                            <div className="flex justify-around">
                                <p>Rs.499</p>
                                <div><img src={icon} alt="icon"/></div>
                            </div>
                    </div>
                </div>
                <div className="h-96 w-90 rounded bg-white text-start shadow-2xl cursor-pointer cards">
                    <div className="h-56 w-80">
                        <img src={img3} alt="3"/>
                    </div>
                    <div>
                        <div className="flex justify-around text-start mb-5">
                            <p className="text-xs text-gray-400">2957 Students</p>
                            <p className="text-xs text-gray-400">01h 59m</p>
                        </div>
                        <h3 className="ml-10 mb-5 font-bold">Education Software and PHP and JS <br/>
                            System Script</h3>
                            <div className="flex justify-around">
                                <p>Rs.499</p>
                                <div><img src={icon} alt="icon"/></div>
                            </div>
                    </div>
                </div>
                <div className="h-96 w-90 rounded bg-white text-start shadow-2xl cursor-pointer cards">
                    <div className="h-56 w-80">
                        <img src={img4} alt="4"/>
                    </div>
                    <div>
                        <div className="flex justify-around text-start mb-5">
                            <p className="text-xs text-gray-400">5,457 Students</p>
                            <p className="text-xs text-gray-400">01h 59m</p>
                        </div>
                        <h3 className="ml-10 mb-5 font-bold">The Complete Financial Analyst <br/>
                            Training & Investing</h3>
                            <div className="flex justify-around">
                                <p>Rs.499</p>
                                <div><img src={icon} alt="icon"/></div>
                            </div>
                    </div>
                </div>
                <div className="h-96 w-90 rounded bg-white text-start shadow-2xl cursor-pointer cards">
                    <div className="h-56 w-80">
                        <img src={img5} alt="5"/>
                    </div>
                    <div>
                        <div className="flex justify-around text-start mb-5">
                            <p className="text-xs text-gray-400">595 Students</p>
                            <p className="text-xs text-gray-400">01h 59m</p>
                        </div>
                        <h3 className="ml-10 mb-5 font-bold">Marketing 2023: Complete Guide To <br/>
                            Instagram Growth</h3>
                            <div className="flex justify-around">
                                <p>Rs.499</p>
                                <div><img src={icon} alt="icon"/></div>
                            </div>
                    </div>
                </div>
                <div className="h-96 w-90 rounded bg-white text-start shadow-2xl cursor-pointer cards">
                    <div className="h-56 w-80">
                        <img src={img6} alt="6"/>
                    </div>
                    <div>
                        <div className="flex justify-around text-start mb-5">
                            <p className="text-xs text-gray-400">458 Students</p>
                            <p className="text-xs text-gray-400">01h 59m</p>
                        </div>
                        <h3 className="ml-10 mb-5 font-bold">Learn 3D Modelling and Design <br/>
                            for Beginners</h3>
                            <div className="flex justify-around">
                                <p>Rs.499</p>
                                <div><img src={icon} alt="icon"/></div>
                            </div>
                    </div>
                </div>
            </div>
            <button className="feature-btn mt-20 h-11 w-64 bg-red-200 rounded text-white hover:shadow-lg shadow-fuchsia-500/50">Explore Courses</button>
        </div>
     </section>

    </div>
  )
}

export default Featured
