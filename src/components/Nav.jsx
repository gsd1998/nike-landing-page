import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { arrowRight } from "../assets/icons"

/*max-lg:hidden Till large it will be hidden after large it will show up*/
const Nav = () => {

const[verticalNav ,setVerticalNav] = useState(false)

const handleClick = () => {
  setVerticalNav(!verticalNav)
}

  return (
    <header className={`${!verticalNav ? "padding-x py-8" : "pl-8"} absolute z-10 w-full`}>
      <nav className={`flex ${!verticalNav ? "justify-between items-center" : "justify-between"} max-container`}>

        <a href="/">
            <img
              alt="logo"
              src={headerLogo}
              width={129}
              height={29}
              className={` ${!verticalNav ? "m-2 w-[129px] h-[29px]" : "mt-10 ml-2" } `}
            />     
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"> 
          {
          navLinks.map((item) => (
              <li key={item.label}>
                    <a
                       href={item.href}
                       className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                    >
                    {item.label}  
                    </a>
              </li>
          ))}
        </ul>

      {        
        !verticalNav 
        ? 
        <div className="hidden max-lg:block ml-4 border border-4 rounded-full border-coral-red mr-8 -mt-4" onClick={handleClick}>
          <img src={arrowRight} alt="hamburge icon" width={22} height={22} className="rotate-90 cursor-pointer"/>
        </div>
        :
        <div className="hidden max-lg:block ml-4 flex bg-coral-red rounded-b-3xl opacity-90 shadow-3xl">
          
          <div className="flex justify-center items-center pt-8"  onClick={handleClick}>
            <img
              alt="logo"
              src={arrowRight}
              width={25}
              height={25}
              className="cursor-pointer -rotate-90"
            />     
          </div>

          <ul className="flex-1 flex-col justify-center gap-20 pb-10">
          {
          navLinks.map((item) => (
              <li className="text-center pt-4" key={item.label}>
                    <a
                       href={item.href}
                       className="font-montserrat text-sm text-white px-10 hover:opacity-50 "
                    >
                    {item.label}  
                    </a>
              </li>
          ))}
        </ul>
        </div>   
      } 




      </nav>
    </header>

    
  )
}

export default Nav