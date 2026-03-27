import { GraduationCap } from 'lucide-react';
import { motion as Motion } from "framer-motion";
import fadeInUp from '../Animation/fadeInUp';
import StudyBBG from "../assets/Images/StudyMalay.jpeg"
// import { useNavigate } from "react-router-dom";


export function StudyTourHero() {
  // const navigate = useNavigate();

  
  return (
    <section className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden" id='studyhero'>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={StudyBBG}
          alt="Study tour background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-yellow-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl  md:mt-15 mt-15">
          {/* Badge */}
          <Motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/30 rounded-full px-6 py-2 mb-6">
            <GraduationCap className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">Study Tour Programs</span>
          </Motion.div>

          <Motion.h1 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Educational & Experiential <br />
            <span className="text-yellow-500">Study Tours</span>
          </Motion.h1>

          <Motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Our Study Tours are designed for schools, colleges, universities, and corporate
            institutions — combining learning with real-world exposure.
          </Motion.p>

          <Motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 md:mt-15 ">
            <button type='button' className="tertiary-button" >
              <a href='#stdDestination'>Plan Study Tour</a>
            </button>
          </Motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      {/* <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full filter blur-3xl"></div> */}
    </section>
  );
}
