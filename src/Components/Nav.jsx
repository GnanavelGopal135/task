import logo from "../assets/navigation/Askmeidentity_2.png"
import icon1 from "../assets/navigation/Icon.png"
import icon2 from "../assets/navigation/Icon (1).png"
import icon3 from "../assets/navigation/Icon (2).png"


function Nav() {
  return (
    <div>
      {/* <!-- NavBar --> */}
      <nav>
        <div className="grid  grid-cols-5 items-center top-0 sticky z-10  h-28 w-full gap-4 nav-bar">
          <div className="col-span-2">
            <img
              className="h-28 w-48"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="space-x-6 justify-items-center">
            <a href="#" className="md:text-sm">
              Home
            </a>
            <a href="#">Courses</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex space-x-6  justify-center icons ">
            <div className="h-6 w-6">
              <img src={icon1} alt="icon" />
            </div>
            <div className="h-6 w-6">
              <img src={icon2} alt="icon" />
            </div>
            <div className="h-6 w-6">
              <img src={icon3} alt="icon" />
            </div>
          </div>
          <div className="space-x-6  justify-items-center">
            <button className="border-b border-y-cyan-950 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded">
              Login
            </button>
            <button className="border-b border-y-cyan-950 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded">
              Signup
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
