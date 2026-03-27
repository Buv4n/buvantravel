import React from "react";

export const GoogleReviews = () => {
  return (
    <section className="py-20 bg-gray-50 google-review">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Travelers Say
        </h2>
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow">
          <iframe
            src="https://reviewthis.biz/purple-surf-4857"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
