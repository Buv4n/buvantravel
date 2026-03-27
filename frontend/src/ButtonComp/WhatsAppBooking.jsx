import React from 'react'
import { motion as Motion } from 'framer-motion'
import fadeInDown from '../Animation/fadeInDown'

export const WhatsAppBooking = () => {
    const WHATSAPP_NUMBER = "+60123488014";
    return (
        <Motion.div className="about-btn mt-10"
            variants={fadeInDown} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <button type="button" className="tertiary-button">
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20Buvan%20I'm%20interested%20in%20spiritual%2C%20cultural%2C%20and%20leisure%20travel%20services.%20Could%20you%20please%20share%20more%20details?`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WhatsApp Booking
                </a>
            </button>
        </Motion.div>
    )
}
