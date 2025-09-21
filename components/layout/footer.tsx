import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
          <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            <span className="text-lg font-bold text-gray-800">ALXbnb</span>
          </div>
          <p className="text-sm text-gray-600">
            Discover unique stays and experiences across the globe.  
            Book your next adventure with ease.
          </p>
        </div>
          <h3 className="text-md font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Careers</li>
            <li className="hover:text-primary cursor-pointer">Blog</li>
            <li className="hover:text-primary cursor-pointer">Press</li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Support</h3>
          