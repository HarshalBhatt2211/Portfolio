import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from '../ui/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-fixed bg-center opacity-5"></div>
      <div className="container relative mx-auto px-4">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's discuss your automotive engineering needs"
        />
        
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-white">Contact Information</h3>
            <p className="mb-8 text-lg text-gray-300">
              Available for consulting on automotive projects, production problems, and vehicle dynamics optimization.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-300">Berlin, Germany</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <a href="harshal.bhatt2021@gmail.com" className="text-gray-300 hover:text-white">
                    harshal.bhatt2021@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <a href="+4915158373305" className="text-gray-300 hover:text-white">
                    +49 151 58373305
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Working Hours</h4>
                  <p className="text-gray-300">Monday - Friday, 9AM - 5PM CEST</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg bg-white/5 p-8 shadow-lg backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-white">Send Me a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};