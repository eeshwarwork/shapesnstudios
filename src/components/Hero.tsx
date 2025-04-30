
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center bg-arch-dark overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(44, 54, 57, 0.8), rgba(44, 54, 57, 0.8)), url("https://images.unsplash.com/photo-1489421741618-aa9b2a202195?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-arch-dark/90 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Designing Spaces That <span className="text-arch-light">Inspire</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            We create innovative architectural solutions that transform environments and enhance the way people live, work, and interact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#portfolio" className="btn-primary">View Our Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
