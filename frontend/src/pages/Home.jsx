import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingBag, ArrowRight, ShieldCheck, Truck, Star } from 'lucide-react';
import { toast } from 'react-toastify';

const Home = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const user = useSelector((state) => state.users.users);

  return (
    <div className="min-h-screen bg-[#ECDFCC] text-[rgb(67,78,50)] font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex  items-center justify-center bg-[rgb(46,53,36)] overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[rgb(222,234,60)] opacity-5 skew-x-12 translate-x-20" />
        
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#ECDFCC] mb-6">
            Timeless Elegance. <br /> 
            <span className="text-[rgb(222,234,60)]">Modern Living.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#ECDFCC]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Curated collections designed to elevate your lifestyle. Experience the perfect 
            balance of organic aesthetics and premium craftsmanship.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/Product')}
              className="bg-[rgb(222,234,60)] text-[rgb(67,78,50)] px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Shop Collection <ShoppingBag size={20} />
            </button>
            {!user && (
              <button 
                onClick={() => navigate('/Register')}
                className="border-2 border-[#ECDFCC] text-[#ECDFCC] px-8 py-4 rounded-full font-bold hover:bg-[#ECDFCC] hover:text-[rgb(67,78,50)] transition-all"
              >
                Join Now
              </button>
            )}
          </div>
        </div>
      </section>

      {/* --- FEATURES STRIP --- */}
      <div className="bg-[rgb(48,56,36)] py-8 border-b border-[#ECDFCC]/10">
        <div className="container mx-auto px-6 flex flex-wrap justify-around gap-8 text-[#ECDFCC]">
          <div className="flex items-center gap-3">
            <Truck className="text-[rgb(222,234,60)]" />
            <span className="text-sm font-medium uppercase tracking-widest">Global Shipping</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[rgb(222,234,60)]" />
            <span className="text-sm font-medium uppercase tracking-widest">Secure Payments</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="text-[rgb(222,234,60)]" />
            <span className="text-sm font-medium uppercase tracking-widest">Premium Quality</span>
          </div>
        </div>
      </div>

      {/* --- CATEGORY SECTION --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[rgb(222,234,60)] mb-2">Categories</h2>
            <h3 className="text-4xl font-serif font-bold">Explore Our Space</h3>
          </div>
          <button 
            onClick={() => navigate('/Product')}
            className="flex items-center gap-2 font-bold hover:text-[rgb(222,234,60)] transition-colors group"
          >
            View All Products <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000" className="w-full h-full object-cover" alt="Interior" />
            <div className="absolute bottom-8 left-8 z-20">
              <h4 className="text-2xl font-bold text-white mb-2">Living Room</h4>
              <p className="text-[#ECDFCC] text-sm opacity-0 group-hover:opacity-100 transition-opacity">Minimalist Comfort →</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
            <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000" className="w-full h-full object-cover" alt="Office" />
            <div className="absolute bottom-8 left-8 z-20">
              <h4 className="text-2xl font-bold text-white mb-2">Office Space</h4>
              <p className="text-[#ECDFCC] text-sm opacity-0 group-hover:opacity-100 transition-opacity">Productivity Redefined →</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
            <img src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1000" className="w-full h-full object-cover" alt="Bedroom" />
            <div className="absolute bottom-8 left-8 z-20">
              <h4 className="text-2xl font-bold text-white mb-2">Bedroom</h4>
              <p className="text-[#ECDFCC] text-sm opacity-0 group-hover:opacity-100 transition-opacity">Serene Dreams →</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="bg-[#ECDFCC] py-20 border-t border-[rgb(67,78,50)]/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Stay in the Loop</h2>
          <p className="text-lg mb-8 text-[rgb(67,78,50)]/70">
            Subscribe to receive exclusive offers, early access to new arrivals, and interior design inspiration.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border border-[rgb(67,78,50)]/20 bg-transparent focus:outline-none focus:border-[rgb(67,78,50)]"
            />
            <button className="bg-[rgb(67,78,50)] text-[#ECDFCC] px-10 py-4 rounded-full font-bold hover:bg-[rgb(48,56,36)] transition-all"
          >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[rgb(67,78,50)] text-[#ECDFCC]/60 py-12 border-t border-[#ECDFCC]/10">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2026 YourBrand. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-[rgb(222,234,60)]">Privacy Policy</a>
            <a href="#" className="hover:text-[rgb(222,234,60)]">Terms of Service</a>
            <a href="#" className="hover:text-[rgb(222,234,60)]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;