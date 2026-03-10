import React from 'react';
import { ShieldCheck, Activity, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=2070" 
                  alt="Medical Team" 
                  className="rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">About Our Hospital</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Your Health is Our Top Priority
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Badda General Hospital Pvt. Ltd. is a leading healthcare provider in Dhaka, dedicated to offering comprehensive medical services with a patient-centric approach. We combine advanced technology with compassionate care to ensure the best outcomes for our patients.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full">
                    <ShieldCheck className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Mission</h4>
                    <p className="text-slate-600">To provide high-quality, affordable healthcare services to our community through excellence in medical practice.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-full">
                    <Activity className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Vision</h4>
                    <p className="text-slate-600">To be the most trusted healthcare destination in Bangladesh, recognized for clinical excellence and patient safety.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Why Choose Badda General?</h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Experienced and compassionate medical staff
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    State-of-the-art medical equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Affordable and transparent pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    24/7 emergency and pharmacy services
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
