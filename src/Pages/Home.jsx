import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from '../HeroComp/Hero'
import { Features } from '../FeaturesComp/Features'
import { Destinations } from '../DestinationsComp/Destinations'
import { ContactForm } from '../ContactComp/ContactForm'
import { SpecialtySupport } from '../SpecialityComp/Speciality'
import { AboutUs } from '../AboutUsComp/AboutUs'
import { VideoHero } from '../HeroComp/VideoHero'
import ReviewSlider from "../ContactComp/ReviewSlider";
import { SEO } from "../SEO";


export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const scrollToId = location.state.scrollTo;

    const scroll = () => {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState({}, document.title); // clear state
      }
    };

    // retry until element exists (fixes async render issues)
    let attempts = 0;
    const interval = setInterval(() => {
      if (document.getElementById(scrollToId) || attempts > 10) {
        scroll();
        clearInterval(interval);
      }
      attempts++;
    }, 50);

    return () => clearInterval(interval);
  }, [location]);


  return (
    <>
      <SEO title="Home | Buvan Travel Malaysia" description="Buvan Travel is a Malaysia-based travel 
      company specializing in South India tours for Malaysian and Singaporean travelers. Book unforgettable experiences today." />
      <Hero />
      <Features />
      <Destinations />
      <VideoHero />
      <SpecialtySupport />
      <AboutUs id="aboutus" />
      <ContactForm id="contact" />
      <ReviewSlider />
    </>
  )
}
