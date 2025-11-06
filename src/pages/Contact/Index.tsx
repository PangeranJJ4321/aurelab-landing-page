import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Mail, Phone, MapPin, Clock, Instagram, Send, CheckCircle, Zap, Loader2, AlertCircle } from 'lucide-react';
import { mockData } from '../../constants/mock';
import { initializeEmailJS, sendEmail, validateFormData } from '../../lib/emailjs';

export const ContactSection = () => {
  const { contact } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [errors, setErrors] = useState<string[]>([]);

  // Initialize EmailJS on component mount
  useEffect(() => {
    initializeEmailJS();
  }, []);

  const socialIcons = {
    Instagram: Instagram, 
    Threads: () => (
      <svg className="w-5 h-5" viewBox="0 0 640 640" fill="currentColor">
        <path d="M427.5 299.7C429.7 300.6 431.7 301.6 433.8 302.5C463 316.6 484.4 337.7 495.6 363.9C511.3 400.4 512.8 459.7 465.3 507.1C429.1 543.3 385 559.6 322.7 560.1L322.4 560.1C252.2 559.6 198.3 536 162 489.9C129.7 448.9 113.1 391.8 112.5 320.3L112.5 319.8C113 248.3 129.6 191.2 161.9 150.2C198.2 104.1 252.2 80.5 322.4 80L322.7 80C393 80.5 447.6 104 485 149.9C503.4 172.6 517 199.9 525.6 231.6L485.2 242.4C478.1 216.6 467.4 194.6 453 177C423.8 141.2 380 122.8 322.5 122.4C265.5 122.9 222.4 141.2 194.3 176.8C168.1 210.1 154.5 258.3 154 320C154.5 381.7 168.1 429.9 194.3 463.3C222.3 498.9 265.5 517.2 322.5 517.7C373.9 517.3 407.9 505.1 436.2 476.8C468.5 444.6 467.9 405 457.6 380.9C451.5 366.7 440.5 354.9 425.7 346C422 372.9 413.9 394.3 401 410.8C383.9 432.6 359.6 444.4 328.3 446.1C304.7 447.4 282 441.7 264.4 430.1C243.6 416.3 231.4 395.3 230.1 370.8C227.6 322.5 265.8 287.8 325.3 284.4C346.4 283.2 366.2 284.1 384.5 287.2C382.1 272.4 377.2 260.6 369.9 252C359.9 240.3 344.3 234.3 323.7 234.2L323 234.2C306.4 234.2 284 238.8 269.7 260.5L235.3 236.9C254.5 207.8 285.6 191.8 323.1 191.8L323.9 191.8C386.5 192.2 423.8 231.3 427.6 299.5L427.4 299.7L427.5 299.7zM271.5 368.5C272.8 393.6 299.9 405.3 326.1 403.8C351.7 402.4 380.7 392.4 385.6 330.6C372.4 327.7 357.8 326.2 342.2 326.2C337.4 326.2 332.6 326.3 327.8 326.6C284.9 329 270.6 349.8 271.6 368.4L271.5 368.5z"/>
      </svg>
    )
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });
    setErrors([]);

    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        message: formData.message,
      };

      // Send email using EmailJS
      const result = await sendEmail(templateParams);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.'
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Terjadi kesalahan yang tidak terduga. Silakan coba lagi.'
      });
    } finally {
      setIsLoading(false);
    }
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
            <span className="text-[#dfaa1a] text-sm font-medium">Hubungi Kami</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Mari Berkolaborasi</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dfaa1a] via-yellow-400 to-[#dfaa1a]">
              Bersama Kami
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mari berkolaborasi bersama kami dalam menciptakan teknologi yang inklusif, berdampak, dan lebih bermakna.
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
                  Mulai Proyek Anda
                </CardTitle>
                <p className="text-gray-400">Ceritakan visi Anda dan kami akan mewujudkannya</p>
              </CardHeader>
              <CardContent className="p-8">
                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {/* Error Messages */}
                {errors.length > 0 && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <span className="text-red-400 font-medium">Mohon perbaiki kesalahan berikut:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1">
                      {errors.map((error, index) => (
                        <li key={index} className="text-red-400 text-sm">{error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#dfaa1a] focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Nama Anda"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Alamat Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#dfaa1a] focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="email@anda.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Perusahaan/Organisasi</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#dfaa1a] focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Nama perusahaan (opsional)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Detail Proyek</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#dfaa1a] focus:outline-none text-white placeholder-gray-400 resize-none transition-all duration-300"
                      placeholder="Ceritakan tentang proyek, kebutuhan, dan tujuan Anda..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`relative group w-full bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none ${
                      isLoading ? 'cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="inline-block mr-2 h-5 w-5 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
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
                      <h4 className="text-white font-semibold">Telepon</h4>
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
                      <h4 className="text-white font-semibold">Lokasi</h4>
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
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Senin - Jumat</span>
                  <span className="text-white">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Sabtu - Minggu</span>
                  <span className="text-gray-500">Tutup</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-[#dfaa1a]/30 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-3">
                  <Zap className="h-5 w-5 text-[#dfaa1a]" />
                  Terhubung dengan Kami
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
                  Ikuti perjalanan dan inovasi terbaru kami
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
                Pertanyaan yang Sering Diajukan
              </h3>
              <p className="text-gray-300 text-lg">
                Jawaban cepat untuk pertanyaan umum tentang layanan dan proses kami
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