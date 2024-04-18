import {reviews} from "../constants"
import Reviewcard from "../components/Reviewcard"

const CustomerReview = () => {
  return (
    <section className="max-container">

      <div className="flex flex-col justify-center items-center">
        <h3 className="font-palanquin font-bold text-4xl ">What Our
          <span className="text-coral-red"> Customers</span> Say?
        </h3> 
        <p className="info-text m-auto mt-4 max-w-lg md:text-center">Here genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>

      <div className="mt-24 flex max-lg:flex-col flex-1 justify-evenly items-center gap-14">
        {reviews.map((review) =>(
            <Reviewcard 
            key={review.customerName}
            {...review}
            />
        ))}
      </div>

    </section>
  )
}

export default CustomerReview