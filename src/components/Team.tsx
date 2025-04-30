
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "Principal Architect & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "With over 15 years of experience, Alexandra leads our team with a vision for innovative and sustainable architecture."
    },
    {
      name: "Marcus Wright",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Marcus specializes in urban design and brings his expertise in creating human-centered spaces to every project."
    },
    {
      name: "Sophia Rodriguez",
      role: "Sustainable Design Specialist",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Sophia is passionate about eco-friendly architecture and leads our sustainability initiatives across all projects."
    },
    {
      name: "Daniel Kim",
      role: "Senior Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Daniel brings technical expertise and creative problem-solving to complex architectural challenges."
    }
  ];

  return (
    <section id="team" className="section-padding bg-arch-accent/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arch-dark mb-6">
            Meet Our <span className="text-arch-light">Team</span>
          </h2>
          <p className="text-gray-700">
            Our diverse team of architects and designers brings together a wealth of experience and fresh perspectives to create exceptional architectural solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="image-hover">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-arch-dark">{member.name}</h3>
                <p className="text-arch-light font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-arch-light transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-arch-light transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-arch-dark mb-4">Join Our Team</h3>
              <p className="text-gray-700 mb-6">
                We're always looking for talented and passionate individuals to join our growing team. If you're interested in being part of innovative architectural projects and working in a collaborative environment, we'd love to hear from you.
              </p>
              <a href="#contact" className="btn-primary">View Open Positions</a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg w-full max-w-md h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
