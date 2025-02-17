import line from "../assets/Hero-section/Group 1000014970.png"
import heroineImg from "../assets/Hero-section/heroine.png"
import icon from "../assets/Hero-section/Icon.png"

function Heroine() {
  return (
    <>
      {/* <!-- Heroine Section --> */}
   <section className=" heroine-section w-full bg-red-400">
        <div className="flex">
            <div className="w-1/2 heroine-content1 content-center ">
                <p className="uppercase text-base font-normal text-white ml-10 mb-10">Successful coaches are visionaries</p>
                <h1 className="font-bold text-7xl text-white ml-10 mb-10">Good <span className="text-blue-700">coaching</span> is <br/> good teaching & <br/> nothing else.
                 </h1>
                <div className="flex gap-4 ml-10 mt-20 text-white">
                    <a className="px-2 py-1 h-10 w-36 border-solid border-2 border-white rounded text-center" href="#">View Courses</a>
                    <a className="px-2 py-1 h-10 w-44" href="#">Get Free Consultation</a>
                </div>
                <div className="mt-20 ml-10 relative btn-info">
                    <input className="placeholder:text-gray-500 placeholder:ml-2 placeholder:mt-2 px-4 py-2 border border-gray-300 rounded h-11 w-4/6 " type="text" placeholder="What do you want to learn today?"/>
                    <button className="h-8 w-32 bg-red-400 rounded text-white hero-btn"><img className="h-4 w-4 absolute top-2 left-4 search" src={icon} alt="icon"/>Search</button>
                </div>
            </div>
            <div className="relative w-1/2 flex hero-content2">
                <div className="flex gap-4 mt-20">
                    <div><img className="line" src={line} alt="line"/></div>
                    <div className="h-56 w-64">
                        <h3 className="text-white text-base font-bold">Shyam</h3>
                        <p className="text-white text-base">In a coaching role, you ask the <br/> questions and rely more on your <br/>
                            staff, who become the experts, to <br/> provide the information.</p>
                         <p className="text-blue-700 mt-2">4.9</p>
                    </div>
                </div>
                    <div className="ellipse">
                        <div className="heroine">
                            <img src={heroineImg} alt="heroine" height="450px" width="350px"/>
                        </div>
                    </div>
                    
            </div>
        </div>
   </section>


    </>
  )
}

export default Heroine
