# Gaumti Stone Industries Website

A professional website for Gaumti Stone Industries - premium stone manufacturing and supply business.

## Features

- **Modern Design**: Professional stone industry website with luxury aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations and hover effects throughout
- **Contact Management**: Working contact form with backend storage
- **Image Gallery**: Interactive masonry gallery with lightbox functionality
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technology Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (in-memory storage for development)
- **Build Tool**: Vite for fast development and optimized production builds

## Business Information

- **Company**: Gaumti Stone Industries
- **Owner**: Aryan Singhal
- **Phone**: 8440992573
- **Email**: singhalaryan2618@gmail.com
- **Services**: Stone block manufacturing, cutting, and supply (bulk and retail)

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
├── server/                 # Express.js backend
├── shared/                 # Shared types and schemas
└── dist/                   # Production build output
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

The application is optimized for deployment on Replit and other modern hosting platforms:

1. All static assets are bundled and optimized
2. Backend is compiled to efficient JavaScript
3. Environment variables are properly configured
4. Production build is ready for deployment

## Contact Form Features

- Client-side validation with Zod schemas
- Real-time form feedback
- Professional email formatting
- Secure data handling
- Mobile-optimized input fields

## Stone Products Showcased

1. **Premium Marble** - Luxurious varieties for interiors and countertops
2. **Premium Granite** - Durable stones for construction and monuments
3. **Natural Sandstone** - Beautiful varieties for landscaping and facades
4. **Premium Limestone** - Quality blocks for construction projects
5. **Decorative Stones** - Unique stones for artistic installations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized images with proper loading
- Code splitting for faster load times
- Efficient CSS with Tailwind's purge system
- Smooth animations that don't block the main thread
- Progressive enhancement for better accessibility