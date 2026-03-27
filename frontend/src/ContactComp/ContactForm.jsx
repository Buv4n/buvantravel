import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { MapPin, Phone, Clock, Mail, ChevronDown } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import fadeInUp from '../Animation/fadeInUp';
import FormBG from '../assets/Images/kazak2.jpg';
import { ThankYouPopup } from "./ThankYou";
import './Contact.css';

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { isSubmitting },
    } = useForm({ 
        mode: "onTouched",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            destination: "",
            message: "",
            subject: "New Travel Request",
        }
    });

    const accessKey = import.meta.env.VITE_WEB_MAIL_ACCESS_KEY;
    const [showThankYou, setShowThankYou] = useState(false);

    // Watch name to update hidden subject and from_name fields
    const userName = useWatch({
        control,
        name: "name",
    });

    useEffect(() => {
        if (userName) {
            setValue("from_name", userName);
            setValue("subject", `New Travel Request from ${userName}`);
        }
    }, [userName, setValue]);

    // Initialize hidden redirect and from_email fields
    useEffect(() => {
        setValue("from_email", import.meta.env.VITE_FROM_EMAIL || "noreply@buvantravel.com");
        setValue("redirect", "https://buvantravel.com");
    }, [setValue]);

    const onSubmit = async (data) => {
        try {
            // Combine all form data with the access key
            const payload = {
                ...data,
                access_key: accessKey,
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setShowThankYou(true);
                reset();
            } else {
                alert(result.message || "Something went wrong. Please check your Access Key.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Submission failed. Please try again.");
        }
    };

    return (
        <div className="contact-form-section md:py-24 py-20 bg-slate-50 relative overlay section-bg section-bg-center-50 bg-fixed" id="contact"
            style={{ backgroundImage: `url(${FormBG})` }} >
            <div className="content-wrapper">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT COLUMN – ADDRESS DETAILS */}
                 <Motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                        <p className="mb-6 text-white/80">
                            Reach out to Buvan Travel for personalized travel experiences and expert guidance.
                        </p>

                        <div className="space-y-4 text-lg">
                            <p><span className="icon-text flex align-center"> <MapPin /><strong> Address:</strong> </span>36, Lrg Bentara 19D/KS07, Taman Saga, 41000 Klang, Selangor, Malaysia</p>
                            <p><span className="icon-text flex align-center"> <Phone /><strong> Phone:</strong></span> +60 12-348 8014</p>
                            <p><span className="icon-text flex align-center"> <Mail /><strong> Email:</strong></span> hello@buvantravel.com</p>
                            <p><span className="icon-text flex align-center"> <Clock /><strong> Working Hours:</strong></span> Mon – Sat, 09AM – 5PM</p>
                        </div>
                    </Motion.div>

                    {/* RIGHT COLUMN – FORM */}
                    <Motion.div
                        className="contact-form rounded-2xl bg-white p-8 shadow-lg"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-2 text-black">Book your destination</h2>
                        <p className="mb-6 text-sm text-gray-500">
                            Fill out the form below and we’ll get back to you shortly.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="customer-info">
                            {/* HIDDEN FIELDS (Crucial for Web3Forms) */}
                            <input type="hidden" {...register("subject")} />
                            <input type="hidden" {...register("from_name")} />
                            <input type="hidden" {...register("from_email")} />
                            <input type="hidden" {...register("redirect")} />
                            <input type="checkbox" className="hidden" {...register("botcheck")} />

                            {/* NAME */}
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full text-xl p-4 mb-4 border rounded border-gray-300 bg-transparent text-black"
                                {...register("name", { required: true })}
                            />

                            {/* MOBILE */}
                            <input
                                type="tel"
                                placeholder="Mobile"
                                inputMode="numeric"
                                className="w-full text-xl p-4 mb-4 border rounded border-gray-300 bg-transparent text-black"
                                {...register("phone", { required: true })}
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                }}
                            />

                            {/* EMAIL */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full text-xl p-4 mb-4 border rounded border-gray-300 bg-transparent text-black"
                                {...register("email", { required: true })}
                            />

                            {/* DESTINATION */}
                            <div className="relative mb-4">
                                <select
                                    className="w-full text-xl p-4 pr-12 border rounded outline-none border-gray-300 bg-transparent appearance-none text-black"
                                    {...register("destination", { required: true })}
                                >
                                    <option value="">Select Destination</option>
                                    <option value="Bali">Bali</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Giza Egypt">Giza Egypt</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Study Tour">Study Tour</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="South Korea">South Korea</option>
                                    <option value="South India">South India</option>
                                    <option value="Thailand">Thailand</option>
                                </select>
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                                    <ChevronDown />
                                </span>
                            </div>

                            {/* MESSAGE */}
                            <textarea
                                placeholder="Message"
                                className="w-full h-32 p-4 mb-6 border rounded border-gray-300 text-xl bg-transparent text-black"
                                {...register("message", { required: true })}
                            />

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full rounded-md px-6 py-4 text-white font-bold transition ${
                                    isSubmitting 
                                    ? "bg-gray-400 cursor-not-allowed" 
                                    : "bg-[#3d3b9c] hover:bg-black"
                                }`}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                        {/* THANK YOU POPUP */}
                        {showThankYou && (
                            <ThankYouPopup onClose={() => setShowThankYou(false)} />
                        )}
                    </Motion.div>
                </div>
            </div>
        </div>
    );
};