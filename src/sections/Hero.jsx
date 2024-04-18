import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import {statistics, shoes} from "../constants"
import  {bigShoe1}  from "../assets/images"
import {useState} from 'react'
import Shoecard from "../components/Shoecard"


const Hero = () => {

  const[bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section 
        id='home' 
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10"
    >
      {/* left section */}
      <div className="relative xl:w-2/5 flex flex-col justify-center w-full items-start max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br/>
          <span className="text-coral-red inline-block mt-3">
            Nike
          </span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label ="Shop Now"  iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div key={item.label} >
                <p className="text-4xl font-palanquin font-bold">{item.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
             ))}
        </div>
      </div>  

      {/* right section */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
            src={bigShoeImg}
            alt="Big shoe Image"
            width={610}
            height={502}
            className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
              <div key={shoe.thumbnail}>
                  <Shoecard
                    imageUrl={shoe}
                    changeBigShoeImage = {(shoe) => setBigShoeImg(shoe)}
                    bigShoeImg = {bigShoeImg}
                  />
              </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero