import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#a855f7] text-white py-16 mt-12 text-[15px] lg:text-base">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-2xl lg:text-5xl font-extrabold tracking-tight ">My Mart</h1>
          <p className="text-lg mt-2 opacity-80">
            Your trusted online marketplace
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-lg hover:text-gray-200 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg hover:text-gray-200 transition duration-300"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg hover:text-gray-200 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg hover:text-gray-200 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex justify-center space-x-6 text-2xl">
              <a
                href="#"
                className="hover:text-gray-200 transition duration-300"
                aria-label="Facebook"
              >
                <box-icon
                  type="logo"
                  color="#1877F2"
                  name="facebook-square"
                ></box-icon>
              </a>
              <a
                href="#"
                className="hover:text-gray-200 transition duration-300"
                aria-label="Twitter"
              >
                <box-icon type="logo" color="#1DA1F2" name="twitter"></box-icon>
              </a>
              <a
                href="#"
                className="hover:text-gray-200 transition duration-300"
                aria-label="Instagram"
              >
                <box-icon
                  type="logo"
                  color="#E4405F
"
                  name="instagram-alt"
                ></box-icon>
              </a>
              <a
                href="#"
                className="hover:text-gray-200 transition duration-300 "
                aria-label="LinkedIn"
              >
                <box-icon
                  type="logo"
                  color="#0077B5"
                  name="linkedin-square"
                ></box-icon>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 text-center md:text-right">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-lg">Email: support@mymart.com</p>
            <p className="text-lg">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12 text-sm opacity-70">
          <p>&copy; 2025 My Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
