import { useState } from 'react'
import { motion as Motion, AnimatePresence } from "framer-motion";
import fadeUp from "../Animation/fadeInUp";
import fadeInUp from "../Animation/fadeInUp";

import India from '../assets/Flag/India.svg'
import Indonesia from '../assets/Flag/Indonesia.jpg'
import Malaysia from '../assets/Flag/Malaysia.svg'
import Singapore from '../assets/Flag/Singapore.svg'
import SouthKorea from '../assets/Flag/South_Korea.png'
import Thailand from '../assets/Flag/Thailand.svg'
import Vietnam from '../assets/Flag/Vietnam.jpg'

import { ChevronRight, ChevronDown, X, User, Calendar, Mail, Phone } from 'lucide-react'
import './StudyTour.css'


export const StudyTourSection = () => {
  const [SelectedStudyPlace, setSelectedStudyPlace] = useState(null);
  const [formData, setFormData] = useState({ name: '', month: '' });

  const WHATSAPP_NUMBER = "+60123488014";
  const OWNER_EMAIL = "hello@buvantravel.com";
  
    const handleScrollTo = (id) => {  
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    };

  const studyIn = [
    { id: 1, name: "INDIA", img: India },
    { id: 2, name: "INDONESIA", img: Indonesia },
    { id: 3, name: "MALAYSIA", img: Malaysia },
    { id: 4, name: "SINGAPORE", img: Singapore },
    { id: 5, name: "SOUTH KOREA", img: SouthKorea },
    { id: 6, name: "THAILAND", img: Thailand },
    { id: 7, name: "VIETNAM", img: Vietnam },
  ];

  const sendWhatsApp = () => {
    const text = `New Inquiry – Study Tour \n\nPackage: ${SelectedStudyPlace.name}\nName: ${formData.name}\nPlanned Study Travel Date: ${formData.month}\n\nI would like to discuss the package.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const sendEmail = () => {
    const subject = `New Inquiry – Study Tour: ${SelectedStudyPlace.name}`;
    const body = `Hello Buvan Travel,\n\nI am interested in ${SelectedStudyPlace.name} study tour package.\n\nName: ${formData.name}\nPlanned Study Travel Date: ${formData.month}`;
    window.location.href = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="content-wrapper mx-auto">

        {/* Section Header */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Educational & Experiential Study Tours
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our Study Tours are designed for schools, colleges, universities,
            and corporate institutions — combining structured learning with
            real-world exposure.
          </p>
        </Motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* What We Offer */}
          <div className='common-col'>
            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                What We Offer
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>• Industrial visits & corporate exposure</li>
                <li>• Cultural exchange programs</li>
                <li>• University & campus visits</li>
                <li>• Logistics, manufacturing & supply chain study tours</li>
                <li>• Educational sightseeing & guided learning</li>
              </ul>
            </Motion.div>
            {/* Ideal For */}
            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Ideal For
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="px-5 py-2 border rounded-full bg-yellow-500 text-white border-yellow">
                  Students & Academic Institutions
                </span>
                <span className="px-5 py-2 border rounded-full bg-yellow-500 text-white border-yellow">
                  Corporate Learning Programs
                </span>
                <span className="px-5 py-2 border rounded-full bg-yellow-500 text-white border-yellow">
                  Professional Exposure Trips
                </span>
              </div>
            </Motion.div>
</div>
            {/* Destinations */}
            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Destinations Covered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                {studyIn.map((stdPkg) => (
                  <Motion.span key={stdPkg.id} whileHover={{ y: -15 }}
                    className="group relative h-[130px] overflow-hidden shadow-xl cursor-pointer bg-white country-card"
                    style={{ borderRadius: '24px' }}
                    onClick={() => setSelectedStudyPlace(stdPkg)}
                    //Scroll Animation elements for destination cards >>
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  >
                    <img src={stdPkg.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={stdPkg.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent
hover:from-black hover:via-black/60 hover:to-black
transition-all duration-500 p-8 flex flex-col justify-end">
                      <div className='card-title'>
                        <h4 className="text-white text-xl font-bold text-center mb-0">{stdPkg.name}</h4>
                        <div className="flex items-center text-white text-xs font-bold uppercase tracking-widest text-center justify-center">
                          Request Info <ChevronRight size={14} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </Motion.span>
                ))}

              </div>
            </Motion.div>
           </div>


          {/* CTA */}
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <h3 className="text-lg text-gray-700 mb-6">
              Contact us to design a custom study tour itinerary.
            </h3>
            <button onClick={() => handleScrollTo("contact")} className="inline-flex items-center justify-center px-8 py-3 text-white rounded-lg hover:bg-gray-800 transition tertiary-button bg-yellow-500 text-white border-yellow">
              Contact Us
            </button>
          </Motion.div>

       
        {/* --- CONTACT MODAL --- */}
        <AnimatePresence>
          {SelectedStudyPlace && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedStudyPlace(null)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
              <Motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="relative bg-white w-full max-w-md p-10 shadow-2xl z-[110]" style={{ borderRadius: '30px' }}>
                <button onClick={() => setSelectedStudyPlace(null)} className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors cursor-pointer"><X /></button>
                <h3 className="text-2xl font-bold mb-2">Request Study Tour</h3>
                <p className="text-sm text-gray-500 mb-8">Package: <span className="text-orange-500 font-bold">{SelectedStudyPlace.name}</span></p>

                <div className="space-y-4">
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-4 text-gray-400" />
                    <input type="text" placeholder="Your Name" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>

                  <div className="relative">
                    <Calendar size={18} className="absolute left-4 top-4 text-gray-400 z-10" />
                    <input
                      type="date"
                      // This is the key: prevents selecting any date before today
                      min={today}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
                      value={formData.month} // renamed to match your state, though 'date' might be clearer
                      onChange={(e) => {
                        const selected = e.target.value;
                        // Secondary JS validation check
                        if (selected >= today) {
                          setFormData({ ...formData, month: selected });
                        } else {
                          alert("Please select a future date.");
                        }
                      }}
                    />
                    <span className="absolute right-4 top-4 text-[10px] text-gray-400 pointer-events-none uppercase font-bold calendar-text">
                      <ChevronDown />
                    </span>
                  </div>

                  {/* 3. Updated Button Validation */}
                  <div className="pt-6 flex flex-col gap-3">
                    <button
                      onClick={sendWhatsApp}
                      // Button only enables if name exists AND date is today or later
                      disabled={!formData.name || !formData.month || formData.month < today}
                      className="cursor-pointer flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                      style={{ borderRadius: '35px' }}
                    >
                      <Phone size={20} /> Send via WhatsApp
                    </button>

                    <button
                      onClick={sendEmail}
                      disabled={!formData.name || !formData.month || formData.month < today}
                      className="cursor-pointer flex items-center justify-center gap-3 bg-slate-900 text-white py-4 font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                      style={{ borderRadius: '35px' }}
                    >
                      <Mail size={20} /> Send via Email
                    </button>
                  </div>
                </div>
              </Motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

