import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const Doctors = () => {
  const doctors = [
    { name: 'Dr. Ahmed Khan', role: 'Senior Cardiologist', exp: '15+ Years', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Dr. Sarah Begum', role: 'Gynecologist', exp: '12+ Years', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Dr. Rafiqul Islam', role: 'Orthopedic Surgeon', exp: '10+ Years', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Dr. Nusrat Jahan', role: 'Pediatrician', exp: '8+ Years', img: 'https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Dr. Kamal Hossain', role: 'General Physician', exp: '20+ Years', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=500' },
    { name: 'Dr. Mehedi Hasan', role: 'Neurologist', exp: '11+ Years', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Meet Our Specialists</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Our doctors are highly qualified and experienced professionals dedicated to providing the best medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={doctor.img} 
                    alt={doctor.name} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4">
                      <Facebook className="text-white w-5 h-5 cursor-pointer hover:text-blue-400" />
                      <Twitter className="text-white w-5 h-5 cursor-pointer hover:text-blue-400" />
                      <Linkedin className="text-white w-5 h-5 cursor-pointer hover:text-blue-400" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{doctor.name}</h4>
                <p className="text-blue-600 font-medium">{doctor.role}</p>
                <p className="text-slate-500 text-sm mt-1">{doctor.exp} Experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
