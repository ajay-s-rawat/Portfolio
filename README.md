# Ajay Singh Rawat - Unity Developer Portfolio

A modern, responsive portfolio website showcasing Unity development expertise, built as a static site with React and TypeScript.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Project Showcase**: Detailed project pages with comprehensive information
- **Interactive Meeting Scheduler**: Client-side meeting booking with email integration
- **Contact Forms**: Static form handling with mailto fallbacks
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Performance Optimized**: Static site generation for fast loading

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI primitives with shadcn/ui
- **Routing**: Wouter (lightweight React router)
- **Build Tool**: Vite
- **Deployment**: Static site hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for static hosting.

## Project Structure

```
├── client/                 # Main application code
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── data/          # Static data files
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   └── main.tsx       # Application entry point
│   └── index.html         # HTML template
├── attached_assets/       # Static assets (PDFs, images)
├── dist/                  # Built application (generated)
└── package.json          # Dependencies and scripts
```

## Key Features

### Static Site Architecture
- No backend dependencies
- Client-side form handling with email integration
- Static data management
- Optimized for CDN deployment

### Contact & Meeting Forms
- Client-side validation
- Automatic mailto link generation
- Toast notifications for user feedback
- Responsive form design

### Project Showcase
- Individual project detail pages
- Technology filtering
- External link integration
- Responsive image handling

### Performance
- Code splitting and lazy loading
- Optimized bundle sizes
- Fast static site generation
- Mobile-first responsive design

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Upload the `dist` folder contents
- **AWS S3**: Upload to S3 bucket with static website hosting

## Customization

### Content Updates
- Update project data in `client/src/data/projects.ts`
- Modify personal information in component files
- Replace resume PDF in `attached_assets/`

### Styling
- Customize colors in `client/src/index.css`
- Modify Tailwind config in `tailwind.config.ts`
- Update component styles in individual component files

### Adding New Sections
1. Create component in `client/src/components/`
2. Add to main page in `client/src/pages/home.tsx`
3. Update navigation in `client/src/components/navigation.tsx`

## License

MIT License - feel free to use this template for your own portfolio.