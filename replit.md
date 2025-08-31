# CliniGlobal Research Institute - Professional Clinical Research Training Platform

## Overview

CliniGlobal Research Institute is a comprehensive educational platform designed for clinical research training programs. The application serves as a professional EduTech website specializing in healthcare education, offering various clinical research certifications and training programs. Built with modern web technologies, it provides a complete user experience from course discovery to enrollment, featuring contact forms, program showcases, testimonials, and administrative capabilities for managing inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with custom Shadcn/ui components for accessibility and consistency
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both light and dark modes
- **Build Tool**: Vite for fast development and optimized production builds
- **Design System**: Professional healthcare/education theme with blue and white color palette

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints for contact form submissions and inquiry management
- **Development**: Hot module replacement with Vite integration for seamless full-stack development
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **Data Validation**: Zod schemas for runtime type checking and validation
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions

### Authentication and Authorization
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication
- **Security**: Prepared for production authentication implementation

### Component Architecture
- **Modular Design**: Separated components for each major section (Hero, About, Programs, Contact, etc.)
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance
- **Reusable UI**: Comprehensive component library with consistent design patterns

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod resolvers
- **State Management**: TanStack React Query for efficient data fetching and caching
- **UI Framework**: Radix UI component primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling

### Database and ORM
- **Database Driver**: Neon Database serverless PostgreSQL driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Validation**: Drizzle-Zod integration for automatic schema validation

### Development Tools
- **Build System**: Vite with React plugin for fast development and builds
- **TypeScript**: Full TypeScript support across frontend and backend
- **Code Quality**: ESBuild for production bundling
- **Development Server**: Express with Vite middleware integration

### UI and UX Enhancements
- **Animation**: Framer Motion for smooth transitions and carousel functionality
- **Icons**: Lucide React for consistent iconography
- **Form Handling**: React Hook Form for performant form management
- **Toast Notifications**: Custom toast system for user feedback
- **Date Handling**: Date-fns for date manipulation and formatting

### Deployment and Production
- **Process Management**: TSX for TypeScript execution in development
- **Static Assets**: Vite build system for optimized static asset handling
- **Environment Configuration**: Environment-based configuration for database connections
- **Session Store**: PostgreSQL session storage for production scalability