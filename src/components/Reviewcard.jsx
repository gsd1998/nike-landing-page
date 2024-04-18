import { star } from "../assets/icons"


const Reviewcard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex-col flex justify-center items-center">
        <img
            src={imgURL}
            alt="customer card"
            width={120}
            height={120}
            className="object-cover rounded-full" 
        />
       <p className="info-text max-w-sm text-center mt-6">{feedback}</p>
       <div className="mt-3 flex justify-center items-center gap-2.5">
            <img
                src={star}
                alt="star"
                width={24}
                height={24}
                className="object-contain m-0"
            />
            <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
       </div>
       <h3 className="mt-1 text-3xl font-bold font-palanquin text-center">{customerName}</h3>

    </div>
  )
}

export default Reviewcard