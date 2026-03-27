import  { useState } from 'react'

import { Calendar, User, ChevronRight, Mail, X, Phone, ChevronDown  } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import fadeInUp from '../Animation/fadeInUp';
import { motion as Motion } from 'framer-motion';

import Kazakstan from '../assets/Images/kazak2.jpg'
import Bali from '../assets/Images/bali.jpeg'
import SriLanka from '../assets/Images/srilanka.jpeg'
import SouthKorea from '../assets/Images/south-korea.jpeg'
import Thailand from '../assets/Images/thailand.jpg'
import SouthIndia from '../assets/Images/south-india.jpeg'
import Giza from '../assets/Images/giza.jpg'
import Nepal from '../assets/Images/Nepal.jpg'
import './destinations.css'


export const Destinations = () => {
const [selectedPackage, setSelectedPackage] = useState(null);
const [formData, setFormData] = useState({ name: '', month: '' });

    const WHATSAPP_NUMBER = "+60123488014";
    const OWNER_EMAIL = "hello@buvantravel.com";


    const packages = [
        { id: 1, name: "South India Spiritual", desc: "Panchabootham & Isha Tour 2026", img: SouthIndia },
        { id: 2, name: "Sri Lanka Cultural", desc: "Comprehensive 6-day itineraries covering Kandy, Nuwara Eliya, Ella, and Yala", img: SriLanka },
        { id: 3, name: "South Korea", desc: "Tours covering Seoul, Jeju, and Busan, including winter ski experiences.", img: SouthKorea },
        { id: 4, name: "Bali", desc: "Cultural and nature-focused slow travel escapes", img: Bali },
        { id: 5, name: "Kazakhstan", desc: "Custom nature and adventure trips to Almaty", img: Kazakstan },
        { id: 6, name: "Thailand", desc: "Custom Bangkok city guides and packages.", img: Thailand },
        { id: 7, name: "Giza Necropolis, Egypt", desc: "Historical and cultural tours of the Giza Pyramids.", img: Giza },
        { id: 8, name: "Nepal", desc: "Nepal offers a diverse range of tourist destinations, from ancient cultural sites ", img: Nepal },
    ];

    const sendWhatsApp = () => {
        const text = `New Inquiry – Buvan Travel\n\nPackage: ${selectedPackage.name}\nName: ${formData.name}\nPlanned Travel Date: ${formData.month}\n\nI would like to discuss the itinerary.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const sendEmail = () => {
        const subject = `New Inquiry – Buvan Travel: ${selectedPackage.name}`;
        const body = `Hello Buvan Travel,\n\nI am interested in ${selectedPackage.name}.\n\nName: ${formData.name}\nPlanned Travel Date: ${formData.month}`;
        window.location.href = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
        <section id="destinations" className="py-24 bg-slate-50 md:py-20">
            <div className="content-wrapper">
                <Motion.div className='destination-heading' variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <h2 className="text-4xl font-bold">International Destinations</h2>
                    <p className="text-gray-500 mb-16">Curated spiritual and cultural journeys designed for families and spiritual seekers.</p>
                </Motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg) => (
                        <Motion.div key={pkg.id} whileHover={{ y: -15 }}
                            className="group relative h-[450px] overflow-hidden shadow-xl cursor-pointer bg-white"
                            style={{ borderRadius: '24px' }}
                            onClick={() => setSelectedPackage(pkg)}
                            //Scroll Animation elements for destination cards >>
                             variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        >
                            <img src={pkg.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={pkg.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold">{pkg.name}</h3>
                                <p className="text-white text-sm mb-4">{pkg.desc}</p>
                                <div className="flex items-center text-orange-400 text-xs font-bold uppercase tracking-widest">
                                    Request Info <ChevronRight size={14} className="ml-1" />
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>

      {/* --- CONTACT MODAL --- */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPackage(null)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
            <Motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="relative bg-white w-full max-w-md p-10 shadow-2xl z-[110]" style={{ borderRadius: '30px' }}>
              <button onClick={() => setSelectedPackage(null)} className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors cursor-pointer"><X /></button>
              <h3 className="text-2xl font-bold mb-2">Request Itinerary</h3>
              <p className="text-sm text-gray-500 mb-8">Package: <span className="text-orange-500 font-bold">{selectedPackage.name}</span></p>

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

</>
    );
};
