import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    budget: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      budget: "",
      description: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "ajayrawat222@gmail.com",
      color: "electric-blue"
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+91-8882156223",
      color: "vibrant-purple"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Greater Noida, India",
      color: "electric-blue"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin", label: "LinkedIn", href: "#", color: "electric-blue" },
    { icon: "fab fa-github", label: "GitHub", href: "#", color: "vibrant-purple" },
    { icon: "fab fa-twitter", label: "Twitter", href: "#", color: "electric-blue" },
    { icon: "fab fa-itch-io", label: "Itch.io", href: "#", color: "vibrant-purple" }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your game idea to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="glass-morphism rounded-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      className="bg-dark-card border-gray-600 text-white focus:border-electric-blue"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      className="bg-dark-card border-gray-600 text-white focus:border-electric-blue"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className="bg-dark-card border-gray-600 text-white focus:border-electric-blue"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="bg-dark-card border-gray-600 text-white focus:border-electric-blue">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-card border-gray-600">
                      <SelectItem value="mobile">Mobile Game Development</SelectItem>
                      <SelectItem value="pc">PC/Console Game</SelectItem>
                      <SelectItem value="vr">VR/AR Experience</SelectItem>
                      <SelectItem value="consultation">Game Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="bg-dark-card border-gray-600 text-white focus:border-electric-blue">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-card border-gray-600">
                      <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                      <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Tell me about your game project..."
                    className="bg-dark-card border-gray-600 text-white focus:border-electric-blue min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-electric-blue to-vibrant-purple text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-morphism rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        info.color === "electric-blue" ? "bg-electric-blue/20" : "bg-vibrant-purple/20"
                      }`}>
                        <i className={`${info.icon} ${
                          info.color === "electric-blue" ? "text-electric-blue" : "text-vibrant-purple"
                        }`} />
                      </div>
                      <div>
                        <p className="text-gray-300">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Connect Online</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`flex items-center justify-center space-x-2 bg-dark-card border border-gray-600 rounded-lg p-4 transition-all duration-300 ${
                        link.color === "electric-blue" 
                          ? "hover:bg-electric-blue/20 hover:border-electric-blue" 
                          : "hover:bg-vibrant-purple/20 hover:border-vibrant-purple"
                      }`}
                    >
                      <i className={`${link.icon} ${
                        link.color === "electric-blue" ? "text-electric-blue" : "text-vibrant-purple"
                      }`} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
