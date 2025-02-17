import pic from "../assets/Testimonial/logo.png"
import star from "../assets/Testimonial/star.png"
// import eclipse from "../assets/Testimonial/Ellipse.png"

function Testimonial() {
  return (
    <div>
       {/* <!-- Testimonials --> */}
         <section>
            <div className="testimonial container h-screen w-full text-center mt-20">
                <h1 className="font-bold text-5xl text-blue-700 mb-20">Testimonials</h1>
                <p className="font-normal text-sm text-gray-500 mt-10">What our student say about us</p>
                <div className="test-cards grid grid-cols-2 grid-rows-2 justify-items-center mt-36 relative">
                    <div className="test-card1 h-48 w- bg-white ml-10">
                        <div className="img1"><img src={pic} alt="reviewer"  height="50px" width="38"/></div>
                        <p className="font-thin text-sm mt-10 ml-4 text-gray-700">Such an amazing traniner and easily understand the entire <br/>
                            syllabus, and the guidence will be super and good to the way <br/> of explaning.</p>
                            <div className="mt-4 ml-4"><img src={star} alt="stars"/></div>
                    </div>
                    <div className="test-card2 h-48 w-1/3 bg-white relative">
                        <div className="img2"><img src={pic} alt="reviewer"  height="50px" width="38"/></div>
                        <p className="font-thin text-sm mt-10 ml-4 text-gray-700">Such an amazing traniner and easily understand the entire <br/>
                            syllabus, and the guidence will be super and good to the way<br/> of explaning.</p>
                            <div className="mt-4 ml-4 absolute left-16"><img src={star} alt="stars"/></div>
                    </div>
                    <div className="test-card3 h-48 w-1/3 bg-white mr-10">
                        <div className="img3"><img src={pic} alt="reviewer"  height="50px" width="38"/></div>
                        <p className="font-thin text-sm mt-10 ml-4 text-gray-700">Such an amazing traniner and easily understand the entire <br/>
                            syllabus, and the guidence will be super and good to the way<br/> of explaning.</p>
                            <div className="mt-4 ml-4 absolute left-16"><img src={star} alt="stars"/></div>
                    </div>
                </div>
            </div>
         </section>

    </div>
  )
}

export default Testimonial
