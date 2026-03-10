import React from 'react';
import { Clock, FlaskConical, Activity, HeartPulse, Truck, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const Facilities = () => {
  const facilities = [
    { icon: <Clock />, title: '24/7 Emergency', desc: 'Always ready to handle critical medical situations with our rapid response team.' },
    { icon: <FlaskConical />, title: 'Modern Laboratory', desc: 'Fully automated diagnostic lab for accurate and fast results.' },
    { icon: <Activity />, title: 'Digital X-ray', desc: 'High-resolution digital imaging for precise diagnosis of various conditions.' },
    { icon: <HeartPulse />, title: 'ICU Support', desc: 'Advanced intensive care unit with life support systems and specialized monitoring.' },
    { icon: <Truck />, title: 'Ambulance Service', desc: 'Fast and reliable ambulance service available 24/7 for patient transport.' },
    { icon: <ShieldCheck />, title: 'Patient Safety', desc: 'Strict protocols and hygiene standards to ensure maximum patient safety.' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Facilities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">World-Class Infrastructure</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We provide the best environment for healing with modern facilities and advanced medical technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  {React.cloneElement(facility.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{facility.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{facility.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
