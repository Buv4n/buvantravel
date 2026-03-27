import { useState } from "react";
import { Play } from 'lucide-react';
import { motion as Motion } from "framer-motion";
import SectionBG from '../assets/Images/video-bg.jpeg'
import instaVideo from "../assets/Video/instavideo.mp4";

export const VideoHero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative w-full h-160 bg-cover bg-center flex items-center justify-center section-bg section-bg-center-50"
        style={{
          backgroundImage: `url(${SectionBG})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Animated Border Frame */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-10 border border-white/70"
        />

        {/* Content */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="relative text-center text-white max-w-2xl px-4"
        >
          <Motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl md:text-2xl font-serif mb-4"
          >
            Enjoy Your Travel
          </Motion.h2>

          {/* Play Button */}
          <Motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)} 
            aria-label="play video"
            className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto cursor-pointer"
          >
            <Play />
          </Motion.button>
        </Motion.div>

        {/* Labels */}
        <Motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-5 left-1/2 -translate-x-1/2 text-black rounded-full tracking-widest bg-white pr-4 pl-4 pb-2 pt-2 text-sm md:text-gl"
        >
          BOATING
        </Motion.span>

        <Motion.span
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-6 right-15 text-black rounded-full tracking-widest bg-white pr-4 pl-4 pb-2 pt-2 text-sm md:text-gl"
        >
          HOLIDAYS
        </Motion.span>

        <Motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-6 left-15 flex items-center gap-2 rounded-full text-black bg-white pr-4 pl-4 pb-2 pt-2 text-sm md:text-gl"
        >
          <span className="w-2 h-2 bg-red-500 rounded-full"></span> REC
        </Motion.span>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <Motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-[90%] max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full rounded-lg"
              src={instaVideo}
              controls
              autoPlay
              muted
              loop
              playsInline
              allowFullScreen
            />
          </Motion.div>
        </Motion.div>
      )}
    </>
  );
};