import { GraduationCap, Briefcase, Users } from 'lucide-react';
import { motion as Motion } from "framer-motion";
import fadeInUp from '../Animation/fadeInUp';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students & Academic Institutions',
    description: 'Perfect for schools, colleges, and universities looking to provide students with hands-on learning experiences and global exposure.',
    benefits: [
      'Interactive learning environments',
      'Cross-cultural understanding',
      'Career exploration opportunities',
      'Academic credit programs available'
    ]
  },
  {
    icon: Briefcase,
    title: 'Corporate Learning Programs',
    description: 'Designed for businesses seeking to upskill their teams through industry best practices and international exposure.',
    benefits: [
      'Leadership development',
      'Industry benchmarking',
      'Networking opportunities',
      'Innovation inspiration'
    ]
  },
  {
    icon: Users,
    title: 'Professional Exposure Trips',
    description: 'Tailored for professional groups and associations wanting to explore industry trends and innovations globally.',
    benefits: [
      'Sector-specific insights',
      'Expert-led sessions',
      'Site visits & demonstrations',
      'Professional certifications'
    ]
  }
];

export function IdealFor() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ideal For
          </Motion.h2>
          <Motion.p className="text-lg md:text-xl text-gray-600 max-w-8xl mx-auto" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} >
            Our study tour programs are carefully crafted for different learning needs and professional goals
          </Motion.p>
        </div>

        <Motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} >
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div 
                key={index} 
                className="border-2 border-gray-200 hover:border-[#3d3b9c] transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-[#3d3b9c] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gray-500/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {audience.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {audience.description}
                  </p>

                  <div className="space-y-3">
                    {audience.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-black text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
}
