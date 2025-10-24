import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ArrowLeft, Upload, FileText, User, Briefcase } from 'lucide-react';
import { mockData } from '../../constants/mock';

interface ApplicationProps {
  positionId?: string;
}

const Application: React.FC<ApplicationProps> = ({ positionId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    education: '',
    skills: '',
    motivation: '',
    expectedSalary: '',
    availableDate: '',
    portfolio: '',
    linkedin: '',
    github: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Get position data if positionId is provided
  const position = positionId ? mockData.positions.find(p => p.id === parseInt(positionId)) : null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = Array.from(e.target.files || []);
    
    // Validate file size (5MB max)
    const validFiles = files.filter(file => {
      if (file.size > 5 * 1024 * 1024) {
        alert(`File ${file.name} terlalu besar. Maksimal 5MB.`);
        return false;
      }
      return true;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
    
    // Reset input value to allow same file selection
    e.target.value = '';
  };

  const handleFileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (uploadedFiles.length === 0) {
      alert('Silakan upload CV/Resume terlebih dahulu.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Lamaran Anda telah berhasil dikirim! Tim HR kami akan menghubungi Anda dalam 1-3 hari kerja.');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        experience: '',
        education: '',
        skills: '',
        motivation: '',
        expectedSalary: '',
        availableDate: '',
        portfolio: '',
        linkedin: '',
        github: ''
      });
      setUploadedFiles([]);
      setCurrentStep(1);
    }, 2000);
  };

  const handleBackClick = () => {
    if (positionId) {
      window.location.href = `/positions/${positionId}`;
    } else {
      window.location.href = '/positions';
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black page-transition" style={{ 
      transition: 'opacity 0.2s ease-in-out',
      backgroundColor: '#000000'
    }}>
      <Header />
      
      {/* Header Section */}
      <div className="bg-black border-b border-[#dfaa1a]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={handleBackClick}
              className="bg-transparent border-[#dfaa1a] text-[#dfaa1a] hover:bg-white hover:text-[#dfaa1a]"
            >
              <ArrowLeft size={16} className="mr-2" />
              Kembali
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              Lamar Posisi di <span className="text-[#dfaa1a]">AureLab</span>
            </h1>
            {position && (
              <p className="text-xl text-gray-300 mb-4">
                {position.title}
              </p>
            )}
            <p className="text-gray-400">
              Isi form di bawah ini dengan lengkap untuk melamar posisi ini
            </p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= step 
                  ? 'bg-[#dfaa1a] text-black' 
                  : 'bg-gray-700 text-gray-400'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-0.5 mx-2 ${
                  currentStep > step ? 'bg-[#dfaa1a]' : 'bg-gray-700'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Langkah {currentStep} dari 3: {
              currentStep === 1 ? 'Informasi Personal' :
              currentStep === 2 ? 'Pengalaman & Kualifikasi' :
              'Dokumen & Portfolio'
            }
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <User size={20} className="mr-2 text-[#dfaa1a]" />
                  Informasi Personal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                      placeholder="contoh@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Alamat *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                      placeholder="Kota, Provinsi"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Gaji yang Diharapkan
                    </label>
                    <input
                      type="text"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                      placeholder="Rp 5.000.000 - Rp 8.000.000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Tanggal Mulai Bekerja
                    </label>
                    <input
                      type="date"
                      name="availableDate"
                      value={formData.availableDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Experience & Qualifications */}
          {currentStep === 2 && (
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Briefcase size={20} className="mr-2 text-[#dfaa1a]" />
                  Pengalaman & Kualifikasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Pengalaman Kerja *
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                    placeholder="Jelaskan pengalaman kerja Anda secara detail..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Pendidikan *
                  </label>
                  <textarea
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                    placeholder="Jelaskan latar belakang pendidikan Anda..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Keahlian & Skills *
                  </label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                    placeholder="Sebutkan keahlian dan skills yang Anda miliki..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Motivasi Melamar *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                    placeholder="Jelaskan mengapa Anda tertarik dengan posisi ini dan perusahaan kami..."
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Documents & Portfolio */}
          {currentStep === 3 && (
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <FileText size={20} className="mr-2 text-[#dfaa1a]" />
                  Dokumen & Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Upload CV/Resume *
                  </label>
                  <div className="border-2 border-dashed border-[#dfaa1a]/30 rounded-lg p-6 text-center">
                    <Upload size={32} className="mx-auto text-[#dfaa1a] mb-2" />
                    <p className="text-gray-300 mb-2">Upload CV/Resume Anda</p>
                    <p className="text-gray-400 text-sm mb-4">PDF, DOC, DOCX (Max 5MB)</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="cv-upload"
                    />
                    <button
                      type="button"
                      onClick={handleFileClick}
                      className="bg-[#dfaa1a] text-black px-4 py-2 rounded-md cursor-pointer hover:bg-[#dfaa1a]/80 font-semibold"
                    >
                      Pilih File
                    </button>
                  </div>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4">
                      <p className="text-white text-sm mb-2">File yang diupload:</p>
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-800 p-2 rounded">
                          <span className="text-gray-300 text-sm">{file.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[#dfaa1a] text-sm">✓</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-400 hover:text-red-300 text-sm"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Portfolio/Website
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    GitHub Profile
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
                    placeholder="https://github.com/yourusername"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="bg-transparent border-[#dfaa1a] text-[#dfaa1a] hover:bg-white hover:text-[#dfaa1a] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sebelumnya
            </Button>

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-[#dfaa1a] hover:bg-[#dfaa1a]/80 text-black font-semibold"
              >
                Selanjutnya
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#dfaa1a] hover:bg-[#dfaa1a]/80 text-black font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Lamaran'}
              </Button>
            )}
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Application;
