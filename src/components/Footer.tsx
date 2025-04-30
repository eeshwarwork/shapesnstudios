
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-arch-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">FORM<span className="text-arch-light">SPACE</span></h3>
            <p className="text-gray-400 mb-6">
              Creating innovative architectural solutions that transform environments and enhance the way people live, work, and interact.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'LinkedIn', 'Facebook', 'Twitter'].map((platform, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="text-gray-400 hover:text-arch-light transition-colors"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Commercial Design', 'Residential Architecture', 'Urban Planning', 'Interior Design', 'Sustainable Design'].map((service, idx) => (
                <li key={idx}>
                  <a href="#services" className="text-gray-400 hover:text-arch-light transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Projects', href: '#portfolio' },
                { name: 'Our Team', href: '#team' },
                { name: 'Careers', href: '#team' },
                { name: 'Contact', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-arch-light transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates on our latest projects and news.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 bg-arch-medium border border-gray-700 rounded-l text-white focus:outline-none focus:ring-1 focus:ring-arch-light w-full"
                />
                <button type="submit" className="bg-arch-light px-4 py-2 rounded-r hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} FORMSPACE. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-arch-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-arch-light transition-colors">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-arch-light transition-colors flex items-center"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
