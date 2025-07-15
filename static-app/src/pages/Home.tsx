import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import MeetingScheduler from '../components/MeetingScheduler';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <AboutSection />
      <MeetingScheduler />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;