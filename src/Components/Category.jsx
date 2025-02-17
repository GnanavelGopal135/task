import img1 from "../assets/Categories/1.png"
import img2 from "../assets/Categories/2.png"
import img3 from "../assets/Categories/3.png"
import img4 from "../assets/Categories/4.png"
import img5 from "../assets/Categories/5.png"
import img6 from "../assets/Categories/6.png"

function Category() {
  return (
    <div>
           {/* <!-- Categories --> */}
      <section>
        <div className="categories text-center w-full content-center">
            <h1 className="text-5xl font-bold mb-10">Top <span className="text-blue-700">Categories</span></h1>
            <p className="text-sm font-normal mb-10">100+ unique online course list designs</p>
            <div className="grid grid-cols-6 place-items-center">
            <div className="bg-white h-64 w-40 justify-items-center self-center rounded cursor-pointer">
                <div className="mt-10"><img className="h-16 w-16" src={img1} alt="1"/></div>
                <h3 className="mt-2 font-semibold text-lg text-cyan-950">Digtal <br/>
                    Marketing</h3>
                    <p className="mt-2 font-normal text-sm text-cyan-950">25 Courses</p>
            </div>
            <div className="bg-white h-64 w-40 justify-items-center self-center rounded cursor-pointer">
                <div className="mt-10"><img className="h-16 w-16" src={img2} alt="2"/></div>
                <h3 className="mt-2 font-semibold text-lg text-cyan-950">Web <br/>
                    Development</h3>
                    <p className="mt-2 font-normal text-sm text-cyan-950">16 Courses</p>
            </div>
            <div className="bg-white h-64 w-40 justify-items-center self-center rounded cursor-pointer">
                <div className="mt-10"><img className="h-16 w-16" src={img3} alt="3"/></div>
                <h3 className="mt-2 font-semibold text-lg text-cyan-950">Art & <br/>
                    Humanities</h3>
                    <p className="mt-2 font-normal text-sm text-cyan-950">76 Courses</p>
            </div>
            <div className="bg-white h-64 w-40 justify-items-center self-center rounded cursor-pointer">
                <div className="mt-10"><img className="h-16 w-16" src={img4} alt="4"/></div>
                <h3 className="mt-2 font-semibold text-lg text-cyan-950">Personal <br/>
                    Development</h3>
                    <p className="mt-2 font-normal text-sm text-cyan-950">22 Courses</p>
            </div>
            <div className="bg-white h-64 w-40 justify-items-center self-center rounded cursor-pointer">
                <div className="mt-10"><img className="h-16 w-16" src={img5} alt="5"/></div>
                <h3 className="mt-2 font-semibold text-lg text-cyan-950">IT and <br/>
                    Software</h3>
                    <p className="mt-2 font-normal text-sm text-cyan-950">110 Courses</p>
            </div>
            <div className="bg-white h-64 w-40 justify-items-center self-center rounded cursor-pointer">
                <div className="mt-10"><img className="h-16 w-16" src={img6} alt="6"/></div>
                <h3 className="mt-2 font-semibold text-lg text-cyan-950">Graphic <br/>
                    Design</h3>
                    <p className="mt-2 font-normal text-sm text-cyan-950">85 Courses</p>
            </div>
        </div>
        </div>
      </section>

    </div>
  )
}

export default Category
