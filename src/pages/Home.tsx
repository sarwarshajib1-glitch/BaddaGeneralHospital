import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, HeartPulse, Stethoscope, Activity, UserRound, Baby, Truck, FlaskConical, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053" 
          alt="Hospital Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Badda General Hospital Pvt. Ltd.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-blue-50">
            Trusted Healthcare for Your Family. Providing world-class medical services with compassion and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/appointment" 
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a 
              href="tel:+8801790776722" 
              className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Emergency Call
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md py-8 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-around text-white">
          <div className="text-center">
            <div className="text-3xl font-bold">20+</div>
            <div className="text-sm uppercase tracking-wider opacity-80">Specialized Doctors</div>
          </div>
          <div className="text-center border-x border-white/20 px-20">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm uppercase tracking-wider opacity-80">Emergency Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">10k+</div>
            <div className="text-sm uppercase tracking-wider opacity-80">Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const services = [
    { icon: <Stethoscope />, title: 'General Medicine', desc: 'Comprehensive primary care and diagnostic services for all ages.' },
    { icon: <HeartPulse />, title: 'Cardiology', desc: 'Advanced heart care including diagnostics, treatment, and rehabilitation.' },
    { icon: <Activity />, title: 'Orthopedics', desc: 'Expert care for bone, joint, and muscle conditions and injuries.' },
    { icon: <UserRound />, title: 'Gynecology', desc: 'Specialized healthcare for women at every stage of life.' },
  ];

  return (
    <div>
      <Hero />
      
      {/* Quick Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Excellence</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Us?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Immediate Medical Help?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Our emergency department is open 24/7 to provide critical care when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+8801790776722" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
              Call Now: +8801790776722
            </a>
            <Link to="/appointment" className="bg-blue-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-all shadow-xl border border-blue-400">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
