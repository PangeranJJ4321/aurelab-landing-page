import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Crown,
  Code,
  Globe,
  Users,
  CheckCircle,
  Zap,
  ArrowRight,
} from "lucide-react";
import { mockData } from "../../constants/mock";
import { useModal } from "../../App";

export const TeamSection = () => {
  const { team } = mockData;
  const { openPositionsModal } = useModal();

  const getIcon = (division: string) => {
    switch (division) {
      case "Founder":
        return Crown;
      case "AureCore":
        return Code;
      case "AureNet":
        return Globe;
      default:
        return Users;
    }
  };

  const getGradient = (index: number) => {
    const gradients = [
      "from-[#dfaa1a] to-yellow-500",
      "from-blue-500 to-cyan-400",
      "from-purple-500 to-violet-500",
      "from-green-500 to-emerald-400",
    ];
    return gradients[index % gradients.length];
  };

  const getBorderColor = (index: number) => {
    const colors = [
      "border-[#dfaa1a]/30 hover:border-[#dfaa1a]/60",
      "border-blue-500/30 hover:border-blue-500/60",
      "border-purple-500/30 hover:border-purple-500/60",
      "border-green-500/30 hover:border-green-500/60",
    ];
    return colors[index % colors.length];
  };

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="team-circuit"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M100 0v200M0 100h200"
                stroke="#dfaa1a"
                strokeWidth="1"
                opacity="0.3"
              />
              <circle cx="0" cy="0" r="3" fill="#dfaa1a" opacity="0.5" />
              <circle cx="200" cy="0" r="3" fill="#dfaa1a" opacity="0.5" />
              <circle cx="0" cy="200" r="3" fill="#dfaa1a" opacity="0.5" />
              <circle cx="200" cy="200" r="3" fill="#dfaa1a" opacity="0.5" />
              <circle cx="100" cy="100" r="5" fill="#dfaa1a" opacity="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-circuit)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#dfaa1a] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#dfaa1a]/10 border border-[#dfaa1a]/30 rounded-full px-4 py-2 mb-6">
            <Users className="h-4 w-4 text-[#dfaa1a]" />
            <span className="text-[#dfaa1a] text-sm font-medium">
              Our Team Structure
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Elite Technology</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dfaa1a] via-yellow-400 to-[#dfaa1a]">
              Task Force
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-5xl mx-auto text-center leading-relaxed">
            Kami adalah tim lintas disiplin yang percaya bahwa empati adalah
            inti dari inovasi dan kolaborasi adalah kunci untuk menyalakan
            potensi yang belum terlihat. Kami bekerja bukan hanya untuk
            menciptakan solusi, tetapi untuk menyalakan potensi yang jarang
            tersentuh oleh sistem selama ini (Ignite the Unseen).
          </p>
        </div>

        {/* Team Structure Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {team.structure.map((member, index) => {
            const IconComponent = getIcon(member.division);
            const gradient = getGradient(index);
            const borderColor = getBorderColor(index);

            return (
              <Card
                key={index}
                className={`group bg-gradient-to-br from-gray-900/80 to-black/80 border-2 ${borderColor} backdrop-blur-lg shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Card Header with Gradient Background */}
                <CardHeader className="relative overflow-hidden pb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10`}
                  ></div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`p-4 bg-gradient-to-r ${gradient} rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white group-hover:text-[#dfaa1a] transition-colors duration-300">
                        {member.division}
                      </CardTitle>
                      <p className="text-gray-400 text-sm font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Glowing Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                </CardHeader>

                <CardContent className="p-8">
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    {member.description}
                  </p>

                  <div className="space-y-4">
                    <h5 className="font-bold text-white text-sm uppercase tracking-wide flex items-center gap-2">
                      <Zap className="h-4 w-4 text-[#dfaa1a]" />
                      Key Expertise
                    </h5>
                    <div className="grid grid-cols-1 gap-3">
                      {member.responsibilities.map(
                        (responsibility, respIndex) => (
                          <div
                            key={respIndex}
                            className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 group-hover:border-[#dfaa1a]/20 transition-all duration-300"
                          >
                            <CheckCircle className="h-4 w-4 text-[#dfaa1a] flex-shrink-0" />
                            <span className="text-gray-300 text-sm font-medium">
                              {responsibility}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Join Team CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg border border-[#dfaa1a]/20 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a]/5 to-yellow-500/5"></div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Join Us to Ignite The Unseen
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Mari berkolaborasi bersama kami dalam menciptakan teknologi yang
                inklusif, berdampak, dan lebih bermakna.
                
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openPositionsModal}
                  className="relative group bg-gradient-to-r from-[#dfaa1a] to-yellow-500 hover:from-yellow-500 hover:to-[#dfaa1a] text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                  <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#dfaa1a] to-yellow-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="border border-[#dfaa1a]/50 text-[#dfaa1a] hover:bg-[#dfaa1a] hover:text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  Learn About Culture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
