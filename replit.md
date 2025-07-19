# replit.md

## Overview

This is a comprehensive full-stack web application built with a modern tech stack featuring a React frontend with TypeScript, Express.js backend, and PostgreSQL database. The application is a professional portfolio website for "Ajay Singh Rawat", a Senior Unity Developer with 7+ years of experience in games, AR/VR, and metaverse development. 

Key features include:
- Detailed project showcase with individual project pages
- Interactive meeting scheduler for consultation booking
- Comprehensive services section highlighting consulting capabilities
- Downloadable resume functionality
- Mobile-responsive design optimized for all devices
- Real project information from Ajay's actual resume and experience

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

### Static Site Conversion (Latest)
- Successfully converted from full-stack to purely static site
- Removed Express.js backend, PostgreSQL database, and server-side dependencies
- Eliminated TanStack Query and server communication dependencies
- Created client-specific Vite configuration for static serving
- Updated TypeScript configuration for client-only development
- Meeting scheduler now works as client-side only with simulated functionality
- Portfolio now runs on Vite development server on port 5002

### Enhanced Portfolio Structure
- Added detailed project pages with individual routing (/project/:id)
- Implemented comprehensive project showcase with real project data
- Added meeting scheduler with consultation booking functionality
- Created services section highlighting Unity development and consulting capabilities

### Updated Content
- Updated all personal information to reflect Ajay Singh Rawat's actual resume
- Added real projects: Fighter Pilot Heavyfire, VIP Vegas Slot, IDEX AR/VR Project
- Updated skills to reflect actual expertise in Unity XR, Mixed Reality, Metaverse development
- Enhanced about section with accurate professional experience timeline

### Technical Improvements
- Enhanced mobile responsiveness with custom CSS classes
- Added intuitive navigation between pages with smooth scrolling
- Integrated downloadable resume functionality with actual PDF file
- Improved project filtering and categorization

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter (lightweight React router)
- **State Management**: React useState for local component state
- **Build Tool**: Vite for development and production builds

### Static Site Architecture
- **Deployment**: Pure static site with no backend dependencies
- **Development Server**: Vite development server with hot module replacement
- **Build Tool**: Vite for optimized static builds
- **Runtime**: Client-side only JavaScript execution

## Key Components

### Static Data Layer
- **Data Storage**: Local TypeScript files and JSON data
- **Project Information**: Stored in client-side data files
- **Contact Forms**: Client-side validation with simulated submissions
- **No Database**: All data is embedded in the application code

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and mobile-friendly hamburger menu
- **Main Sections**: Hero, Projects, Skills, Services, About, Meeting Scheduler, Contact, Footer
- **Project Detail Pages**: Individual pages for each project with comprehensive information
- **Meeting Scheduler**: Interactive booking system for consultation appointments
- **Services Section**: Detailed breakdown of development and consulting services
- **UI Library**: Comprehensive component library based on Radix UI with Lucide icons
- **Theming**: Custom dark gaming theme with electric blue and purple accents
- **Responsive Design**: Mobile-first approach optimized for all screen sizes

### Client Services
- **Form Handling**: Local state management with React useState
- **Data Management**: Static data imports and local storage
- **Utilities**: Client-side helper functions for form validation
- **Development Server**: Standalone Vite server for static content

## Data Flow

### Static Data Management
- Project data imported from TypeScript files
- Form submissions handled locally with simulated responses
- No external API calls or database dependencies
- All data embedded within the application code

### Client-Side Operations
- React state management for form handling
- Local storage for user preferences (if needed)
- Static asset imports for images and documents

### Development Workflow
- Hot module replacement with Vite development server
- TypeScript compilation checking for client code only
- Static file serving from client directory

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library via CDN
- **Google Fonts**: Inter font family

### Database and ORM
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database toolkit
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Build tool and development server
- **ESBuild**: JavaScript bundler for production
- **TypeScript**: Type checking and compilation
- **Replit Plugins**: Development environment integration

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Production Setup
- **Server**: Single Express server serving both API and static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Static Files**: Served from `dist/public` directory
- **Process**: Node.js process running bundled server code

### Development Environment
- **Dev Server**: Vite development server with HMR
- **API Proxy**: Express server with Vite middleware integration
- **Database**: Same PostgreSQL setup as production
- **Hot Reload**: Both frontend and backend support hot reloading

### Configuration
- **Environment Variables**: DATABASE_URL for database connection
- **TypeScript**: Shared configuration across client, server, and shared code
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)