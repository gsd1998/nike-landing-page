import Productcard from "../components/Productcard"
import { products } from "../constants"

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">

      <div className="flex flex-col justify-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
        Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="mt-2 text-slate-gray font-montserrat lg:max-w-lg">Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-4">
        {products.map((product) =>(
            <Productcard
              key={product.name}
              {...product} 
            /> 
        ))}
      </div>
    </section>
  )
}

export default PopularProduct