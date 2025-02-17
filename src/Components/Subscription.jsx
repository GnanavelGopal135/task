import img1 from "../assets/Subscribe/1.png"
import img2 from "../assets/Subscribe/2.png"
import img3 from "../assets/Subscribe/3.png"
import img4 from "../assets/Subscribe/4.png"
import img5 from "../assets/Subscribe/5.png"
import img6 from "../assets/Subscribe/6.png"
import img7 from "../assets/Subscribe/Polygon7.png"
import img8 from "../assets/Subscribe/Polygon8.png"

function Subscription() {
  return (
    <div>
      {/* <!-- Subscription --> */}
       <section>
        <div className="container h-screen w-full justify-items-center content-center">
            <div className="subscription text-center content-center rounded-2xl relative">
                <h1 className="text-5xl font-bold text-white mt-10">Subscribe For Get Update <br/>
                    Every New Courses</h1>
                    <p className="mt-6 text-white text-sm font-thin">20k+ students daily learn with Eduvi. Subscribe for new courses.</p>
                    <div className="mt-6 relative">
                        <input className="placeholder:text-gray-500 placeholder:ml-2 placeholder:mt-2 px-4 py-2 border border-gray-300 rounded h-12 w-96" type="email" placeholder="enter your email"/>
                        <button className="subscribe-btn w-32 px-2 py-3 bg-blue-700 text-white rounded-r hover:bg-blue-600 focus:outline-none">
                            Subscribe
                          </button>
                    </div>
                    <div className="absolute top-9 left-9"><img className="h-10 w-10" src={img1} alt="1"/></div>
                    <div className="absolute top-36 left-36"><img className="h-10 w-10" src={img2} alt="2"/></div>
                    <div className="absolute bottom-12 left-16 "><img className="h-10 w-10" src={img3} alt="3"/></div>
                    <div className="sub-4"><img className="h-10 w-10" src={img4} alt="4"/></div>
                    <div className="sub-5"><img className="h-10 w-10" src={img5} alt="5"/></div>
                    <div className="sub-6"><img className="h-10 w-10" src={img6} alt="6"/></div>
                    <div className="polygon1"><img className=" h-20 w-20" src={img7} alt="polygon"/></div>
                    <div className="polygon2"><img className="h-20 w-20" src={img8} alt="polygon"/></div>
            </div>
        </div>
       </section>


    </div>
  )
}

export default Subscription
