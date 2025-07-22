import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "wouter";

const scrollToSection = (sectionId: string) => {
  // If we're not on the home page, navigate there first then scroll
  if (window.location.pathname !== '/') {
    // Navigate to home page with hash
    window.location.href = `/${sectionId}`;
    return;
  }
  
  // If we're on home page, scroll directly
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Handle navigation from other pages with hash
const handleCrossPageNavigation = () => {
  // Check if there's a hash in the URL when page loads
  if (window.location.hash) {
    setTimeout(() => {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Handle cross-page navigation on component mount
  React.useEffect(() => {
    handleCrossPageNavigation();
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#meeting-scheduler", label: "Book Meeting" },
    { href: "#contact", label: "Contact" }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl text-gradient font-bold cursor-pointer hover:opacity-80 transition-opacity">
                Ajay Rawat
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-electric-blue transition-colors duration-300 px-3 py-2 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-electric-blue">
                  <i className="fas fa-bars text-xl" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-dark-secondary border-l-gray-700">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-gray-300 hover:text-electric-blue transition-colors duration-300 text-left px-4 py-3 rounded-md w-full"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
