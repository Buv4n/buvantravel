import { MapPin, CheckCircle } from 'lucide-react';
import { motion as Motion } from "framer-motion";
import fadeInUp from '../Animation/fadeInUp';

import MalaysiaFlag from '../assets/Flag/Malaysia.svg';
import SingaporeFlag from '../assets/Flag/Singapore.svg';
import IndiaFlag from '../assets/Flag/India.svg';
import South_KoreaFlag from '../assets/Flag/South_Korea.png';
import IndonesiaFlag from '../assets/Flag/Indonesia.jpg';
import VietnamFlag from '../assets/Flag/Vietnam.jpg';
import ThailandFlag from '../assets/Flag/Thailand.svg';


import "./DestinationX.css";

const destinations = [
  {
    country: 'Malaysia',
    highlights: ['Kuala LSingaporeFlagumpur', 'Penang', 'Johor Bahru'],
    flag: MalaysiaFlag,
  },
  {
    country: 'Singapore',
    highlights: ['Marina Bay', 'Sentosa', 'Gardens by the Bay'],
    flag: SingaporeFlag,
  },
  {
    country: 'India',
    highlights: ['Delhi', 'Mumbai', 'Bangalore'],
    flag: IndiaFlag,
  },
  {
    country: 'Thailand',
    highlights: ['Bangkok', 'Chiang Mai', 'Phuket'],
    flag: ThailandFlag,
  },
  {
    country: 'South Korea',
    highlights: ['Seoul', 'Busan', 'Incheon'],
    flag: South_KoreaFlag,
  },
  {
    country: 'Indonesia',
    highlights: ['Jakarta', 'Bali', 'Surabaya'],
    flag: IndonesiaFlag,
  },
  {
    country: 'Vietnam',
    highlights: ['Ho Chi Minh', 'Hanoi', 'Da Nang'],
    flag: VietnamFlag,
  }
];

export function Destinations() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden" id='stdDestination'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="content-wrapper px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/30 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-white-500" />
            <span className="text-white-500 font-semibold text-sm">Global Destinations</span>
          </Motion.div>
          <Motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Destinations Covered
          </Motion.h2>
          <Motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg md:text-xl text-gray-300 max-w-8xl mx-auto">
            Explore diverse Asian destinations with rich cultural heritage and modern industry
          </Motion.p>
        </div>

        <Motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-700 hover:border-black-600 transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="p-0">
                <div className={`h-2 bg-[#d5b139]`}></div>
                <div className="pt-8 pb-6 px-4">
                  <div className="flex items-center gap-3 mb-4 relative">
                    <div className={`w-10 h-10 bg-[#3d3b9c] rounded-full flex items-center justify-center`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mt-0">
                      {destination.country}
                    </h3>
                    <div className="flag-x mb-4 overflow-hidden rounded shadow-sm w-12 h-8">
                     <img src={destination.flag} alt={destination.country} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  {/* <ul className="space-y-2">
                    {destination.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-black text-xl">
                        <CheckCircle className="w-4 h-4 text-[#000000] flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
          ))}
        </Motion.div>

        {/* Additional Info */}
        <Motion.div className="text-center" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-gray-400 italic">
            Custom destinations available upon request — contact us to design your perfect itinerary
          </p>
        </Motion.div>
      </div>
    </section>
  );
}
