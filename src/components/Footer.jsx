import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#00137F] font-Poppins text-white py-8 px-8">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-15">
          {/* Logo and Social Media Section */}
          <div className="flex flex-col items-center justify-start gap-4">
            <div>
              <img src={logo} alt="Reni's Logo" className="h-16 w-16" />
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#FFB800] transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-[#FFB800] transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="hover:text-[#FFB800] transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="hover:text-[#FFB800] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-[#FFB800] transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <ul className="flex flex-col text-default items-start gap-4">
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Official Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Black Friday Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Make Money Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Make Money On Renistore
            </h3>
            <ul className="flex flex-col text-default items-start gap-4">
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Sell on Renistore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Advertise Your Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Become a Logistics Service Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="flex flex-col text-default items-start gap-4">
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Dispute Resolution Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Returns & Refund Timeline
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB800] transition-colors">
                  How To Shop on Renistore
                </a>
              </li>
            </ul>
          </div>

          {/* Help and Payment Methods Section */}
          <div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Help</h3>
              <ul className="flex flex-col text-default items-start gap-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FFB800] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FFB800] transition-colors"
                  >
                    Faqs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
            <div className="flex gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                alt="Mastercard"
                className="h-8 w-8 bg-white rounded"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
                alt="Visa"
                className="h-8 w-8 bg-white rounded"
              />
              <div className="h-8 w-8 bg-white rounded flex items-center justify-center text-[#00137F] font-bold">
                R
              </div>
              <div className="h-8 w-8 bg-white rounded flex items-center justify-center text-[#00137F] font-bold">
                R
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
