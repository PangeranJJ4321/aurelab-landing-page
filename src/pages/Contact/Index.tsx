import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Twitter, Send, CheckCircle, Zap } from 'lucide-react';
import { mockData } from '../../constants/mock';

export const ContactSection = () => {
  const { contact } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const socialIcons = {
    LinkedIn: Linkedin,
    Instagram: Instagram, 
    Twitter: Twitter
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Circuit Animation */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 0v120M0 60h120" stroke="#dfaa1a" strokeWidth="0.5" opacity="0.4"/>
              <circle cx="0" cy="0" r="2" fill="#dfaa1a" opacity="0.6"/>
              <circle cx="120" cy="0" r="2" fill="#dfaa1a" opacity="0.6"/>
              <circle cx="60" cy="60" r="3" fill="#dfaa1a" opacity="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-circuit)"/>
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#dfaa1a] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#dfaa1a]/10 border border-[#dfaa1a]/30 rounded-full px-4 py-2 mb-6">
            <Mail className="h-4 w-4 text-[#dfaa1a]" />
            <span className="text-[#dfaa1a] text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Let's Build the</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dfaa1a] via-yellow-400 to-[#dfaa1a]">
              Future Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Siap memulai revolusi digital? Tim expert AureLab siap membantu mewujudkan 
            visi teknologi Anda dengan solusi inovatif yang sustainable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-[#dfaa1a]/30 backdrop-blur-lg shadow-2xl shadow-[#dfaa1a]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-lg">
                    <Send className="h-6 w-6 text-black" />
                  </div>
                  Start Your Project
                </CardTitle>
                <p className="text-gray-400">Tell us about your vision and we'll make it reality</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#dfaa1a] focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#dfaa1a] focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#dfaa1a] focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Company name (optional)"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#dfaa1a] focus:outline-none text-white placeholder-gray-400 resize-none transition-all duration-300"
                      placeholder="Tell us about your project, requirements, and goals..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="relative group w-full bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <Send className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 backdrop-blur-lg hover:border-[#dfaa1a]/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-xl">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-400 text-sm">{contact.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 backdrop-blur-lg hover:border-blue-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-gray-400 text-sm">{contact.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 backdrop-blur-lg hover:border-green-500/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Location</h4>
                      <p className="text-gray-400 text-sm">{contact.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Operating Hours */}
            <Card className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-purple-500/30 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-400" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-[#dfaa1a]/30 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-3">
                  <Zap className="h-5 w-5 text-[#dfaa1a]" />
                  Connect With Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {contact.socialMedia.map((social, index) => {
                    const IconComponent = socialIcons[social.platform as keyof typeof socialIcons];
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800/50 text-gray-400 hover:bg-[#dfaa1a] hover:text-black rounded-lg transition-all duration-300 hover:scale-110"
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-gray-400 text-xs mt-3">
                  Follow our journey and latest innovations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg border border-[#dfaa1a]/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#dfaa1a]/5 via-transparent to-purple-500/5"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-300 text-lg">
                Quick answers to common questions about our services and process
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dfaa1a]" />
                    Berapa durasi pengembangan aplikasi?
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Timeline bervariasi sesuai kompleksitas. MVP umumnya 6-12 minggu, 
                    aplikasi enterprise 3-6 bulan dengan metodologi agile development.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dfaa1a]" />
                    Bagaimana proses konsultasi awal?
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Konsultasi gratis 60 menit untuk analisis kebutuhan, technical assessment, 
                    dan roadmap solution architecture yang komprehensif.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dfaa1a]" />
                    Teknologi stack apa yang digunakan?
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Modern tech stack: React/Next.js, Node.js, Python, cloud-native architecture 
                    dengan fokus pada scalability dan security best practices.
                  </p>
                </div>
                
                <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#dfaa1a]" />
                    Apakah ada support post-launch?
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Ya, maintenance package dengan 24/7 monitoring, bug fixes, 
                    performance optimization, dan feature updates berkelanjutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};