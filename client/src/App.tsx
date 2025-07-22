import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ProjectDetail from "@/pages/project-detail";
import NotFound from "@/pages/not-found";

// Handle cross-page navigation with hash
const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function Router() {
  useEffect(() => {
    // Handle navigation from other pages with hash
    if (window.location.hash && window.location.pathname === '/') {
      setTimeout(() => {
        scrollToSection(window.location.hash);
      }, 100);
    }
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Router />
      </div>
    </TooltipProvider>
  );
}

export default App;
