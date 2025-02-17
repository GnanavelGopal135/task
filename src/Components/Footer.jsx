import logo from "../assets/navigation/Askmeidentity_2.png" 
import img1 from "../assets/Footer/Instagram (2).png"
import img2 from "../assets/Footer/Linkedin.png"
import img3 from "../assets/Footer/Twitter.png"
import img4 from "../assets/Footer/WhatsApp.png"
import img5 from "../assets/Footer/YouTube.png"

function Footer() {
  return (
    <div>
       {/* <!-- Footer --> */}
          <footer className="footer">
            <div className=" w-full grid grid-cols-5 gap-4">
                <div className=" p-2 items-center ml-10 mt-10 h-72">
                    <h4 className="font-bold text-xl p-2 space-x-2 ">Connect</h4>
                    <div><img className="h-20 " src={logo} alt="logo"/></div>
                    <address className="text-sm">Sri Jagannath Nivas,8-1-164/345/A/1, <br/>
                        Pragati Colony, Mailardevpally, Nawab <br/>
                        Saheb Kunta, Hyd, 500005</address>
                </div>
                <div className="h-72 p-2 items-center ml-10 mt-10">
                    <h4 className="font-bold text-black text-2xl py-2">classNamees</h4>
                    <ul>
                        <li className="font-semibold text-sm leading-6"><a href="#">classNameroom courses</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Virtual classNameroom courses</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">E-learning courses</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Video Courses</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Offline Courses</a></li>
                    </ul>
                </div>
                <div className="h-72 p-2 items-center ml-10 mt-10">
                    <h4 className="font-bold text-black text-2xl py-2">Community</h4>
                    <ul>
                        <li className="font-semibold text-sm leading-6"><a href="#">Learners</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Parteners</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Developers</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Transactions</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="h-72 p-2 items-center ml-10 mt-10">
                    <h4 className="font-bold text-black text-2xl py-2">Quick links</h4>
                    <ul>
                        <li className="font-semibold text-sm leading-6"><a href="#">Home</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Professional Education</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Courses</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Admissions</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Testimonial</a></li>
                        <li className="font-semibold text-sm leading-6"><a href="#">Programs</a></li>
                    </ul>
                </div>
                <div className="h-72 p-2 items-center ml-10 mt-10">
                    <h4 className="font-bold text-black text-2xl py-2">More</h4>
                    <ul>
                        <li className="font-semibold text-sm text-gray-700 leading-6"><a href="#">Press</a></li>
                        <li className="font-semibold text-sm text-gray-700 leading-6"><a href="#">Investors</a></li>
                        <li className="font-semibold text-sm text-gray-700 leading-6"><a href="#">Terms</a></li>
                        <li className="font-semibold text-sm text-gray-700 leading-6"><a href="#">Privacy</a></li>
                        <li className="font-semibold text-sm text-gray-700 leading-6"><a href="#">Help</a></li>
                        <li className="font-semibold text-sm text-gray-700 leading-6"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center mt-10 gap-4">
                <div className="p-2 bg-white rounded-full"><a href="https://www.instagram.com"><img className="h-10 w-10 m-1" src={img1} alt="insta"/></a></div>
                <div className="p-2 bg-white rounded-full"><a href="https://web.whatsapp.com"><img className="h-10 w-10" src={img4} alt="whatsapp"/></a></div>
                <div className="p-2 bg-white rounded-full"><a href="https://x.com/i/flow/login"><img className="h-10 w-10" src={img3} alt="twitter"/></a></div>
                <div className="p-2 bg-white rounded-full"><a href="https://www.linkedin.com/login/in"><img className="h-10 w-10" src={img2} alt="linkedin"/></a></div>
                <div className="p-2 bg-white rounded-full"><a href="https://www.youtube.com/"><img className="h-10 w-10" src={img5} alt="youtube"/></a></div>
            </div>
            <div className="text-white font-thin text-xs text-center mt-6">Copyright @ 2023 askmeidentity. All Rights Reserved</div>
          </footer>

    </div>
  )
}

export default Footer
