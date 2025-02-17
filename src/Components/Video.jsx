import banner from "../assets/Video/banner.png"
import img1 from "../assets/Video/Group.png"
import img2 from "../assets/Video/Rectangle.png"

function Video() {
  return (
    <div>
       {/* <!-- Video-Section --> */}
        <section>
            <div className="video-section container h-screen w-full mb-20">
                <div className="justify-items-center relative">
                    <div className="mt-20"><img src={img2} alt="video" height="718px" width="1200px"/></div>
                    <a href="#"><div className="video-icon"><img src={img1} alt="video-icon" height="207px" width="218px"/></div></a>
                    <div className="banner"><img src={banner} alt="banner"/></div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Video
