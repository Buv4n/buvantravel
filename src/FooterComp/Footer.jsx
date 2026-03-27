
import { Phone, Mail } from 'lucide-react';
import LogoFooter from '../assets/Logo/Buvan Travel.png';
import TikToks from '../assets/Logo/tiktok_32x32.png';
import Instagram from '../assets/Logo/instagram_32x32.png';
import Facebook from '../assets/Logo/fb_32x32.png';
import JCB from '../assets/Logo/JCB.png';
import AExp from '../assets/Logo/American-Express.png';
import Visa from '../assets/Logo/Visa.png';
import Paypal from '../assets/Logo/PayPal.png';
import './Footer.css';

export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="bg-[#020618] text-gray-300  footer-main">
      {/* Top Footer */}
      <div className="content-wrapper">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          
          {/* Contact */}
          <div>
            {/* <span className="mb-4 text-lg font-semibold text-white">
              <h4 className="text-orange-500">Call Us</h4>
            </span> */}
            <div className="footer-logo">
                <img src={LogoFooter} alt="Buvan Travel Logo" className="h-12 mb-4" />
            </div>
            <span className="mb-6 flex items-center gap-2">
              <Phone /> <a href="tel:+6012 348 8014">+6012 348 8014</a>
            </span>

            {/* <span className="mb-2 text-lg font-semibold text-orange-500">
              <h4 className="text-orange-500">Email</h4>
            </span> */}
            <span className="mb-6 flex items-center gap-2 text-white">
             <Mail /> <a href="mailto:hello@buvantravel.com">hello@buvantravel.com</a></span>
          </div>

          {/* About Us */}
         {/* <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              About Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">
                Travel Blog & Tips
              </li>
              <li className="hover:text-white cursor-pointer">
                Working With Us
              </li>
              <li className="hover:text-white cursor-pointer">
                Be Our Partner
              </li>
            </ul>
          </div>  */}

          {/* Support */}
          {/* <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Customer Support
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy & Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Contact Channels
              </li>
            </ul>
          </div> */}

          {/* Payment */}
          <div className='text-left md:text-right lg:text-right float-left  md:float-right lg:float-right'>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Pay Safely With Us
            </h4>
            <p className="mb-4 text-sm leading-relaxed">
              The payment is encrypted and transmitted securely with an SSL
              protocol.
            </p>

            <div className="flex items-center gap-3 text-sm payment-gatways float-left  md:float-right lg:float-right">
              <span className="payment-logo"><img src={Visa} alt="Visa" className="h-6 w-10" /></span>
              <span className="payment-logo"><img src={Paypal} alt="PayPal" className="h-6 w-10" /></span>
              <span className="payment-logo"><img src={AExp} alt="American Express" className="h-6 w-10" />
              </span>
              <span className="payment-logo"><img src={JCB} alt="JCB" className="h-6 w-10" /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
      <div className="content-wrapper">
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-gray-400 mt-0 text-center md:text-left lg:text-left">
            © {year} Buvan Travel. All Rights Reserved. SSM Registration No: 202503319097 (003797407-A)
          </p>

          <div className="flex items-center gap-4 text-gray-400">
            <span className="text-sm">Follow Us On</span>
            <span className="cursor-pointer"> <a href="https://www.facebook.com/buvantravel" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" /></a>  </span>
            <span className="cursor-pointer"> <a href="https://www.instagram.com/buvan_travel" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" /></a>  </span>
            <span className="cursor-pointer"> <a href="https://www.tiktok.com/@buv4n_travel" target="_blank" rel="noopener noreferrer"><img src={TikToks} alt="TikTok" /></a>  </span>
          </div>
        </div>
        </div>
        </div>
    </footer>
  );
};
