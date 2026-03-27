
import { useEffect, useState } from "react";
import heroBg1 from '../assets/Images/aisan-temple.jpg'
import heroBg2 from '../assets/Images/kerala-tourism.jpg'
import heroBg3 from '../assets/Images/jonathan.jpg'
import heroBg4 from '../assets/Images/blog-4-scaled.jpg'
import heroBg5 from '../assets/Images/kazak2.jpg'
import heroBg6 from '../assets/Images/home-bnr-bg.jpg'
import heroBg7 from '../assets/Images/tomas-malik.jpg'
import { motion as Motion } from "framer-motion";
import fadeInUp from '../Animation/fadeInUp';
import fadeInDown from '../Animation/fadeInDown';
import './Hero.css'


export const Hero = () => {

  const backgrounds = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5, heroBg6, heroBg7];
  const [currentBg, setCurrentBg] = useState(0);


   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);
    // const WHATSAPP_NUMBER = import.meta.env.VITE_MOBILE_NUMBER;
   const WHATSAPP_NUMBER = "+60123488014";
    // console.log(WHATSAPP_NUMBER);
    return (
        <div className='home_hero section banner section-padding-xl relative dark-left-overlay banner-section section-bg section-bg-center-50 transition-all duration-600' id='hero'
             style={{
        backgroundImage: `url(${backgrounds[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
            >
            <div className='content_wrapper'>
                <Motion.div className="hero-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <h4 className="text-yellow-500 mb-30">
                    Where Journeys Become Stories</h4>
                    <h1 className='text-white'>
                    Curated Spiritual, Cultural & Slow Travel Experiences Across Asia</h1>
                    <p className='text-white'>
                    Buvan Travel is a Malaysia-based travel service provider specializing in meaningful journeys from sacred temple trails 
                    and cultural immersions to slow,soulful travel experiences designed for families, pilgrims, and conscious explorers. </p>
                </Motion.div>
                <Motion.div className="hero-btn mt-10" 
                variants={fadeInDown} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <button type="button" className="tertiary-button">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20Buvan%20I'm%20interested%20in%20spiritual%2C%20cultural%2C%20and%20leisure%20travel%20services.%20Could%20you%20please%20share%20more%20details?`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          WhatsApp Booking
                        </a>
                    </button>
                </Motion.div>
            </div>
        </div>
    )
}
