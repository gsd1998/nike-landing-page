
const Servicecard = ({imgURL, label, subtext}) => {
  return (
    <div className="w-full shadow-3xl py-16 px-10 rounded-[20px] flex-1 sm:w-[350px] sm:min-w-[350px]">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img
                src={imgURL}
                alt="service card"
                width={24}
                height={24}
            />
        </div>
        <h3 className="font-palanquin mt-5 text-3xl leading-normal font-bold">{label}</h3>
        <p className="font-montserrat mt-3 text-lg break-words leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default Servicecard