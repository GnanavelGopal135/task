import icon1 from "../assets/Learn-Course/Icon.png"
import icon2 from "../assets/Learn-Course/icon1.png"
import icon3 from "../assets/Learn-Course/icon2.png"

function LearnCourse() {
  return (
    <div>
      {/* <!--Learn Courses  --> */}
     <section>
        <div className="learn-courses text-center content-center">
            <h1 className="text-5xl font-bold py-5 text-white">Why <span className="text-blue-700 ">learn</span> with our courses?</h1>
            <p className="text-lg font-thin text-white mb-10">We are providing the best courses and <br/> top classNamees.And extradinery placement training.....</p>
            <div className="learn-cards w-full grid grid-cols-3 gap-4 place-items-center mt-20">
                <div className="flex flex-col h-80 w-96 text-center items-center ">
                    <div className="mb-5"><img src={icon1} alt="icon"/></div>
                    <h3 className="mb-5 font-bold text-xl text-white">01.Learn</h3>
                    <p className="text-sm text-white font-thin">Learn continually. There is always <br/>
                        “one more thing”to learn.</p>
                </div>
                <div className="flex flex-col h-80 w-96 text-center items-center border-l-2 border-r-2 border-slate-100 border-dashed">
                    <div className="mb-5"><img src={icon2} alt="icon"/></div>
                    <h3 className="mb-5 font-bold text-xl text-white">02. Graduate</h3>
                    <p className="text-sm text-white font-thin">Be bold,be courageous,<br/>
                        be your best.</p>
                </div>
                <div className="flex flex-col h-80 w-96 text-center items-center">
                    <div className="mb-5 font-bold text-xl text-white"><img src={icon3} alt="icon"/></div>
                    <h3 className="mb-5 font-bold text-xl text-white">03. Work</h3>
                    <p className="text-sm text-white font-thin">Great companies are built in <br/>
                        the office,with hard work put
                        in by team.</p>
                </div>
            </div>
        </div>
     </section>


    </div>
  )
}

export default LearnCourse


