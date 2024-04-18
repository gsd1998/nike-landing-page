import { shoe8 } from "../assets/images";
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="justify-between items-center max-container w-full flex max-lg:flex-col gap-10"> 

        <div className="flex flex-col flex-1">
          <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
          We provide you 
          <span className="text-coral-red"> super </span>
          <span className="text-coral-red"> quality </span> shoes
          </h2>

          <p className="info-text lg:max-w-lg mt-5">Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <p className="info-text lg:max-w-lg mt-6 "> Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-10">
            <Button label="View details"/>
          </div>
          
        </div>

        <div className="flex flex-1 justify-center items-center">
          <img
            src={shoe8}
            alt="super quality product"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>

    </section>
  )
}

export default SuperQuality