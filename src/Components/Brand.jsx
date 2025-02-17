import brand1 from "../assets/Brandsection/1&3.png"
import brand2 from "../assets/Brandsection/2&6.png"
import brand3 from "../assets/Brandsection/1&3.png"
import brand4 from "../assets/Brandsection/4.png"
import brand5 from "../assets/Brandsection/5.png"
import brand6 from "../assets/Brandsection/2&6.png"

function Brand() {
  return (
    <div>
      {/* <!-- Brand-Section --> */}
    <section>
        <div  className="flex justify-evenly items-center h-42  w-full bg-red-200 brands">
            <div><img src={brand1}/></div>
            <div><img src={brand2}/></div>
            <div><img src={brand3}/></div>
            <div><img src={brand4}/></div>
            <div><img src={brand5}/></div>
            <div><img src={brand6}/></div>
        </div>
    </section>

    </div>
  )
}

export default Brand
