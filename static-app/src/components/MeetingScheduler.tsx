import React, { useState } from 'react';

const MeetingScheduler: React.FC = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const meetingTypes = [
    { value: "consultation", label: "Free Consultation", icon: "fas fa-comments", duration: "30 min", description: "Discuss your project requirements and get expert advice" },
    { value: "technical-review", label: "Technical Review", icon: "fas fa-code", duration: "45 min", description: "Code review and architecture consultation" },
    { value: "project-planning", label: "Project Planning", icon: "fas fa-project-diagram", duration: "60 min", description: "Detailed project scope and timeline planning" },
    { value: "team-training", label: "Team Training", icon: "fas fa-chalkboard-teacher", duration: "90 min", description: "Unity development training for your team" }
  ];

  const availableTimes = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with meeting details
    const subject = `Meeting Request: ${meetingTypes.find(t => t.value === selectedType)?.label}`;
    const body = `
Hello Ajay,

I would like to schedule a meeting with the following details:

Meeting Type: ${meetingTypes.find(t => t.value === selectedType)?.label}
Preferred Date: ${selectedDate}
Preferred Time: ${selectedTime}
Email: ${email}

Message:
${message}

Looking forward to hearing from you!

Best regards
    `.trim();

    const mailtoLink = `mailto:contact@ajaysinghrawat.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="meeting-scheduler" className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto mobile-padding">
        <div className="text-center mb-16">
          <h2 className="mobile-title font-bold mb-4">
            Schedule a <span className="text-gradient">Meeting</span>
          </h2>
          <p className="mobile-text text-gray-300 max-w-3xl mx-auto">
            Book a consultation to discuss your Unity development needs, get technical advice, or explore collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Meeting Types */}
          <div className="space-y-6 fade-in">
            <h3 className="text-xl font-bold mb-6 text-electric-blue">Select Meeting Type</h3>
            
            <div className="space-y-4">
              {meetingTypes.map((type) => (
                <div
                  key={type.value}
                  className={`glass-morphism rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                    selectedType === type.value
                      ? "border-2 border-electric-blue bg-electric-blue/10"
                      : "border border-gray-600 hover:border-gray-500"
                  }`}
                  onClick={() => setSelectedType(type.value)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                      <i className={`${type.icon} text-electric-blue`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white">{type.label}</h4>
                        <span className="text-sm text-vibrant-purple">{type.duration}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="glass-morphism rounded-2xl p-8 slide-up">
            <h3 className="text-xl font-bold mb-6 text-vibrant-purple">Book Your Meeting</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Time (UTC)
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors duration-300"
                >
                  <option value="">Select a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors duration-300"
                  placeholder="Tell me about your project or any specific questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={!selectedType || !selectedDate || !selectedTime || !email}
                className="w-full bg-electric-blue text-dark-primary py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed neon-glow"
              >
                Schedule Meeting
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 text-center">
                <i className="fas fa-info-circle mr-2"></i>
                You'll receive a confirmation email with meeting details within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingScheduler;