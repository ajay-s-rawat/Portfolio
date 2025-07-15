import React from 'react';
import { Router, Route } from 'wouter';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-primary text-white">
        <Route path="/" component={Home} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route component={NotFound} />
      </div>
    </Router>
  );
}

export default App;