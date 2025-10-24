import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { mockData } from '../../constants/mock';

interface PositionDetailProps {
  positionId: string;
}

const PositionDetail: React.FC<PositionDetailProps> = ({ positionId }) => {
  const position = mockData.positions.find(p => p.id === parseInt(positionId));

  if (!position) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Posisi tidak ditemukan
          </h2>
          <p className="text-gray-600 mb-4">
            Posisi yang Anda cari tidak tersedia atau telah dihapus.
          </p>
          <Button 
            onClick={() => window.location.href = '/positions'}
            className="bg-transparent border-[#dfaa1a] text-[#dfaa1a] hover:bg-white hover:text-[#dfaa1a]"
          >
            Kembali ke Daftar Posisi
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleApplyClick = () => {
    window.location.href = `/apply/${positionId}`;
  };

  const handleBackClick = () => {
    window.location.href = '/positions';
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
              ← Kembali ke Daftar Posisi
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                {position.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                <span className="bg-[#dfaa1a]/20 text-[#dfaa1a] px-3 py-1 rounded-full font-medium border border-[#dfaa1a]/30">
                  {position.category}
                </span>
                <span className="bg-gray-800 text-[#dfaa1a] px-3 py-1 rounded-full font-medium border border-[#dfaa1a]/30">
                  {position.type}
                </span>
                <span className="text-gray-400">📍 {position.location}</span>
                <span className="text-gray-400">⏰ {position.experience}</span>
              </div>
              <div className="text-lg font-semibold text-[#dfaa1a]">
                {position.salary}
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 md:ml-6">
              <Button 
                size="lg" 
                onClick={handleApplyClick}
                className="bg-[#dfaa1a] hover:bg-[#dfaa1a]/80 text-black font-semibold px-8"
              >
                Lamar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">
                  Deskripsi Pekerjaan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {position.description}
                </p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">
                  Persyaratan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {position.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#dfaa1a] mr-3 mt-1">•</span>
                      <span className="text-gray-300">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">
                  Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {position.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#dfaa1a] mr-3 mt-1">•</span>
                      <span className="text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">
                  Benefit & Fasilitas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {position.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#dfaa1a] mr-3 mt-1">✓</span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Info */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">
                  Informasi Posisi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-1">Kategori</h4>
                  <p className="text-gray-300">{position.category}</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Lokasi</h4>
                  <p className="text-gray-300">{position.location}</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Tipe Pekerjaan</h4>
                  <p className="text-gray-300">{position.type}</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Pengalaman</h4>
                  <p className="text-gray-300">{position.experience}</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Gaji</h4>
                  <p className="text-[#dfaa1a] font-semibold">{position.salary}</p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-1">Diposting</h4>
                  <p className="text-gray-300">{formatDate(position.postedDate)}</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Deadline Lamaran</h4>
                  <p className="text-[#dfaa1a] font-semibold">{formatDate(position.applicationDeadline)}</p>
                </div>
              </CardContent>
            </Card>

            {/* Apply Button */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardContent className="pt-6">
                <Button 
                  size="lg" 
                  onClick={handleApplyClick}
                  className="w-full bg-[#dfaa1a] hover:bg-[#dfaa1a]/80 text-black font-semibold"
                >
                  Lamar Sekarang
                </Button>
                <p className="text-xs text-gray-400 text-center mt-2">
                  Proses lamaran akan memakan waktu 5-10 menit
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">
                  Butuh Bantuan?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">
                  Ada pertanyaan tentang posisi ini? Hubungi tim HR kami.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-[#dfaa1a] bg-transparent text-[#dfaa1a] hover:bg-white hover:text-[#dfaa1a]"
                  onClick={() => window.location.href = '/contact'}
                >
                  Hubungi HR
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related Positions */}
      <div className="bg-gray-900/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Posisi Lainnya yang Mungkin <span className="text-[#dfaa1a]">Menarik</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.positions
              .filter(p => p.id !== position.id && p.category === position.category)
              .slice(0, 2)
              .map((relatedPosition) => (
                <Card key={relatedPosition.id} className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20 hover:border-[#dfaa1a]/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-white mb-2">
                      {relatedPosition.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {relatedPosition.description.substring(0, 100)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#dfaa1a] font-semibold text-sm">
                        {relatedPosition.salary}
                      </span>
                      <Button 
                        size="sm"
                        onClick={() => window.location.href = `/positions/${relatedPosition.id}`}
                        className="bg-[#dfaa1a] hover:bg-[#dfaa1a]/80 text-black font-semibold"
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PositionDetail;
