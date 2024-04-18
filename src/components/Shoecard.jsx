const Shoecard = ({imageUrl, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = () => {
        if(imageUrl.bigShoe !== bigShoeImg)
        changeBigShoeImage(imageUrl.bigShoe);
    };

  return (
    <div onClick={handleClick} className={`border-2 rounded-xl 
            ${bigShoeImg === imageUrl.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}>

        <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img
                src={imageUrl.thumbnail}
                alt="shoe card"
                width={127}
                height={103.34}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default Shoecard