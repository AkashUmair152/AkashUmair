"use client";
import Link from "next/link";
import gsap from "gsap";
import {
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiFiverr, SiUpwork } from "react-icons/si";

const Header = () => {
  

  // Social links data to reduce redundancy
  const socialLinks = [
    { href: "mailto:akashumair922@gmail.com", icon: <MdEmail />, label: "Email" },
    { href: "https://wa.me/923084583415", icon: <FaWhatsapp />, label: "WhatsApp" },
    { href: "https://www.linkedin.com/in/akashumair/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://www.fiverr.com/AkashUmair", icon: <SiFiverr />, label: "Fiverr" },
    { href: "https://www.upwork.com/freelancers/~015265c427d4613b86", icon: <SiUpwork />, label: "Upwork" },
    { href: "https://t.me/Warrior", icon: <FaTelegram />, label: "Telegram" },
  ];

  return (
    <header className="bg-black flex justify-between items-center h-[10vh] sm:h-[6vh] text-white uppercase px-4 md:px-8 z-20 sticky top-0">
      {/* Logo Section */}
      <div className="logo" >
        <h1 className="text-xl md:text-2xl font-bold">Akash Umair</h1>
      </div>

      {/* Social Links Section */}
      <nav
        className="social-links flex flex-col gap-[3vw] absolute top-[10vw] right-[5vw]"
        
      >
        {socialLinks.map(({ href, icon, label }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            aria-label={label}
            className="hover:text-yellow-600 transition-colors text-3xl md:text-4xl"
          >
            {icon}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;