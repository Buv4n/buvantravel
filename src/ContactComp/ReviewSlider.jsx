import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import GoogleReviewImg from "../assets/Logo/google-review.png";
import "./GoogleReview.css";


const reviews = [
    { name: "Priya", role: "Traveler", rating: 5, review: "We had a wonderful experience with Buvan Travels.Buvan is a very helpful and caring person, especially towards my mother and the elderly ladies in our family entire the travel. He was always responsive and kept us updated daily in Malaysia throughout our India tour, ensuring everything was well coordinated with the local drivers. His dedication, patience and personal care really made my mother and aunties trip smooth and stress-free. I highly recommend Buvan Travels to anyone planning an India tour. Wishing Buvan continued success in his tours and travel journey." },
    { name: "Mohammed Faizal", role: "Traveler", rating: 5, review: "I recently booked a bus with Buvan Travel for a trip to Zoo Taiping for a group of 32 people. The entire process was seamless. The bus was comfortable and spacious enough for our group, and the driver was professional and punctual. Highly recommended for anyone organizing a group trip." },
    { name: "T.R. Anuvarshini", role: "Traveler", rating: 5, review: "Amazing and comfortable travel experience, heartfelt thanks to Buvan travels, the tour guides did an amazing job, there were no questions that they weren't able to answer. Good job." },
    { name: "Sandan Sekran", role: "Customer", rating: 4, review: "I had an amazing experience with Mr.Buvan.From the very beginning, they were professional, patient, and extremely knowledgeable. They understood exactly what I was looking for and planned the perfect trip with great attention to detail. Well organised." },
];

const ReviewSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Logic to handle infinite loop and responsive steps
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Helper to get circular array items
  const getVisibleReviews = () => {
    let visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(startIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:py-24 py-20 review-slider">
             <div className="section-heading text-center pb-10">
                     <h2 className="mb-10">The Trust We've Earned</h2>
                     <h4>Feedback BUVAN TRAVEL Google Reviews</h4>
                 </div>
                 <div className="google-icon-head flex items-center justify-between pb-[35px] px-4" >
                     <div className="rvw-logo"> <img src={GoogleReviewImg} alt="Google review" loading='lazy'/>
                     </div> <div className="rev-btn">
                         <a href="https://www.google.com/search?sca_esv=0bd1decbe45b1982&rlz=1C1CHBF_enIN1036IN1036&sxsrf=ANbL-n5TzRJsg8izMQqrbWCww_x50n_2cQ:1769577454819&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORyGWHjv2xZA56mbDEsA3UNcVkGHCEm7Llv96-qCqSCyOjZQ8oqbciKTwzv11tk49mIUsTpBeyfiNvHkmuy3lXJFS6ub&q=BUVAN+TRAVEL+Reviews&sa=X&ved=2ahUKEwiyjePcva2SAxUCyjgGHeBCEXEQ0bkNegQILhAH&biw=1920&bih=911&dpr=1&aic=0#lrd=0x31cdad6382222b69:0xa1bc62c688975b6,3,,,," target="_black">Write a Review</a>
                     </div>
                 </div>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getVisibleReviews().map((review, index) => (
          <div 
            key={`${startIndex}-${index}`}
            className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 
              ${index === 1 ? 'hidden md:block' : ''} 
              ${index === 2 ? 'hidden lg:block' : ''}`}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < review.rating ? "#facc15" : "none"} 
                  className={i < review.rating ? "text-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            
            <p className="text-gray-600 mb-6 line-clamp-4 italic">
              "{review.review}"
            </p>
            
            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 leading-tight condidate-name">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
         <div className="flex gap-2 justify-center items-center pt-[45px]">
          <button onClick={prevSlide} aria-label="Previous Review" className="cursor-pointer p-3 rounded-full border border-gray-200 hover:bg-white hover:shadow-md transition-all active:scale-95">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} aria-label="Next Review" className="cursor-pointer p-3 rounded-full border border-gray-200 hover:bg-white hover:shadow-md transition-all active:scale-95">
            <ChevronRight size={20} />
          </button>
        </div>
    </div>
  );
};

export default ReviewSlider;