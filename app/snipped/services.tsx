'use client'

import { CardHoverEffectDemo } from "./card-hover-effect-snippet";

const Services = () => {
    return ( <div className="max-w-5xl mx-auto py-20">
   
        <div className="text-4xl md:text-7xl text-center text-orange-500" style={{ color: '#FF6220', paddingTop:'40px' }}>
          Streamline your business with our services
        </div>
        <p className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"style={{ paddingTop: '40px' }}>
          From website design to social media management, We offer a wide range of services to help you grow your business. 
        </p>

        <CardHoverEffectDemo />

    </div> 
    
    );
}
 
export default Services;