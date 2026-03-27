import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo/Buvan Travel.png";
import { Phone } from 'lucide-react';
import "./Header.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header scroll shadow / style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Single source of truth for navigation
  const navItem = (id, label, path = null) => (
    <li
      className={`cursor-pointer pb-1 ${active === (path ? path.replace("/", "") : id)
          ? "text-white border-b-2 border-yellow-500"
          : "text-white hover:text-yellow-500"
        }`}
      onClick={() => {
        setMenuOpen(false);

        if (path) {
          // Route-based (Study Tour)
          setActive(path.replace("/", ""));
          navigate(path);
        } 
        else {
          // Section-based (Home sections)
          setActive(id);
          navigate("/", { state: { scrollTo: id } });
        }
      }}
    >
      {label}
    </li>
  );

  return (
    <header
      className={`fixed header-main top-0 z-50 w-full transition-all ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="content-wrapper">
        <div className=" flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center header-logo">
            <img
              src={logo}
              alt="Buvan Travel"
              className="h-8 cursor-pointer"
              onClick={() => {
                setActive("hero");
                setMenuOpen(false);
                navigate("/", { state: { scrollTo: "hero" } });
              }}
            />
          </div>

          <ul className="hidden md:flex items-center gap-8 desk-top-menu">
            {navItem("hero", "Home")}
            {navItem("destinations", "Destinations")}
            {navItem( null, "Study Tour", "study-tour")}
            {navItem("about", "About Us")}
            {navItem("contact", "Contact Us")}
          </ul>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <div className="header-btn1 rounded-lg secondary-button">
           <a href="tel:+60123488014"> <Phone /> Call Now</a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`md:hidden flex flex-col gap-1 hamburger-btn ${menuOpen ? "MobileOpen" : ""
              }`}
          >
            <span className="h-[2px] w-6 bg-white"></span>
            <span className="h-[2px] w-6 bg-white"></span>
            <span className="h-[2px] w-6 bg-white"></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg mobile-menu">
          <ul className="flex flex-col gap-6 px-6 py-6">
            {navItem("hero", "Home")}
            {navItem("destinations", "Destinations")}
            {navItem(null, "Study Tour", "/study-tour")}
            {navItem("about", "About Us")}
            {navItem("contact", "Contact Us")}
            <div
              className="menu-btn2"
              onClick={() => {
                setMenuOpen(false);
                navigate("/book-now");
              }}
            >
           <a href="tel:+60123488014"> <Phone />  Book Now</a>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};


export default Navbar;
