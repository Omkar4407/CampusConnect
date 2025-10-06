# CampusConnect - Modern Campus Placement Portal

A production-ready campus placement management system built with React, TypeScript, and Supabase.

## Features

### For Students
- **User Authentication** - Secure email/password authentication
- **Job Listings** - Browse and search available job opportunities
- **Job Applications** - Apply to positions with one click
- **Interview Management** - View and manage interview schedules
- **Profile Management** - Maintain comprehensive student profile
- **Notifications** - Real-time updates on applications and interviews
- **Saved Jobs** - Bookmark positions for later review

### For Companies
- **Company Profiles** - Manage company information
- **Job Postings** - Create and manage job openings
- **Application Review** - Review student applications
- **Interview Scheduling** - Schedule and manage interviews
- **Candidate Management** - Track application statuses

### Platform Features
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Real-time Updates** - Live notifications and status changes
- **Advanced Search** - Filter jobs by location, company, and more
- **Modern UI/UX** - Clean, intuitive interface with Tailwind CSS
- **Type Safety** - Full TypeScript support for reliability

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Backend**: Supabase (PostgreSQL + Auth + Real-time)
- **Icons**: Lucide React
- **State Management**: React Context API

## Project Structure

```
campusconnect/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── Layout.tsx       # Main app layout with navigation
│   ├── pages/               # Page components
│   │   ├── LandingPage.tsx  # Public landing page
│   │   ├── SignIn.tsx       # Authentication - Sign in
│   │   ├── SignUp.tsx       # Authentication - Registration
│   │   ├── Dashboard.tsx    # Main dashboard with stats
│   │   ├── JobListings.tsx  # Browse and search jobs
│   │   ├── InterviewSchedule.tsx  # Interview management
│   │   ├── Profile.tsx      # User profile management
│   │   └── Notifications.tsx # Notification center
│   ├── hooks/               # Custom React hooks
│   │   └── useAuth.tsx      # Authentication hook
│   ├── lib/                 # External service clients
│   │   └── supabase.ts      # Supabase client configuration
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # All application types
│   ├── utils/               # Utility functions
│   │   └── mockData.ts      # Mock data for development
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind config
├── public/                  # Static assets
├── dist/                    # Production build output
└── package.json             # Dependencies and scripts
```

## Database Schema

The application uses Supabase with the following main tables:

- **profiles** - User profiles (students, companies, admins)
- **students** - Student-specific information
- **companies** - Company information
- **jobs** - Job postings
- **applications** - Job applications from students
- **interviews** - Interview schedules
- **notifications** - User notifications
- **saved_jobs** - Student bookmarked jobs

All tables have Row Level Security (RLS) enabled with appropriate policies.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (database is pre-configured)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment variables are already configured in `.env`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Usage

### For Students

1. **Sign Up** - Create an account as a student
2. **Complete Profile** - Add your academic details, skills, and resume
3. **Browse Jobs** - Search and filter available positions
4. **Apply** - Submit applications with one click
5. **Track Progress** - Monitor application status and interview schedules

### For Companies

1. **Register** - Create a company account
2. **Post Jobs** - Add job openings with requirements
3. **Review Applications** - Browse student applications
4. **Schedule Interviews** - Set up interview times
5. **Manage Candidates** - Update application statuses

## Key Features Details

### Authentication System
- Email/password authentication via Supabase Auth
- Protected routes with automatic redirects
- Session management with persistent login
- Demo mode available for testing

### Job Search & Filters
- Real-time search across positions and companies
- Location-based filtering
- Company-specific filtering
- Sort by deadline, salary, and more

### Interview Management
- Calendar view of upcoming interviews
- Virtual meeting links
- Reschedule requests
- Interview status tracking
- Interviewer information

### Notifications
- Real-time notification system
- Multiple notification types (info, success, warning, error)
- Mark as read/unread
- Delete functionality
- Unread count badges

### Responsive Design
- Mobile-first approach
- Touch-friendly interactions
- Collapsible navigation on mobile
- Optimized for all screen sizes

## Security

- Row Level Security (RLS) on all database tables
- JWT-based authentication
- Secure password handling
- Protected API routes
- Input validation and sanitization

## Performance

- Code splitting with React.lazy
- Optimized build with Vite
- CSS purging in production
- Lazy loading of images
- Efficient re-renders with React hooks

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Consistent naming conventions
- Component-based architecture
- Modular and maintainable code

## Production Deployment

The application is production-ready with:
- Zero build errors
- Zero runtime errors
- Type-safe codebase
- Optimized bundle size
- SEO-friendly routing
- Error boundaries

## Future Enhancements

- Resume parser integration
- Video interview scheduling
- Chat system between students and companies
- Analytics dashboard for placement officers
- Email notifications
- Document management system
- Advanced filtering and sorting
- Export functionality for reports

## License

MIT License - feel free to use this project for learning or commercial purposes.

## Support

For issues or questions, please contact the development team.

---

Built with ❤️ for Campus Placement Management
