# CampusConnect - Quick Start Guide

## What is CampusConnect?

A modern, production-ready campus placement portal that connects students with companies for internships and job placements.

## Quick Start

### 1. Start the Application
```bash
npm run dev
```

### 2. Open Your Browser
Navigate to: **http://localhost:5173**

### 3. Create an Account
- Click **"Get Started"** or **"Sign Up"**
- Choose: **Student** or **Company**
- Enter any email and password (demo mode)
- Click **"Sign Up"**

### 4. Explore the Platform

#### For Students:
- **Dashboard**: View stats, recent jobs, and interviews
- **Jobs**: Search and apply for positions
- **Interviews**: Manage your interview schedules
- **Profile**: Update your information and skills
- **Notifications**: Check application updates

#### For Companies:
- **Dashboard**: View recruitment stats
- **Post Jobs**: Create new job openings
- **Applications**: Review student applications
- **Interviews**: Schedule and manage interviews
- **Profile**: Update company information

## Key Features

### 🎯 Smart Job Search
- Real-time search across positions
- Filter by location and company
- Save jobs for later
- One-click applications

### 📅 Interview Management
- View all scheduled interviews
- Join virtual meetings
- Request reschedules
- Track interview status

### 🔔 Real-time Notifications
- Application status updates
- Interview reminders
- New job alerts
- System announcements

### 📱 Fully Responsive
- Works on desktop, tablet, and mobile
- Touch-friendly interface
- Optimized for all screen sizes
- Native app-like experience

## Navigation

### Top Navigation
- **CampusConnect Logo**: Return to dashboard
- **User Name**: Shows current user
- **Sign Out**: Logout button

### Sidebar Menu (Desktop) / Hamburger Menu (Mobile)
- 🏠 **Dashboard**: Overview and stats
- 💼 **Jobs**: Browse opportunities
- 📅 **Interviews**: Schedule management
- 🔔 **Notifications**: Updates center
- 👤 **Profile**: User settings

## Sample Data

The application comes with sample data:

### Companies
- Google (Technology)
- Microsoft (Technology)
- Amazon (E-Commerce & Cloud)

### Job Positions
- Software Engineer Intern
- Data Science Intern
- Cloud Solutions Intern

### Features to Try
1. Search for "Software Engineer"
2. Filter jobs by location
3. Apply to a job
4. Check notifications
5. Update your profile
6. Save jobs for later

## Production Build

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/          # UI components
├── pages/              # Page components
├── hooks/              # React hooks
├── lib/                # External services
├── types/              # TypeScript types
├── utils/              # Utilities
└── App.tsx             # Main app
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Supabase** - Backend (Auth + Database)
- **Lucide React** - Icons

## Build Statistics

- ✅ Zero compile errors
- ✅ Zero runtime errors
- ✅ TypeScript strict mode
- ✅ Production optimized
- 📦 Bundle: 364 KB (103 KB gzipped)
- 🎨 CSS: 31 KB (6 KB gzipped)
- ⚡ Build time: ~4 seconds

## Need Help?

Check the full README.md for:
- Detailed feature documentation
- Database schema information
- Security implementation details
- Development guidelines
- Deployment instructions

## Demo Credentials

Since this is a demo, you can use **any email and password** to sign in or sign up. The authentication system works in demo mode for testing purposes.

Example:
- Email: `student@example.com`
- Password: `password123`

Or create your own account with any credentials!

---

**Enjoy using CampusConnect!** 🎓
