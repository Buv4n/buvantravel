import { motion as Motion } from "framer-motion";
import fadeInUp from '../Animation/fadeInUp';
import { useEffect } from "react";

const POSTS = [
  "https://www.instagram.com/p/DSSeBIcCb62/",
  "https://www.instagram.com/p/DRo7zt3iR08/",
  "https://www.instagram.com/p/DRo74m-gHHr/",
];

const InstagramGrid = () => {
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="instagram-review bg-gray-50 py-20 md:py-32 ">
     <div className="content-wrapper"> 
      <Motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 " variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {POSTS.map((url, index) => (
          <blockquote
            key={index}
            className="instagram-media w-full mx-auto rounded-lg shadow-md" 
            data-instgrm-permalink={url}
            data-instgrm-version="14"
          />
        ))}
      </Motion.div>
      </div>
    </div>
  );
};

export default InstagramGrid;
