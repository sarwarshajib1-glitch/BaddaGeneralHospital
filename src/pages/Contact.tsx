import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Contact Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600">QCHG+MHV, 107/2, Uttar Badda, Progoti Sarani, Dhaka 1212, Bangladesh</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600">+8801790776722</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600">info@baddageneral.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                    <p className="text-slate-600">Emergency: 24/7</p>
                    <p className="text-slate-600">OPD: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[450px] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.050516629631!2d90.4228!3d23.781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79645903939%3A0x63351d1844787a7!2sBadda%20General%20Hospital!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
