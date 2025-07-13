import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Message sent successfully!');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-orange-500/20 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Excited to connect and collaborate on innovative ideas or opportunities. Drop me a message through the form or reach out via my social platforms!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="text-gray-300">likkashraja@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="text-gray-300">+91 6374746756</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <span className="text-gray-300">Tamil Nadu, India</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/likkash-r/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Linkedin size={24} className="text-white" />
              </a>
              <a
                href="https://github.com/likkash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Github size={24} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/its_me_likkash/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Instagram size={24} className="text-white" />
              </a>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-amber-500/20 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                    placeholder="Eg: Likkash"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                    placeholder="Eg: R"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  placeholder="Eg:iloveu@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
  type="button"
  onClick={() => {
    emailjs
      .send(
        'likkash_2004',          // ✅ Your Service ID
        'likkash_2025',          // ✅ Your Template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        'NE-cQw9ju2HNFMX3J'      // ✅ Your Public Key
      )
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      })
      .catch(() => toast.error('Failed to send message.'));
  }}
  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
>
  <Send size={20} />
  Send Message
</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
