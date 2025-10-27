import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { mockData } from '../constants/mock';

interface Position {
  id: number;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
}

interface PositionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PositionsModal: React.FC<PositionsModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPositions = useMemo(() => {
    return mockData.positions.filter((position: Position) => {
      const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          position.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
    });
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-black w-full max-w-7xl min-h-[80vh] flex flex-col p-8">
        {/* Search Section */}
        <div className="w-full mb-8 flex justify-end">
  <div className="flex items-center border-2 border-[#dfaa1a] rounded-lg px-4 py-3 bg-black w-full max-w-md">
    <input
      type="text"
      placeholder="Cari posisi...."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="flex-1 bg-transparent text-white placeholder-[#dfaa1a] focus:outline-none"
    />
    <Search className="text-[#dfaa1a] ml-2" size={24} />
  </div>
</div>


        {/* Main Content Area */}
        <div className="flex-1 w-full border-2 border-[#dfaa1a] rounded-lg p-12 flex items-center justify-center min-h-[400px]">
          {filteredPositions.length === 0 ? (
            <p className="text-[#dfaa1a] text-xl">Saat ini, tidak ada posisi yang tersedia</p>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPositions.map((position: Position) => (
                <div
                  key={position.id}
                  className="bg-black border-2 border-[#dfaa1a]/30 rounded-lg p-6 hover:border-[#dfaa1a] transition-all duration-300"
                >
                  <h3 className="text-[#dfaa1a] text-xl font-semibold mb-3">
                    {position.title}
                  </h3>
                  <div className="space-y-2 text-white mb-4">
                    <p className="text-sm text-[#dfaa1a]">{position.type} • {position.location}</p>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {position.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#dfaa1a]">{position.experience}</span>
                    <span className="text-[#dfaa1a] font-medium">{position.salary}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

