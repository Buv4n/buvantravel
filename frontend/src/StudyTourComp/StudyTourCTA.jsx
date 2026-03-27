import { Calendar, FileText } from 'lucide-react';
import { motion as Motion } from "framer-motion";
import fadeInUp from '../Animation/fadeInUp';
import { useNavigate, useLocation } from "react-router-dom";


export function StudyTourCTA() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="content-wrapper px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <Motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}  className="bg-[#3d3b9c] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}  className="text-lg sm:text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Design Your Custom Study Tour?
            </Motion.h2>
            <Motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}  className="text-lg md:text-xl text-white mb-12 max-w-6xl mx-auto">
              Contact us to create a tailored study tour itinerary that meets your educational 
              objectives and budget requirements.
            </Motion.p>
            <Motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}  className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button size="lg" className="cursor-pointer bg-white text-black hover:bg-gray-100 text-lg px-8 pt-[15px] pb-[15px] text-lg rounded-xl
" onClick={goToContact}>
                <Calendar className="mr-2 w-5 h-5 inline" />
                Schedule Consultation
              </button>
              {/* <button 
                size="lg" 
                className="cursor-pointer border-2 border-white text-white hover:bg-white hover:text-black  text-lg px-8 pt-[15px] pb-[15px] text-lg rounded-xl">
                <FileText className="mr-2 w-5 h-5 inline" />
                Download Brochure
              </button> */}
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
