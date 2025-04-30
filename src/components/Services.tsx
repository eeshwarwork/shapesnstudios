
import { Building2, Home, TreePine, Users, Compass, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building2 size={40} className="text-arch-light mb-4" />,
      title: "Commercial Design",
      description: "Creating innovative workspaces and commercial buildings that enhance productivity and reflect brand identities."
    },
    {
      icon: <Home size={40} className="text-arch-light mb-4" />,
      title: "Residential Architecture",
      description: "Designing beautiful, functional homes that respond to clients' needs and enhance their quality of life."
    },
    {
      icon: <TreePine size={40} className="text-arch-light mb-4" />,
      title: "Landscape Integration",
      description: "Harmonizing architecture with natural surroundings to create cohesive and sustainable environments."
    },
    {
      icon: <Users size={40} className="text-arch-light mb-4" />,
      title: "Urban Planning",
      description: "Developing thoughtful urban strategies that foster community engagement and sustainable growth."
    },
    {
      icon: <Compass size={40} className="text-arch-light mb-4" />,
      title: "Sustainable Design",
      description: "Implementing eco-friendly solutions that minimize environmental impact while maximizing energy efficiency."
    },
    {
      icon: <PenTool size={40} className="text-arch-light mb-4" />,
      title: "Interior Design",
      description: "Crafting interior spaces that balance aesthetics with functionality to create memorable experiences."
    }
  ];

  return (
    <section id="services" className="section-padding bg-arch-accent/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arch-dark mb-6">
            Our <span className="text-arch-light">Services</span>
          </h2>
          <p className="text-gray-700">
            We offer a comprehensive range of architectural and design services to meet the unique needs of each project, from initial concept to final construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold text-arch-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
