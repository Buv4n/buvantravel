import { X, Star } from "lucide-react";

export const ThankYouPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative bg-white max-w-md w-full rounded-xl p-8 text-center shadow-xl animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl cursor-pointer"
        >
          <X />
        </button>

        <h3 className="text-2xl font-bold mb-3 text-gray-800 tq-tile">
          <Star /> Thank You!
        </h3>

        <p className="text-gray-600 mb-6">
          Your inquiry has been received. Our team will contact you shortly.
        </p>

        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};
