import React from "react";
import './Speciality.css'
import CarPlane from '../assets/Images/car-plane.jpg'
import SoloTrip from '../assets/Images/solo.jpg'
import TourGuide from '../assets/Images/guide.jpg'
import { motion as Motion } from 'framer-motion';
import fadeInUp from '../Animation/fadeInUp'
import fadeInDown from '../Animation/fadeInDown'
import { ShieldCheck, Car, MapPinned } from "lucide-react";


export const SpecialtySupport = () => {
    return (
        <section className="py-25 bg-white travel-support" id="support">
            <div className="content-wrapper">

                {/* Heading */}
                <Motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-14 support-heading">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Specialty Travel Support
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Thoughtfully designed services to ensure safety, comfort, and seamless journeys.
                    </p>
                </Motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Solo Safety */}
                    <Motion.div
                        variants={fadeInDown}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className="common-support relative hover:shadow-lg transition shadow-sm rounded-2xl bg-slate-50">
                        <div className="ofl-hidden rounded-xl">
                            <div className="section-bg section-bg-center-50 h-60 support-img rounded-xl"
                                style={{ backgroundImage: `url(${SoloTrip})`, }}>
                            </div>
                        </div>
                        <div className="p-8 ">
                            <div className="common-icon shadow-sm"><ShieldCheck /></div>
                            <h4 className="text-xl font-semibold mb-0 text-center ">
                                Solo Safety Planning
                            </h4>
                            <p className="text-gray-600 text-center">
                                Personalized safety strategies and travel planning designed especially for solo travelers.
                            </p>
                        </div>
                    </Motion.div>

                    {/* Private Transport */}
                    <Motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className="common-support relative hover:shadow-lg transition shadow-sm rounded-2xl bg-slate-50">
                        <div className="ofl-hidden rounded-xl">
                            <div className="section-bg section-bg-center-50 h-60 support-img rounded-xl"
                                style={{ backgroundImage: `url(${CarPlane})`, }}></div>
                        </div>
                        <div className="p-8">
                            <div className="common-icon shadow-sm"><Car /></div>
                            <h4 className="text-xl font-semibold mb-0 text-center">
                                Private A/C Transport
                            </h4>
                            <p className="text-gray-600  text-center">
                                Comfortable, air-conditioned private vehicles ensuring stress-free travel between destinations.
                            </p>
                        </div>
                    </Motion.div>

                    {/* Guided Itineraries */}
                    <Motion.div
                        variants={fadeInDown}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className="common-support relative hover:shadow-lg transition shadow-sm rounded-2xl bg-slate-50">
                        <div className="ofl-hidden rounded-xl">
                            <div className="section-bg section-bg-center-50 h-60 support-img rounded-xl"
                                style={{ backgroundImage: `url(${TourGuide})`, }}></div>
                        </div>
                        <div className="p-8 ">

                            <div className="common-icon shadow-sm"><MapPinned /></div>
                            <h4 className="text-xl font-semibold mb-0 text-center">
                                Guided Itineraries
                            </h4>
                            <p className="text-gray-600 text-center">
                                Expertly guided itineraries offering deep cultural insight and well-paced exploration.
                            </p>
                        </div>
                    </Motion.div>

                </div>
            </div>
        </section>
    );
};
