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
- **State Management**: React Query (TanStack Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot reload with tsx

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared schema definition in TypeScript
- **Migrations**: Database migrations handled by Drizzle Kit
- **Connection**: Neon Database serverless connection

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and mobile-friendly hamburger menu
- **Main Sections**: Hero, Projects, Skills, Services, About, Meeting Scheduler, Contact, Footer
- **Project Detail Pages**: Individual pages for each project with comprehensive information
- **Meeting Scheduler**: Interactive booking system for consultation appointments
- **Services Section**: Detailed breakdown of development and consulting services
- **UI Library**: Comprehensive component library based on Radix UI with Lucide icons
- **Theming**: Custom dark gaming theme with electric blue and purple accents
- **Responsive Design**: Mobile-first approach optimized for all screen sizes

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Routes**: RESTful API structure (currently minimal setup)
- **Error Handling**: Centralized error handling middleware
- **Development Server**: Vite integration for development mode

## Data Flow

### Frontend to Backend
- API requests through fetch with credential inclusion
- React Query for caching and synchronization
- Type-safe API calls with TypeScript

### Database Operations
- Drizzle ORM for type-safe database queries
- Connection pooling through Neon Database
- Migrations managed through Drizzle Kit

### Development Workflow
- Hot reload for both frontend and backend
- TypeScript compilation checking
- Vite development server with Express middleware

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