import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 max-container">
      <div className="flex flex-1 max-lg:flex-col gap-10 lg:justify-between w-full">
        <div className="flex flex-col mt-3">
          <img
            src={footerLogo}
            alt="footer logo"
            width={100}
            height={40}
          />

          <p className="text-gray-300 mt-6 max-w-sm font-palanquin">Get shoes ready for the new term at your nearest Nike store.Find Your perfect Size in store.Get Rewards</p>  

          <div className="mt-4 flex justify-start items-center gap-5 rounded-full">
            {socialMedia.map((icon) =>(
              <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={25}
                  height={25}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between max-sm:gap-10 gap-20 flex-wrap">
          {footerLinks.map((footer) => (
            <div>
              <h2 className="text-white text-lg mt-4 font-montserrat">{footer.title}</h2>
              <ul className="mt-3">
                {footer.links.map((linkname) => (
                  <li className="text-slate-gray hover:text-white font-palanquin leading-normal min-w-sm cursor-pointer">
                      <a>{linkname.name}</a>
                  </li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      </div> 

      <div className="mt-4 flex justify-between gap-2 max-container w-full">            
        <div className="flex justify-center items-center gap-2 max-sm:justify-start">
          <img
            src={copyrightSign}
            alt= "copyright Sign"
            width={15}
            height={15} 
            className="object-contain m-0"
          />
          <p className="text-slate-gray font-palanquin leading-normal text-sm">Copyright. All rights reserved.</p>
        </div>
        <a href="/" className="text-slate-gray font-palanquin leading-normal text-sm">Terms & conditions</a>
      </div>            

    </footer>
  )
}

export default Footer