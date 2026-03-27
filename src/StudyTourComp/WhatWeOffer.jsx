import { Building2, Globe2, School, Factory, MapPin } from 'lucide-react';
import { motion as Motion } from "framer-motion";
import fadeInUp from '../Animation/fadeInUp';

const offerings = [
  {
    icon: Building2,
    title: 'Industrial Visits & Corporate Exposure',
    description: 'Get hands-on experience with leading companies and understand real-world business operations'
  },
  {
    icon: Globe2,
    title: 'Cultural Exchange Programs',
    description: 'Immerse in diverse cultures and build global perspectives through interactive exchanges'
  },
  {
    icon: School,
    title: 'University & Campus Visits',
    description: 'Explore top academic institutions and learn about international education opportunities'
  },
  {
    icon: Factory,
    title: 'Logistics, Manufacturing & Supply Chain Tours',
    description: 'Witness advanced logistics operations and supply chain management in action'
  },
  {
    icon: MapPin,
    title: 'Educational Sightseeing & Guided Learning',
    description: 'Combine tourism with education through expert-guided tours of historical and cultural sites'
  }
];

export function WhatWeOffer() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="content-wrapper">
        <div className="text-center mb-16">
          <Motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </Motion.h2>
          <Motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg text-center md:text-xl text-gray-600 max-w-8xl mx-auto ">
            Comprehensive study tour programs that blend academic learning with practical industry exposure
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <Motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#3d3b9c] hover:-translate-y-1"
              >
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 bg-[#3d3b9c] rounded-xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black-500/30">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600">
                    {offering.description}
                  </p>
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
