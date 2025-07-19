import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { scrollToSection } from "@/lib/utils-static";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
            <h1 className="text-xl text-gradient font-bold">Ajay Rawat</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-electric-blue transition-colors duration-300"
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
                      className="text-gray-300 hover:text-electric-blue transition-colors duration-300 text-left"
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
