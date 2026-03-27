
import { motion as Motion } from 'framer-motion'
import fadeInUp from '../Animation/fadeInUp'
import OfficeVideo from "../assets/Video/instavideo.mp4";
import './AboutUs.css'


export const AboutUs = () => {

    return (
        <div className='about-us py-24 bg-slate-50  ' id='about'>
            <div className='content-wrapper'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    <div className='abt-left-img'>
                        <Motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="hexagon-wrapper">
                            <div className="hexagon">
                                <video
                                    src={OfficeVideo}
                                    className="hexagon-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                <span className="divider"></span>
                            </div>
                        </Motion.div>
                    </div>
                    <div className='abt-right-content'>
                        <Motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}> Who We Are</Motion.h2>
                        <Motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-black-500 '>
                            Buvan Travel is a registered travel service provider in Malaysia under the Companies Commission of Malaysia (SSM).
                        </Motion.p>
                        <Motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Buvan Travel was founded with a simple belief “travel should have purpose”. Based in Malaysia, we specialize in spiritual tourism, cultural journeys, temple tours, and slow travel experiences across Asia and selected international destinations.
                        </Motion.p>

                        <Motion.div className='our-philosophy' variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h3>Our Philosophy</h3>
                        </Motion.div>
                        <Motion.ul className='un-orderlist' variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <li>Meaningful travel over rushed sightseeing</li>
                            <li> Respect for culture, tradition & local communities</li>
                            <li> Comfort, safety & transparency for every traveler</li>
                        </Motion.ul>

                        <Motion.div className='our-philosophy pt-5' variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <h3>What Makes Us Different</h3>
                        </Motion.div>
                        <Motion.ul className='un-orderlist' variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <li>Deep destination knowledge</li>
                            <li>Trusted local partners</li>
                            <li>Dedicated end-to-end support</li>
                        </Motion.ul>
                    </div>
                </div>
                <Motion.div className='abt-foot text-center pt-8 max-w-6xl' variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <h4>Whether you are planning a temple pilgrimage, family holiday, study tour, or cultural exploration — Buvan Travel walks the journey with you.</h4>
                </Motion.div>
            </div>
        </div>
    )
}
