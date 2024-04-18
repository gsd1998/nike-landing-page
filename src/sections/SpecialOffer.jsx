import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"


const SpecialOffer = () => {
  return (
    <section className="flex max-xl:flex-col-reverse justify-center items-center gap-10  max-container">

      <div className="flex-1">
        <img
          src={offer}
          alt="special offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
          <span className="text-coral-red"> special </span> offer
        </h2>

        <p className="info-text lg:max-w-lg mt-5">Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.</p>
        <p className="info-text lg:max-w-lg mt-6">Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us is
            nothing short of exceptional.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white"  textColor="text-coral-red" borderColor="border-coral-red" />
        </div>
      </div>
          
    </section>
  )
}

export default SpecialOffer