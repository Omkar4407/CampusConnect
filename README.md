# CampusConnect - jQuery & XML Integration

A modern campus placement portal with dynamic content loading using jQuery and XML data sources.

## 🚀 Features

### jQuery Integration
- **Dynamic Content Loading**: All job listings, student data, company information, and interview schedules are loaded dynamically from XML files
- **Interactive UI**: Smooth animations, hover effects, and real-time updates
- **Form Validation**: Client-side validation with instant feedback
- **Search & Filter**: Real-time search and filtering capabilities
- **Notifications**: Toast-style notifications for user feedback

### XML Data Structure
- **Modular Data**: Separate XML files for different data types
- **Structured Content**: Well-organized data hierarchy
- **Easy Maintenance**: Simple to update and extend

## 📁 Project Structure

```
CampusConnect/
├── data/                    # XML data files
│   ├── jobs.xml            # Job listings data
│   ├── students.xml        # Student registration data
│   ├── companies.xml       # Company information
│   └── interviews.xml      # Interview schedules
├── js/
│   └── app.js             # Main jQuery application logic
├── HTML Files
│   ├── index.html         # Landing page
│   ├── dashboard.html     # Main dashboard
│   ├── job_listings.html  # Job search and listings
│   ├── interview_schedule.html # Interview management
│   ├── student_reg.html   # Student registration
│   ├── company_reg.html   # Company registration
│   ├── profile.html       # User profile
│   ├── statistics.html    # Analytics and stats
│   ├── notifications.html # Notification center
│   └── resources.html     # Placement resources
├── style.css              # Enhanced CSS with animations
└── README.md             # This file
```

## 🔧 Technical Implementation

### jQuery Features
1. **AJAX Data Loading**: XML files are loaded asynchronously using jQuery AJAX
2. **DOM Manipulation**: Dynamic content generation and updates
3. **Event Handling**: Interactive elements with smooth user experience
4. **Animations**: CSS transitions and jQuery animations
5. **Form Handling**: Validation and submission processing

### XML Data Structure

#### Jobs XML (`data/jobs.xml`)
```xml
<jobs>
  <job>
    <id>1</id>
    <company>Google</company>
    <position>Software Engineer Intern</position>
    <location>Mountain View, CA</location>
    <salary>8000-12000</salary>
    <description>Job description...</description>
    <requirements>Requirements...</requirements>
    <deadline>2025-02-15</deadline>
    <status>open</status>
  </job>
</jobs>
```

#### Students XML (`data/students.xml`)
```xml
<students>
  <student>
    <id>1</id>
    <name>Omkar Bommakanti</name>
    <email>omkar.bommakanti@example.com</email>
    <phone>+91-9876543210</phone>
    <branch>Computer Science</branch>
    <year>4th Year</year>
    <gpa>3.8</gpa>
    <skills>Java, Python, JavaScript, React, Node.js</skills>
    <resume>omkar_resume.pdf</resume>
    <status>active</status>
  </student>
</students>
```

#### Companies XML (`data/companies.xml`)
```xml
<companies>
  <company>
    <id>1</id>
    <name>Google</name>
    <industry>Technology</industry>
    <website>https://www.google.com</website>
    <email>careers@google.com</email>
    <phone>+1-650-253-0000</phone>
    <location>Mountain View, CA</location>
    <description>Company description...</description>
    <hr_contact>Sarah Johnson</hr_contact>
    <hr_email>sarah.johnson@google.com</hr_email>
    <status>active</status>
  </company>
</companies>
```

#### Interviews XML (`data/interviews.xml`)
```xml
<interviews>
  <interview>
    <id>1</id>
    <company>Capgemini</company>
    <position>Consulting Intern</position>
    <student>Omkar Bommakanti</student>
    <date>2025-02-08</date>
    <time>14:00</time>
    <duration>60</duration>
    <type>Technical</type>
    <location>Virtual (Zoom)</location>
    <interviewer>Rajesh Kumar</interviewer>
    <status>scheduled</status>
    <notes>Interview notes...</notes>
  </interview>
</interviews>
```

## 🎯 Key Features

### 1. Dynamic Job Listings
- Real-time job search and filtering
- Company-based filtering
- Status-based filtering
- Interactive job cards with apply/save functionality

### 2. Interview Management
- Dynamic interview schedule display
- Join interview functionality
- Reschedule requests
- Interview status tracking

### 3. Form Validation
- Real-time validation feedback
- Email format validation
- URL validation for company websites
- GPA range validation

### 4. User Experience
- Smooth animations and transitions
- Toast notifications
- Responsive design
- Interactive hover effects

### 5. Dashboard Integration
- Real-time statistics updates
- Dynamic notification display
- Quick action buttons
- Profile data integration

## 🛠️ Usage

### Running the Application
1. Open any HTML file in a web browser
2. The application will automatically load XML data
3. All interactive features are immediately available

### Adding New Data
1. **Jobs**: Add new job entries to `data/jobs.xml`
2. **Students**: Add student records to `data/students.xml`
3. **Companies**: Add company information to `data/companies.xml`
4. **Interviews**: Add interview schedules to `data/interviews.xml`

### Customizing Styles
- Modify `style.css` for visual changes
- Add new CSS classes for custom components
- Update color schemes and animations

## 🔍 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🎨 Customization

### Adding New Features
1. Create new XML data files in the `data/` directory
2. Add corresponding functions in `js/app.js`
3. Update HTML templates as needed
4. Add CSS styles for new components

### Modifying Existing Features
1. Update XML data structure
2. Modify jQuery functions in `app.js`
3. Update HTML templates
4. Adjust CSS styles

## 🚀 Future Enhancements

- Database integration (MySQL/PostgreSQL)
- User authentication system
- Real-time chat functionality
- Email notifications
- Advanced analytics dashboard
- Mobile app development

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team.

---

**CampusConnect** - Connecting Students and Companies for a Better Future! 🎓
