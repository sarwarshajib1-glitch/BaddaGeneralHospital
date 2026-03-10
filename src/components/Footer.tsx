import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Badda General</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing compassionate and high-quality healthcare services to the community of Badda and beyond. Your health is our mission.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/doctors" className="hover:text-blue-400 transition-colors">Our Doctors</Link></li>
              <li><Link to="/appointment" className="hover:text-blue-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">General Medicine</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Cardiology</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Orthopedics</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Gynecology</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Pediatrics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for health tips and hospital updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 w-full"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Badda General Hospital Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
