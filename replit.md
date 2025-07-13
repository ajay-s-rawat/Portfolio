# replit.md

## Overview

This is a full-stack web application built with a modern tech stack featuring a React frontend with TypeScript, Express.js backend, and PostgreSQL database. The application is a professional portfolio website for "Ajay Singh Rawat", a Senior Unity Developer with 7+ years of experience, showcasing real projects, skills, and professional experience in game development with downloadable resume functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

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
- **Navigation**: Fixed navigation with smooth scrolling
- **Sections**: Hero, Projects, Skills, About, Contact, Footer
- **UI Library**: Comprehensive component library based on Radix UI
- **Theming**: Custom dark theme with electric blue and purple accents
- **Responsive Design**: Mobile-first approach with Tailwind CSS

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