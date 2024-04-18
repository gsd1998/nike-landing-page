import {services} from "../constants"
import Servicecard from "../components/Servicecard"

const Services = () => {
  return (
    <section className="flex flex-wrap justify-center gap-9 max-container">
      {services.map((service) => (
          <Servicecard  
            key={service.label} 
            {...service}
          />
        ))}
    </section>
  )
}

export default Services