
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-arch-light" size={24} />,
      title: "Our Office",
      details: ["123 Design Avenue", "New York, NY 10001"]
    },
    {
      icon: <Phone className="text-arch-light" size={24} />,
      title: "Phone",
      details: ["+1 (555) 123-4567"]
    },
    {
      icon: <Mail className="text-arch-light" size={24} />,
      title: "Email",
      details: ["info@formspace.com", "careers@formspace.com"]
    },
    {
      icon: <Clock className="text-arch-light" size={24} />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: By appointment"]
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arch-dark mb-6">
            Get In <span className="text-arch-light">Touch</span>
          </h2>
          <p className="text-gray-700">
            Have a project in mind or want to learn more about our services? We'd love to hear from you. Reach out to us using the contact form or visit our office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-arch-dark mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Instagram', 'LinkedIn', 'Facebook', 'Twitter'].map((platform, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="text-gray-600 hover:text-arch-light transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-arch-dark mb-6">Send Us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-arch-light"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Your Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-arch-light"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-arch-light"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject*</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-arch-light"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Consultation Request">Consultation Request</option>
                    <option value="Career Opportunities">Career Opportunities</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-arch-light"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
