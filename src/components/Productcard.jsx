import { star } from '../assets/icons'

const Productcard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>

        <img
            src={imgURL}
            alt={name}
            className="w-[282px] h-[282px] xl:hover:hover:rounded-3xl xl:hover:ring-4 hover:-translate-y-4 transition-all"
        />
        <div className='flex mt-8 justify-start gap-2.5'>
            <img
                src={star}
                alt="star logo"
                width={24}
                height={24}
            />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>

        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className ='mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal'>{price}</p>     

    </div>
  )
}

export default Productcard