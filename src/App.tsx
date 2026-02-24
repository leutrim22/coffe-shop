/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Wifi, 
  Users, 
  Award, 
  ChevronRight,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-coffee-dark/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Coffee className="text-coffee-medium" />
        <span className="font-serif text-2xl font-bold tracking-tight">The Perfect Brew</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#about" className="hover:text-coffee-light transition-colors">About</a>
        <a href="#menu" className="hover:text-coffee-light transition-colors">Menu</a>
        <a href="#visit" className="hover:text-coffee-light transition-colors">Visit</a>
      </div>
      <button className="olive-button text-sm uppercase tracking-widest py-2 px-6">
        Order Now
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
          Your Daily Coffee, <br />
          <span className="italic text-coffee-light">Made Perfect ☕</span>
        </h1>
        <p className="text-xl md:text-2xl text-coffee-medium/80 max-w-lg mb-10 leading-relaxed">
          Freshly brewed coffee, cozy vibes, and the perfect place to start your day.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="olive-button flex items-center gap-2">
            View Menu <ChevronRight size={18} />
          </button>
          <button className="outline-button">
            Visit Us
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="pill-image w-full max-w-md mx-auto shadow-2xl overflow-hidden">
          <img 
            src="https://picsum.photos/seed/coffee-hero/800/1200" 
            alt="Barista pouring coffee" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
          <p className="font-serif italic text-2xl mb-2">"The best espresso in the city, hands down."</p>
          <p className="text-sm uppercase tracking-widest text-coffee-light font-bold">— Local Guide</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
        <div className="space-y-4 pt-12">
          <img 
            src="https://picsum.photos/seed/coffee-shop-1/400/600" 
            alt="Coffee shop interior" 
            className="rounded-3xl w-full aspect-[3/4] object-cover"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://picsum.photos/seed/coffee-shop-2/400/400" 
            alt="Latte art" 
            className="rounded-3xl w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-4">
          <img 
            src="https://picsum.photos/seed/coffee-shop-3/400/400" 
            alt="Pastries" 
            className="rounded-3xl w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://picsum.photos/seed/coffee-shop-4/400/600" 
            alt="People working" 
            className="rounded-3xl w-full aspect-[3/4] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      <div className="order-1 md:order-2">
        <h2 className="text-5xl md:text-6xl mb-8">More Than Just Coffee</h2>
        <div className="space-y-6 text-lg text-coffee-medium/80 leading-relaxed">
          <p>
            We’re a local coffee shop serving high-quality coffee made from carefully selected beans. 
            Our journey started with a simple passion: to create a space where the community could 
            gather over a truly exceptional cup.
          </p>
          <p>
            Whether you’re here to work, relax, or catch up with friends — you’re always welcome. 
            Every bean is roasted to perfection, and every pastry is baked fresh daily in our kitchen.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-3xl mb-2">10+</h4>
            <p className="text-sm uppercase tracking-widest text-coffee-light font-bold">Years of Brewing</p>
          </div>
          <div>
            <h4 className="text-3xl mb-2">100%</h4>
            <p className="text-sm uppercase tracking-widest text-coffee-light font-bold">Organic Beans</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Menu = () => {
  const favorites = [
    { name: "Espresso", price: "$3.50", desc: "Pure, intense, and rich.", img: "https://picsum.photos/seed/espresso/400/400" },
    { name: "Cappuccino", price: "$4.50", desc: "Perfect balance of espresso and foam.", img: "https://picsum.photos/seed/cappuccino/400/400" },
    { name: "Iced Latte", price: "$5.00", desc: "Smooth espresso over cold milk and ice.", img: "https://picsum.photos/seed/icedlatte/400/400" },
    { name: "Fresh Pastries", price: "From $3.00", desc: "Baked fresh every single morning.", img: "https://picsum.photos/seed/pastry/400/400" },
  ];

  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Customer Favorites</h2>
          <p className="text-coffee-medium/60 uppercase tracking-[0.2em] text-sm font-bold">Handcrafted with love</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {favorites.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl">{item.name}</h3>
                  <span className="text-coffee-light font-bold">{item.price}</span>
                </div>
                <p className="text-coffee-medium/70 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Award className="w-8 h-8" />, title: "Premium coffee beans", desc: "Sourced from sustainable farms worldwide." },
    { icon: <Users className="w-8 h-8" />, title: "Friendly baristas", desc: "Expertly trained to craft your perfect cup." },
    { icon: <Coffee className="w-8 h-8" />, title: "Cozy atmosphere", desc: "Designed for comfort, work, and relaxation." },
    { icon: <Wifi className="w-8 h-8" />, title: "Free Wi-Fi", desc: "High-speed internet for all our guests." },
  ];

  return (
    <section className="py-24 px-6 bg-coffee-dark text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="space-y-4">
              <div className="text-coffee-light">{f.icon}</div>
              <h3 className="text-2xl">{f.title}</h3>
              <p className="text-cream/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => (
  <section id="visit" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-5xl md:text-6xl mb-8">Visit Our Coffee Shop</h2>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
              <MapPin className="text-coffee-medium" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 uppercase tracking-wider">Location</h4>
              <p className="text-lg text-coffee-medium/80">123 Brew Street, Coffee City, CC 54321</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
              <Clock className="text-coffee-medium" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 uppercase tracking-wider">Hours</h4>
              <p className="text-lg text-coffee-medium/80">Mon–Sun | 7AM – 9PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <button className="olive-button">
            Get Directions
          </button>
        </div>
      </div>
      
      <div className="rounded-[40px] overflow-hidden shadow-2xl h-[500px] relative group">
        <img 
          src="https://picsum.photos/seed/map-placeholder/1200/800" 
          alt="Map location" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-coffee-dark/20 flex items-center justify-center">
          <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 bg-coffee-dark rounded-full flex items-center justify-center">
              <Coffee className="text-white w-5 h-5" />
            </div>
            <div>
              <p className="font-bold">The Perfect Brew</p>
              <p className="text-xs text-coffee-medium/60">Open until 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 px-6 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/cta-bg/1920/1080?blur=5" 
        alt="Coffee background" 
        className="w-full h-full object-cover opacity-20"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-6xl md:text-8xl mb-8">Stop by today and taste the difference.</h2>
      <button className="olive-button text-xl px-12 py-5">
        Visit Us Today
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-coffee-dark/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Coffee className="text-coffee-medium" />
        <span className="font-serif text-xl font-bold">The Perfect Brew</span>
      </div>
      
      <div className="flex gap-6">
        <a href="#" className="w-10 h-10 rounded-full border border-coffee-dark/10 flex items-center justify-center hover:bg-coffee-dark hover:text-white transition-all">
          <Instagram size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-coffee-dark/10 flex items-center justify-center hover:bg-coffee-dark hover:text-white transition-all">
          <Facebook size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-coffee-dark/10 flex items-center justify-center hover:bg-coffee-dark hover:text-white transition-all">
          <Twitter size={18} />
        </a>
      </div>
      
      <p className="text-sm text-coffee-medium/60">
        © 2026 The Perfect Brew. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-coffee-light selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Features />
      <Location />
      <CTA />
      <Footer />
    </div>
  );
}
