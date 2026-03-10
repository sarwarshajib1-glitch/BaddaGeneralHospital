import React from 'react';
import { Stethoscope, HeartPulse, Activity, UserRound, Baby, Truck, FlaskConical, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { icon: <Stethoscope />, title: 'General Medicine', desc: 'Comprehensive primary care and diagnostic services for all ages.' },
    { icon: <HeartPulse />, title: 'Cardiology', desc: 'Advanced heart care including diagnostics, treatment, and rehabilitation.' },
    { icon: <Activity />, title: 'Orthopedics', desc: 'Expert care for bone, joint, and muscle conditions and injuries.' },
    { icon: <UserRound />, title: 'Gynecology', desc: 'Specialized healthcare for women at every stage of life.' },
    { icon: <Baby />, title: 'Pediatrics', desc: 'Compassionate medical care for infants, children, and adolescents.' },
    { icon: <Truck />, title: 'Emergency Care', desc: '24/7 rapid response medical assistance for critical situations.' },
    { icon: <FlaskConical />, title: 'Diagnostic Services', desc: 'State-of-the-art laboratory and imaging for accurate diagnosis.' },
    { icon: <ShieldCheck />, title: 'Pharmacy', desc: 'Fully stocked pharmacy with quality medicines available 24/7.' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Specialized Departments</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We offer a wide range of medical services provided by experienced specialists using the latest technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                <Link to="/appointment" className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                  Book Appointment <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
