
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Glass Pavilion",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A modern commercial space featuring extensive use of glass and natural light."
    },
    {
      id: 2,
      title: "Hillside Residence",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury residence designed to blend with its natural surroundings while offering panoramic views."
    },
    {
      id: 3,
      title: "Urban Park Renewal",
      category: "landscape",
      image: "https://images.unsplash.com/photo-1576661929310-a29e8fc38c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Revitalization of an urban park with sustainable materials and community-focused spaces."
    },
    {
      id: 4,
      title: "Downtown Office Tower",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A sleek, energy-efficient office tower that serves as a new landmark in the city skyline."
    },
    {
      id: 5,
      title: "Minimalist Loft",
      category: "residential",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Urban loft apartment renovation emphasizing open space and minimalist design principles."
    },
    {
      id: 6,
      title: "Waterfront Plaza",
      category: "urban",
      image: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Mixed-use development connecting the city to its waterfront through innovative public spaces."
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'landscape', label: 'Landscape' },
    { id: 'urban', label: 'Urban Planning' }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-arch-dark mb-6">
            Our <span className="text-arch-light">Projects</span>
          </h2>
          <p className="text-gray-700 mb-8">
            Explore our diverse portfolio of architectural projects spanning various scales and typologies.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-arch-light text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group">
              <div className="image-hover rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-arch-dark group-hover:text-arch-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
