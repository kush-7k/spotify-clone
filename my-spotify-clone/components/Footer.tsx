import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="hover:text-gray-300">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-gray-300">Contact Us</a>
                </Link>
              </li>
                  </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq">
                  <a className="hover:text-gray-300">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="hover:text-gray-300">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="hover:text-gray-300">Privacy Policy</a>
                </Link>
              </li>
                 </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-sm">Stay connected:</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 015.657 13.657l-3.536-3.535a3 3 0 10-4.243 4.243l3.535 3.536A8 8 0 1110 2zm0 4a4 4 0 110 8 4 4 0 010-8z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 015.657 13.657l-3.536-3.535a3 3 0 10-4.243 4.243l3.535 3.536A8 8 0 1110 2zm0 4a4 4 0 110 8 4 4 0 010-8z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 015.657 13.657l-3.536-3.535a3 3 0 10-4.243 4.243l3.535 3.536A8 8 0 1110 2zm0 4a4 4 0 110 8 4 4 0 010-8z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Spotify Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
