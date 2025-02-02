import React from 'react';
import { Menu, X, Instagram, Linkedin, Mail, ArrowRight, Store, Users, Palette, Globe } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-purple-500 font-bold">MTJ</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="hover:text-purple-500 px-3 py-2">About</a>
                <a href="#services" className="hover:text-purple-500 px-3 py-2">Services</a>
                <a href="#portfolio" className="hover:text-purple-500 px-3 py-2">Portfolio</a>
                <a href="#testimonials" className="hover:text-purple-500 px-3 py-2">Testimonials</a>
                <a href="#contact" className="hover:text-purple-500 px-3 py-2">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="hover:text-purple-500 block px-3 py-2">About</a>
              <a href="#services" className="hover:text-purple-500 block px-3 py-2">Services</a>
              <a href="#portfolio" className="hover:text-purple-500 block px-3 py-2">Portfolio</a>
              <a href="#testimonials" className="hover:text-purple-500 block px-3 py-2">Testimonials</a>
              <a href="#contact" className="hover:text-purple-500 block px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <header className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="mb-8">
            <img
              src=".//1713758404882.jpg"
              alt="Mohamed Tawfiq J"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-500"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mohamed Tawfiq J</h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Helping Business Owners Thrive Online – Boosting Sales, Followers, and Brand Presence
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black via-purple-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            <p>
              I am Mohamed Tawfiq J, a passionate business growth specialist and e-commerce developer. 
              I help business owners boost their online presence, increase their Instagram followers, 
              and create stunning e-commerce websites at budget-friendly prices. With a focus on creativity 
              and results, I also design posters, banners, and marketing materials tailored to your brand's needs.
            </p>
            <p className="mt-4">
              With over 3 years of experience in digital marketing and web development, I specialize in helping 
              small and medium-sized businesses grow their online presence. My goal is to provide affordable, 
              high-quality solutions that deliver real results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-purple-950 via-black to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Globe className="w-12 h-12 text-purple-500" />}
              title="Boost Online Business Presence"
              description="I create tailored strategies to increase your visibility on search engines and social media platforms."
            />
            <ServiceCard 
              icon={<Users className="w-12 h-12 text-purple-500" />}
              title="Increase Social Media Followers"
              description="Through targeted campaigns and engaging content, I help you grow your Instagram audience organically."
            />
            <ServiceCard 
              icon={<Store className="w-12 h-12 text-purple-500" />}
              title="E-Commerce Development"
              description="I design and develop user-friendly, budget-friendly e-commerce websites that drive sales."
            />
            <ServiceCard 
              icon={<Palette className="w-12 h-12 text-purple-500" />}
              title="Poster & Banner Design"
              description="I create eye-catching designs that align with your brand and attract customers."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-black via-purple-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard 
              image="https://themewagon.com/wp-content/uploads/2020/10/MaleFashion.png"
              title="E-Commerce Website for for MALE fashion"
              description="Designed and developed a fully functional e-commerce website for a local clothing store, resulting in a 40% increase in online sales within 3 months."
            />
            <PortfolioCard 
              image="https://www.vocso.com/blog/wp-content/uploads/2018/07/chumbak.png"
              title="Instagram Growth for CHUMBAK"
              description="Grew Instagram followers from 1,000 to 10,000 in 6 months through targeted campaigns and engaging content."
            />
            <PortfolioCard 
              image="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              title="Marketing Campaign Design"
              description="Created a comprehensive set of marketing materials including posters, banners, and social media content that increased brand engagement by 65%."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-950 via-black to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What My Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              text="Mohamed transformed our online presence completely. Our e-commerce sales have never been better!"
              author="Sarah Johnson"
              role="CEO, XYZ Store"
            />
            <TestimonialCard 
              text="The Instagram growth strategy Mohamed implemented helped us reach our target audience effectively."
              author="Michael Chen"
              role="Marketing Director, ABC Brand"
            />
            <TestimonialCard 
              text="Professional, creative, and results-driven. Exactly what we needed for our brand's growth."
              author="Emma Williams"
              role="Founder, Style Co."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black via-purple-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Work Together</h2>
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
            <div className="mt-12 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-purple-500">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2023 Mohamed Tawfiq J. All Rights Reserved.</p>
            <div className="mt-2">
              <a href="#" className="hover:text-purple-500">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-purple-500">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors border border-purple-900/50">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function PortfolioCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform border border-purple-900/50">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ text, author, role }: { text: string; author: string; role: string }) {
  return (
    <div className="p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-purple-900/50">
      <p className="text-gray-300 mb-4">"{text}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  );
}

export default App;
