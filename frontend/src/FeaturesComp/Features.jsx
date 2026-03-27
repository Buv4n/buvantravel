import React from "react";

import { Plane, BadgeDollarSign, Headset, CalendarDays  } from 'lucide-react';
import { motion as Motion } from "framer-motion";
import fadeInUp from '../Animation/fadeInUp';
import './features.css';

export const Features = () => {
  return (
    <section className="features py-10">
      <Motion.div className="content-wrapper " id="features" 
    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Item 1 */}
          <div className="flex items-center gap-4 text-white">
            <span className="luci-icon"> <Plane /></span>
            <div>
              <h4 className="text-sm font-semibold uppercase mt-0">
                500+ Destinations
              </h4>
              <p className="text-sm text-white/80">
                Our expert team handpicked all destinations in this site.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 text-white">
            <span className="luci-icon"><BadgeDollarSign /></span>
            <div>
              <h4 className="text-sm font-semibold uppercase mt-0">
                Best Price Guarantee
              </h4>
              <p className="text-sm text-white/80">
                Price match within 48 hours of order confirmation.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 text-white">
            <span className="luci-icon"><Headset /></span>
            <div>
              <h4 className="text-sm font-semibold uppercase mt-0">
                Top Notch support
              </h4>
              <p className="text-sm text-white/80">
               We are here to help, before, during, and even after your trip.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-4 text-white">
            <span className="luci-icon"><CalendarDays /></span>
            <div>
              <h4 className="text-sm font-semibold uppercase mt-0">
                Super Fast Booking
              </h4>
              <p className="text-sm text-white/80">
Book trips instantly with a fast, hassle-free process.              </p>
            </div>
          </div>

        </div>
      </Motion.div>
    </section>
  );
};
