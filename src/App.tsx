import React, { useState, useCallback, FormEvent } from 'react';
import { Trophy, Users, Newspaper, Calendar, Twitch, Youtube, Instagram, Twitter, Gamepad2, Target, Clock, MapPin, Mail, Phone, ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({
    message: '',
    type: null
  });

  const games = [
    { name: "Mobile Legends", players: 5, roster: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"] },
    { name: "PUBG Mobile", players: 4, roster: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"] },
    { name: "Free Fire", players: 4, roster: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"] },
    { name: "Valorant", players: 5, roster: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"] }
  ];

  const tournaments = [
    { name: "MPL Indonesia Season 13", date: "April 2024", game: "Mobile Legends", prize: "Rp 2.5 Miliar" },
    { name: "PMPL Indonesia 2024", date: "Mei 2024", game: "PUBG Mobile", prize: "Rp 1.8 Miliar" },
    { name: "VCT Pacific League", date: "Juni 2024", game: "Valorant", prize: "Rp 2 Miliar" }
  ];

  const handleGameClick = useCallback((gameName: string) => {
    setActiveGame(activeGame === gameName ? null : gameName);
  }, [activeGame]);

  const handleTournamentRegistration = useCallback((tournamentName: string) => {
    window.open(`https://tournaments.novaesports.id/register/${tournamentName.toLowerCase().replace(/\s+/g, '-')}`, '_blank');
  }, []);

  const handleSocialMediaClick = useCallback((platform: string) => {
    const socialLinks = {
      twitch: 'https://twitch.tv/novaesports',
      youtube: 'https://youtube.com/novaesports',
      instagram: 'https://instagram.com/novaesports.id',
      twitter: 'https://twitter.com/novaesports_id'
    };
    window.open(socialLinks[platform as keyof typeof socialLinks], '_blank');
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        message: 'Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.',
        type: 'success'
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        message: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.',
        type: 'error'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold text-red-500">NOVA ESPORTS</a>
            <div className="hidden lg:flex space-x-8">
              <a href="#home" className="hover:text-red-500 transition">Beranda</a>
              <a href="#games" className="hover:text-red-500 transition">Games</a>
              <a href="#team" className="hover:text-red-500 transition">Tim</a>
              <a href="#tournaments" className="hover:text-red-500 transition">Turnamen</a>
              <a href="#achievements" className="hover:text-red-500 transition">Prestasi</a>
              <a href="#news" className="hover:text-red-500 transition">Berita</a>
              <a href="#contact" className="hover:text-red-500 transition">Kontak</a>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-red-500 transition"
              aria-label={isMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 border-b border-gray-700">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Beranda</a>
                <a href="#games" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Games</a>
                <a href="#team" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Tim</a>
                <a href="#tournaments" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Turnamen</a>
                <a href="#achievements" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Prestasi</a>
                <a href="#news" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Berita</a>
                <a href="#contact" className="hover:text-red-500 transition" onClick={() => setIsMenuOpen(false)}>Kontak</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
            alt="Esports Arena NOVA"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">NOVA ESPORTS INDONESIA</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Tim Esports Profesional #1 di Indonesia</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full text-lg font-semibold transition"
            >
              Gabung Bersama Kami
            </a>
            <a 
              href="#tournaments"
              className="border-2 border-white hover:border-red-500 hover:text-red-500 px-8 py-3 rounded-full text-lg font-semibold transition"
            >
              Lihat Turnamen
            </a>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Gamepad2 className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold">Divisi Game</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition group">
                <div className="mb-4">
                  <img 
                    src={`https://images.unsplash.com/photo-156665${index + 1}142-4c46d43e3a56?auto=format&fit=crop&q=80`}
                    alt={game.name}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <p className="text-gray-400">{game.players} Pemain Aktif</p>
                <button 
                  onClick={() => handleGameClick(game.name)}
                  className="mt-4 text-red-500 hover:text-red-400 font-semibold flex items-center gap-2"
                >
                  Lihat Tim <ChevronDown className={`w-4 h-4 transform transition-transform ${activeGame === game.name ? 'rotate-180' : ''}`} />
                </button>
                {activeGame === game.name && (
                  <div className="mt-4 space-y-2">
                    {game.roster.map((player, idx) => (
                      <p key={idx} className="text-gray-400">{player}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Users className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold">Tim Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-gray-800 rounded-lg overflow-hidden group">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/photo-156665${member}142-4c46d43e3a56?auto=format&fit=crop&q=80`}
                    alt={`Team Member ${member}`}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pemain {member}</h3>
                  <p className="text-gray-400 mb-2">Pro Player Mobile Legends</p>
                  <div className="flex gap-2">
                    <button onClick={() => handleSocialMediaClick('instagram')} className="text-gray-400 hover:text-red-500">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleSocialMediaClick('twitter')} className="text-gray-400 hover:text-red-500">
                      <Twitter className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Target className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold">Turnamen Mendatang</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
                <div className="flex items-center gap-2 text-red-500 mb-4">
                  <Clock className="w-5 h-5" />
                  <span>{tournament.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{tournament.name}</h3>
                <p className="text-gray-400 mb-2">{tournament.game}</p>
                <p className="text-red-500 font-semibold">Hadiah: {tournament.prize}</p>
                <button 
                  onClick={() => handleTournamentRegistration(tournament.name)}
                  className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold transition w-full"
                >
                  Daftar Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Trophy className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold">Prestasi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "MPL ID Season 12", year: "2023", position: "Juara 1", prize: "Rp 1 Miliar" },
              { title: "PMPL ID 2023", year: "2023", position: "Juara", prize: "Rp 800 Juta" },
              { title: "VCT Pacific", year: "2023", position: "Runner Up", prize: "Rp 500 Juta" }
            ].map((achievement, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
                <Trophy className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.year}</p>
                <p className="text-red-500 font-semibold">{achievement.position}</p>
                <p className="text-gray-400 mt-2">Hadiah: {achievement.prize}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Newspaper className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold">Berita Terbaru</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((news) => (
              <div key={news} className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/photo-156665${news}142-4c46d43e3a56?auto=format&fit=crop&q=80`}
                    alt={`Berita ${news}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Berita Terbaru
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Maret {news}, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Kemenangan di Turnamen Terbaru</h3>
                  <p className="text-gray-400 mb-4">Tim kami berhasil meraih kemenangan di turnamen championship terbaru...</p>
                  <a 
                    href={`/news/victory-tournament-${news}`}
                    className="text-red-500 hover:text-red-400 font-semibold flex items-center gap-2"
                  >
                    Baca Selengkapnya <ChevronDown className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <Mail className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-bold">Hubungi Kami</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-400">Jl. Gatot Subroto No. 123, Jakarta Selatan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-400">+62 21 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">contact@novaesports.id</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  ></textarea>
                </div>
                {formStatus.message && (
                  <div className={`p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {formStatus.message}
                  </div>
                )}
                <button 
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NOVA ESPORTS</h3>
              <p className="text-gray-400">Organisasi esports profesional terbaik di Indonesia yang berdedikasi untuk mengembangkan talenta muda.</p>
            </div>
            <div>
              <h4 className="font-bol d mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-red-500">Beranda</a></li>
                <li><a href="#games" className="hover:text-red-500">Games</a></li>
                <li><a href="#team" className="hover:text-red-500">Tim</a></li>
                <li><a href="#tournaments" className="hover:text-red-500">Turnamen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@novaesports.id</li>
                <li>Tel: +62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <button onClick={() => handleSocialMediaClick('twitch')} className="text-gray-400 hover:text-red-500">
                  <Twitch className="w-6 h-6" />
                </button>
                <button onClick={() => handleSocialMediaClick('youtube')} className="text-gray-400 hover:text-red-500">
                  <Youtube className="w-6 h-6" />
                </button>
                <button onClick={() => handleSocialMediaClick('instagram')} className="text-gray-400 hover:text-red-500">
                  <Instagram className="w-6 h-6" />
                </button>
                <button onClick={() => handleSocialMediaClick('twitter')} className="text-gray-400 hover:text-red-500">
                  <Twitter className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 NOVA ESPORTS INDONESIA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;