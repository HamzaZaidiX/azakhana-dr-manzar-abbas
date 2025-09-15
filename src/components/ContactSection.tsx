import React from "react";
// import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 geometric-pattern items-center"
    >
      <div className="container mx-auto px-4 items-center text-center">
        <h2 className="section-heading text-center items-center mx-auto">
          Address
        </h2>

        <div className="lg:w-1/2 items-center w-full mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden items-center mx-auto w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.216823756038!2d67.03570139999997!3d24.911335400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f450596814d%3A0xacfdc8b678417d1a!2sAzakhana%20e%20Doctor%20Manzar%20Abbas!5e0!3m2!1sen!2s!4v1756682977431!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Azakhana e Doctor Manzar Abbas"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
