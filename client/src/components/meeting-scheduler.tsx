import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Video, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const simulateFormSubmission = (data: Record<string, any>): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function MeetingScheduler() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    meetingType: "",
    projectDetails: "",
    preferredDate: "",
    preferredTime: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate email
      if (!validateEmail(formData.email)) {
        throw new Error("Please enter a valid email address");
      }
      
      // Simulate meeting scheduling
      await simulateFormSubmission(formData);
      
      // Create mailto link for meeting request
      const selectedMeetingType = meetingTypes.find(t => t.value === formData.meetingType);
      const subject = `Meeting Request: ${selectedMeetingType?.label}`;
      const body = `
Hello Ajay,

I would like to schedule a meeting with the following details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Meeting Type: ${selectedMeetingType?.label} (${selectedMeetingType?.duration})
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime} IST

Project Details:
${formData.projectDetails}

Looking forward to hearing from you!

Best regards,
${formData.name}
      `.trim();
      
      const mailtoLink = `mailto:ajayrawat222@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
    
      toast({
        title: "Meeting request sent!",
        description: "I'll send you a calendar invite within 24 hours with available time slots.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        meetingType: "",
        projectDetails: "",
        preferredDate: "",
        preferredTime: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const meetingTypes = [
    { value: "consultation", label: "Free Consultation", icon: MessageSquare, duration: "30 min", description: "Discuss your project needs" },
    { value: "technical", label: "Technical Discussion", icon: Video, duration: "45 min", description: "Deep dive into technical requirements" },
    { value: "project-review", label: "Project Review", icon: Calendar, duration: "60 min", description: "Review existing project or portfolio" }
  ];

  return (
    <section id="meeting-scheduler" className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Schedule a <span className="text-gradient">Meeting</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your Unity project? Book a free consultation to explore how I can help bring your game ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Meeting Types */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Choose Meeting Type</h3>
            {meetingTypes.map((type) => (
              <Card 
                key={type.value} 
                className={`glass-morphism rounded-xl cursor-pointer transition-all duration-300 ${
                  formData.meetingType === type.value 
                    ? "border-electric-blue bg-electric-blue/10" 
                    : "hover:border-electric-blue/50"
                }`}
                onClick={() => handleInputChange("meetingType", type.value)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{type.label}</h4>
                        <span className="text-sm text-electric-blue font-medium">{type.duration}</span>
                      </div>
                      <p className="text-gray-300">{type.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Availability Info */}
            <Card className="glass-morphism rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-vibrant-purple" />
                  <span>Availability</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-electric-blue">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-electric-blue">10:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-gray-500">Unavailable</span>
                  </div>
                  <div className="pt-2 border-t border-gray-700">
                    <p className="text-sm">
                      <span className="text-vibrant-purple">Note:</span> All meetings conducted via Google Meet or Zoom
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <Card className="glass-morphism rounded-xl">
            <CardHeader>
              <CardTitle>Book Your Meeting</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="bg-dark-card border-gray-600 text-white focus:border-electric-blue"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="bg-dark-card border-gray-600 text-white focus:border-electric-blue"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company/Organization</label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your company (optional)"
                    className="bg-dark-card border-gray-600 text-white focus:border-electric-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Meeting Type *</label>
                  <Select value={formData.meetingType} onValueChange={(value) => handleInputChange("meetingType", value)}>
                    <SelectTrigger className="bg-dark-card border-gray-600 text-white focus:border-electric-blue">
                      <SelectValue placeholder="Select meeting type" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-card border-gray-600">
                      {meetingTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label} ({type.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      className="bg-dark-card border-gray-600 text-white focus:border-electric-blue"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time (IST)</label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                      <SelectTrigger className="bg-dark-card border-gray-600 text-white focus:border-electric-blue">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-dark-card border-gray-600">
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                  <Textarea
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    className="bg-dark-card border-gray-600 text-white focus:border-electric-blue min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.meetingType}
                  className="w-full bg-gradient-to-r from-electric-blue to-vibrant-purple text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  You'll receive a calendar invite within 24 hours with confirmed time slots
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}