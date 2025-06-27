# Gaumti Stone Industries Website

## Overview

This is a full-stack web application for Gaumti Stone Industries, a premium stone manufacturing and supply company. The application is built as a modern single-page application (SPA) with a React frontend and Express.js backend, featuring a professional business website with contact management capabilities.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React with TypeScript, using modern hooks and component patterns
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and esbuild for backend compilation

## Key Components

### Frontend Architecture
- **Framework**: React 18+ with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Styling**: Tailwind CSS with custom stone industry color scheme
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **API Design**: RESTful endpoints for contact management
- **Validation**: Zod schemas shared between frontend and backend
- **Error Handling**: Centralized error middleware
- **Development**: Hot reload with tsx for development

### Database Schema
The application uses two main tables:
- **contacts**: Stores contact form submissions with fields for personal info, project type, and messages
- **users**: Basic user management (prepared for future authentication)

## Data Flow

1. **Contact Form Submission**: User fills out contact form → Frontend validates with Zod → API request to `/api/contacts` → Backend validates and stores in database
2. **Contact Retrieval**: Admin access to view all contacts via `/api/contacts` GET endpoint
3. **Static Content**: All business content (products, services, about) is statically rendered on the frontend

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **shadcn/ui components**: Complete UI component library

### Development Tools
- **Vite**: Frontend build tool with HMR
- **tsx**: TypeScript execution for development
- **esbuild**: Fast backend bundling for production
- **Tailwind CSS**: Utility-first CSS framework

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

### Development
- **Command**: `npm run dev`
- **Port**: 5000
- **Features**: Hot reload, Vite HMR, development error overlay

### Production Build
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Output**: Frontend built to `dist/public`, backend bundled to `dist/index.js`

### Database
- **Provider**: Configured for PostgreSQL (currently using in-memory storage for development)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Environment variable `DATABASE_URL` required

### Environment Setup
- Node.js 20+ runtime
- PostgreSQL 16 module enabled
- Automatic scaling deployment target

## Changelog

- June 27, 2025. Initial setup with premium stone industry website
- June 27, 2025. Added interactive animations, gallery lightbox, enhanced hero section with particles
- June 27, 2025. Removed 3D viewer feature, optimized for production deployment

## User Preferences

Preferred communication style: Simple, everyday language.
Production requirements: Removed 3D viewer feature, focus on smooth animations and professional appearance.