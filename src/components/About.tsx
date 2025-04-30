
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-arch-dark mb-6">
              Our Approach to <span className="text-arch-light">Architecture</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2021, FORMSPACE is a forward-thinking architectural studio dedicated to creating meaningful and sustainable spaces that positively impact people's lives. We believe that architecture has the power to inspire, to connect communities, and to shape a better future.
            </p>
            <p className="text-gray-700 mb-8">
              Our collaborative design process combines innovative thinking with practical solutions. We work closely with our clients to understand their vision and needs, while considering the environmental, cultural, and social aspects of each project. Our goal is to create spaces that are not only aesthetically pleasing but also functional, sustainable, and contextually relevant.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "45+", label: "Projects Completed" },
                { number: "12", label: "Awards Won" },
                { number: "15", label: "Team Members" },
                { number: "8", label: "Countries Served" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-arch-light mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="image-hover rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern building exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="image-hover rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Interior design" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="image-hover rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Architectural detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="image-hover rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Urban landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
