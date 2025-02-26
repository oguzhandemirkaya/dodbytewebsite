import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-orange-50 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-orange-500" /></div>,
        title: "Website Design",
        description:
          "We craft visually stunning and fully responsive websites that ensure a seamless experience on all devices. Our strategic design focuses on converting visitors into customers by emphasizing user engagement and ease of navigation.",
      
      },
      {
        icon : <div className="bg-orange-50 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-orange-500" /></div>,
        title: "E-commerce Store",
        description:
          "From boutique setups to extensive online marketplaces, we provide bespoke e-commerce solutions designed to scale your business. Our expert team integrates cutting-edge technology to create efficient, secure, and scalable online stores.",
       
      },
      {
        icon : <div className="bg-orange-50 p-4 rounded-full"><PiLock className="w-8 h-8 text-orange-500" /></div>,
        title: "Authentication",
        description:
          "We implement robust authentication systems to secure your digital platforms. Utilizing the latest technology, we ensure that your data remains protected, offering both simplicity in user experience and strength in security.",
      
      },
      {
        icon : <div className="bg-orange-50 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-orange-500" /></div>,
        title: "Social Media",
        description:
          "Our comprehensive social media services are designed to enhance your brand's online presence. We manage your social media platforms, craft engaging content, and develop targeted ad campaigns to connect with your audience and expand your reach.",
      
      },
      {
        icon : <div className="bg-orange-50 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-orange-500" /></div>,
        title: "App Development",
        description:
          "We specialize in creating custom mobile applications for iOS and Android that are both functional and aesthetically pleasing. Focused on user experience, our apps are optimized for performance and designed to meet the specific needs of your business.",
      
      },
      {
        icon : <div className="bg-orange-50 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-orange-500" /></div>,
        title: "Support",
        description:
          "We provide comprehensive support to all our clients, ensuring that you have assistance whenever you need it. Our dedicated team is always ready to address your queries and resolve any issues swiftly and efficiently.",
     
      },
];