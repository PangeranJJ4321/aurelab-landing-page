import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Heart, MapPin, Clock, DollarSign, Upload } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { mockData } from '../../constants/mock';

interface Position {
  id: number;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  postedDate: string;
  applicationDeadline: string;
}

const Positions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = ['All', 'Product Builder', 'Product Designer', 'Tim Marketing', 'Tim Support'];

  const filteredPositions = useMemo(() => {
    return mockData.positions.filter((position: Position) => {
      const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          position.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || position.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleApplyClick = (positionId: number) => {
    // Navigate to position detail page
    window.location.href = `/positions/${positionId}`;
  };

  const toggleFavorite = (positionId: number) => {
    setFavorites(prev => 
      prev.includes(positionId) 
        ? prev.filter(id => id !== positionId)
        : [...prev, positionId]
    );
  };

  return (
    <div className="min-h-screen bg-black page-transition" style={{ 
      transition: 'opacity 0.2s ease-in-out',
      backgroundColor: '#000000'
    }}>
      <Header />
      {/* Header Section */}
      <div className="bg-black border-b border-[#dfaa1a]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Posisi yang <span className="text-[#dfaa1a]">Tersedia</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bergabunglah dengan tim AureLab dan jadilah bagian dari transformasi digital Indonesia. 
              Temukan posisi yang sesuai dengan passion dan keahlian Anda.
            </p>
          </div>
        </div>
      </div>


      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Input */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-white mb-2">
                Cari Posisi
              </label>
              <input
                type="text"
                id="search"
                placeholder="Cari berdasarkan judul atau deskripsi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                Kategori
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#dfaa1a] focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          {/* <p className="text-gray-300">
            Menampilkan <span className="font-semibold text-[#dfaa1a]">{filteredPositions.length}</span> posisi dari {mockData.positions.length} posisi tersedia
          </p> */}
          <p className="text-gray-300">
            Menampilkan <span className="font-semibold text-[#dfaa1a]">{0}</span> posisi dari {0} posisi tersedia
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPositions.length === 0 && filteredPositions.map((position: Position) => (
            <Card key={position.id} className="bg-gray-900/50 backdrop-blur-lg border border-[#dfaa1a]/20 hover:border-[#dfaa1a]/40 transition-all duration-300 relative">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-white pr-8">
                    {position.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#dfaa1a]/20 text-[#dfaa1a] text-xs font-medium px-2.5 py-0.5 rounded-full border border-[#dfaa1a]/30">
                      {position.type}
                    </span>
                    <button
                      onClick={() => toggleFavorite(position.id)}
                      className="p-1 hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <Heart 
                        size={16} 
                        className={favorites.includes(position.id) ? 'fill-[#dfaa1a] text-[#dfaa1a]' : 'text-gray-400 hover:text-[#dfaa1a]'}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <span className="bg-gray-800 text-[#dfaa1a] text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 border border-[#dfaa1a]/30">
                    {position.category}
                  </span>
                  <span className="flex items-center text-gray-400">
                    <MapPin size={12} className="mr-1" />
                    {position.location}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {position.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 flex items-center">
                      <Clock size={12} className="mr-1" />
                      Pengalaman:
                    </span>
                    <span className="font-medium text-white">{position.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 flex items-center">
                      <DollarSign size={12} className="mr-1" />
                      Gaji:
                    </span>
                    <span className="font-medium text-[#dfaa1a]">{position.salary}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Deadline:</span>
                    <span className="font-medium text-white">{formatDate(position.applicationDeadline)}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleApplyClick(position.id)}
                    className="flex-1 bg-[#dfaa1a] hover:bg-[#dfaa1a]/80 text-black font-semibold"
                  >
                    Lihat Detail
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.href = `/apply/${position.id}`}
                    className="flex-1 border-[#dfaa1a] bg-transparent text-[#dfaa1a] hover:bg-white hover:text-[#dfaa1a]"
                  >
                    Lamar Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPositions.length !== 0 && (
          <div className="text-center py-12">
            <div className="text-[#dfaa1a] text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Tidak ada posisi yang ditemukan
            </h3>
            <p className="text-gray-300">
              Coba ubah kata kunci pencarian atau filter yang Anda gunakan.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-[#dfaa1a] to-yellow-500 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tidak menemukan posisi yang sesuai?
          </h2>
          <p className="text-xl mb-8 text-black/80">
            Kirimkan CV Anda kepada kami dan kami akan menghubungi Anda ketika ada posisi yang sesuai.
          </p>
          <Button 
            size="lg" 
            className="bg-black text-[#dfaa1a] hover:bg-gray-900 font-semibold"
            onClick={() => window.location.href = '/apply'}
          >
            Kirim CV
          </Button>
        </div>
      </div> */}
      <Footer />
      
      {/* Floating Send CV Button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => window.location.href = '/apply'}
          className="bg-[#dfaa1a] hover:bg-[#dfaa1a]/80 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Upload size={20} className="mr-2" />
          Kirim CV
        </Button>
      </div> */}
    </div>
  );
};

export default Positions;
