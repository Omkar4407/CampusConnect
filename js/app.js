// CampusConnect - jQuery and XML Integration
$(document).ready(function() {
    
    // Global variables to store XML data
    let jobsData = [];
    let studentsData = [];
    let companiesData = [];
    let interviewsData = [];
    
    // Initialize the application
    initApp();
    
    function initApp() {
        // Load all XML data
        loadXMLData();
        
        // Initialize page-specific functionality
        initializePageFunctions();
        
        // Add smooth scrolling and animations
        addSmoothAnimations();
        
        // Initialize search functionality
        initializeSearch();
        
        // Add form validation
        addFormValidation();
    }
    
    function loadXMLData() {
        // Load jobs data
        $.ajax({
            url: 'data/jobs.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(xml) {
                jobsData = [];
                $(xml).find('job').each(function() {
                    jobsData.push({
                        id: $(this).find('id').text(),
                        company: $(this).find('company').text(),
                        position: $(this).find('position').text(),
                        location: $(this).find('location').text(),
                        salary: $(this).find('salary').text(),
                        description: $(this).find('description').text(),
                        requirements: $(this).find('requirements').text(),
                        deadline: $(this).find('deadline').text(),
                        status: $(this).find('status').text()
                    });
                });
                console.log('Jobs data loaded:', jobsData.length, 'jobs');
                updateDashboardStats();
            },
            error: function(xhr, status, error) {
                console.error('Error loading jobs data:', error);
            }
        });
        
        // Load students data
        $.ajax({
            url: 'data/students.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(xml) {
                studentsData = [];
                $(xml).find('student').each(function() {
                    studentsData.push({
                        id: $(this).find('id').text(),
                        name: $(this).find('name').text(),
                        email: $(this).find('email').text(),
                        phone: $(this).find('phone').text(),
                        branch: $(this).find('branch').text(),
                        year: $(this).find('year').text(),
                        gpa: $(this).find('gpa').text(),
                        skills: $(this).find('skills').text(),
                        resume: $(this).find('resume').text(),
                        status: $(this).find('status').text()
                    });
                });
                console.log('Students data loaded:', studentsData.length, 'students');
            },
            error: function(xhr, status, error) {
                console.error('Error loading students data:', error);
            }
        });
        
        // Load companies data
        $.ajax({
            url: 'data/companies.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(xml) {
                companiesData = [];
                $(xml).find('company').each(function() {
                    companiesData.push({
                        id: $(this).find('id').text(),
                        name: $(this).find('name').text(),
                        industry: $(this).find('industry').text(),
                        website: $(this).find('website').text(),
                        email: $(this).find('email').text(),
                        phone: $(this).find('phone').text(),
                        location: $(this).find('location').text(),
                        description: $(this).find('description').text(),
                        hr_contact: $(this).find('hr_contact').text(),
                        hr_email: $(this).find('hr_email').text(),
                        status: $(this).find('status').text()
                    });
                });
                console.log('Companies data loaded:', companiesData.length, 'companies');
            },
            error: function(xhr, status, error) {
                console.error('Error loading companies data:', error);
            }
        });
        
        // Load interviews data
        $.ajax({
            url: 'data/interviews.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(xml) {
                interviewsData = [];
                $(xml).find('interview').each(function() {
                    interviewsData.push({
                        id: $(this).find('id').text(),
                        company: $(this).find('company').text(),
                        position: $(this).find('position').text(),
                        student: $(this).find('student').text(),
                        date: $(this).find('date').text(),
                        time: $(this).find('time').text(),
                        duration: $(this).find('duration').text(),
                        type: $(this).find('type').text(),
                        location: $(this).find('location').text(),
                        interviewer: $(this).find('interviewer').text(),
                        status: $(this).find('status').text(),
                        notes: $(this).find('notes').text()
                    });
                });
                console.log('Interviews data loaded:', interviewsData.length, 'interviews');
                updateDashboardStats();
            },
            error: function(xhr, status, error) {
                console.error('Error loading interviews data:', error);
            }
        });
    }
    
    function initializePageFunctions() {
        const currentPage = window.location.pathname.split('/').pop();
        
        switch(currentPage) {
            case 'job_listings.html':
                initializeJobListings();
                break;
            case 'dashboard.html':
                initializeDashboard();
                break;
            case 'interview_schedule.html':
                initializeInterviewSchedule();
                break;
            case 'student_reg.html':
                initializeStudentRegistration();
                break;
            case 'company_reg.html':
                initializeCompanyRegistration();
                break;
            case 'profile.html':
                initializeProfile();
                break;
            case 'statistics.html':
                initializeStatistics();
                break;
            case 'notifications.html':
                initializeNotifications();
                break;
            case 'resources.html':
                initializeResources();
                break;
        }
    }
    
    function initializeJobListings() {
        if (jobsData.length > 0) {
            displayJobs(jobsData);
        } else {
            // Wait for data to load
            setTimeout(initializeJobListings, 500);
        }
    }
    
    function displayJobs(jobs) {
        const jobsContainer = $('#jobs-container');
        if (jobsContainer.length === 0) return;
        
        jobsContainer.empty();
        
        jobs.forEach(job => {
            const jobCard = $(`
                <div class="job-card" data-job-id="${job.id}">
                    <div class="job-header">
                        <h3>${job.position}</h3>
                        <span class="company-name">${job.company}</span>
                        <span class="job-status ${job.status}">${job.status.toUpperCase()}</span>
                    </div>
                    <div class="job-details">
                        <p><i class="fa fa-map-marker-alt"></i> ${job.location}</p>
                        <p><i class="fa fa-money-bill-wave"></i> $${job.salary}</p>
                        <p><i class="fa fa-calendar"></i> Deadline: ${formatDate(job.deadline)}</p>
                    </div>
                    <div class="job-description">
                        <p>${job.description}</p>
                    </div>
                    <div class="job-requirements">
                        <h4>Requirements:</h4>
                        <p>${job.requirements}</p>
                    </div>
                    <div class="job-actions">
                        <button class="btn-apply" onclick="applyForJob(${job.id})">
                            <i class="fa fa-paper-plane"></i> Apply Now
                        </button>
                        <button class="btn-save" onclick="saveJob(${job.id})">
                            <i class="fa fa-bookmark"></i> Save
                        </button>
                    </div>
                </div>
            `);
            
            jobsContainer.append(jobCard);
        });
        
        // Add animation
        $('.job-card').hide().each(function(index) {
            $(this).delay(index * 100).fadeIn(500);
        });
    }
    
    function initializeDashboard() {
        // Update dashboard with real-time data
        updateDashboardStats();
        
        // Add interactive elements
        $('.quick-action').click(function() {
            const action = $(this).data('action');
            handleQuickAction(action);
        });
    }
    
    function updateDashboardStats() {
        if (jobsData.length > 0) {
            $('#statApps').text(jobsData.filter(job => job.status === 'open').length);
        }
        if (interviewsData.length > 0) {
            $('#statInterviews').text(interviewsData.filter(int => int.status === 'scheduled').length);
        }
        // Mock offers count
        $('#statOffers').text('2');
    }
    
    function initializeInterviewSchedule() {
        if (interviewsData.length > 0) {
            displayInterviews(interviewsData);
        } else {
            setTimeout(initializeInterviewSchedule, 500);
        }
    }
    
    function displayInterviews(interviews) {
        const interviewsContainer = $('#interviews-container');
        if (interviewsContainer.length === 0) return;
        
        interviewsContainer.empty();
        
        interviews.forEach(interview => {
            const interviewCard = $(`
                <div class="interview-card" data-interview-id="${interview.id}">
                    <div class="interview-header">
                        <h3>${interview.position}</h3>
                        <span class="company-name">${interview.company}</span>
                        <span class="interview-status ${interview.status}">${interview.status.toUpperCase()}</span>
                    </div>
                    <div class="interview-details">
                        <p><i class="fa fa-calendar"></i> ${formatDate(interview.date)}</p>
                        <p><i class="fa fa-clock"></i> ${interview.time} (${interview.duration} min)</p>
                        <p><i class="fa fa-map-marker-alt"></i> ${interview.location}</p>
                        <p><i class="fa fa-user"></i> ${interview.interviewer}</p>
                        <p><i class="fa fa-tag"></i> ${interview.type}</p>
                    </div>
                    <div class="interview-notes">
                        <h4>Notes:</h4>
                        <p>${interview.notes}</p>
                    </div>
                    <div class="interview-actions">
                        <button class="btn-join" onclick="joinInterview(${interview.id})">
                            <i class="fa fa-video"></i> Join Interview
                        </button>
                        <button class="btn-reschedule" onclick="rescheduleInterview(${interview.id})">
                            <i class="fa fa-calendar-plus"></i> Reschedule
                        </button>
                    </div>
                </div>
            `);
            
            interviewsContainer.append(interviewCard);
        });
    }
    
    function addSmoothAnimations() {
        // Smooth scrolling for anchor links
        $('a[href^="#"]').click(function(e) {
            e.preventDefault();
            const target = $($(this).attr('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 800);
            }
        });
        
        // Fade in elements on scroll
        $(window).scroll(function() {
            $('.fade-in').each(function() {
                const elementTop = $(this).offset().top;
                const elementBottom = elementTop + $(this).outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();
                
                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).addClass('visible');
                }
            });
        });
        
        // Hover effects for cards
        $('.card, .job-card, .interview-card').hover(
            function() {
                $(this).addClass('hover');
            },
            function() {
                $(this).removeClass('hover');
            }
        );
    }
    
    function initializeSearch() {
        // The existing search functionality in job_listings.html will handle the search
        // This function is kept for potential future enhancements
        console.log('Search functionality initialized');
    }
    
    function addFormValidation() {
        // Student registration form validation
        $('#student-reg-form').submit(function(e) {
            e.preventDefault();
            
            const formData = {
                name: $('#student-name').val(),
                email: $('#student-email').val(),
                phone: $('#student-phone').val(),
                branch: $('#student-branch').val(),
                year: $('#student-year').val(),
                gpa: $('#student-gpa').val()
            };
            
            if (validateStudentForm(formData)) {
                saveStudentData(formData);
                showNotification('Student registration successful!', 'success');
            }
        });
        
        // Company registration form validation
        $('#company-reg-form').submit(function(e) {
            e.preventDefault();
            
            const formData = {
                name: $('#company-name').val(),
                industry: $('#company-industry').val(),
                website: $('#company-website').val(),
                email: $('#company-email').val(),
                phone: $('#company-phone').val(),
                location: $('#company-location').val()
            };
            
            if (validateCompanyForm(formData)) {
                saveCompanyData(formData);
                showNotification('Company registration successful!', 'success');
            }
        });
    }
    
    function validateStudentForm(data) {
        let isValid = true;
        
        if (!data.name || data.name.length < 2) {
            showNotification('Please enter a valid name', 'error');
            isValid = false;
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            isValid = false;
        }
        
        if (!data.phone || data.phone.length < 10) {
            showNotification('Please enter a valid phone number', 'error');
            isValid = false;
        }
        
        if (!data.gpa || data.gpa < 0 || data.gpa > 4) {
            showNotification('Please enter a valid GPA (0-4)', 'error');
            isValid = false;
        }
        
        return isValid;
    }
    
    function validateCompanyForm(data) {
        let isValid = true;
        
        if (!data.name || data.name.length < 2) {
            showNotification('Please enter a valid company name', 'error');
            isValid = false;
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            isValid = false;
        }
        
        if (!data.website || !isValidUrl(data.website)) {
            showNotification('Please enter a valid website URL', 'error');
            isValid = false;
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
    
    function showNotification(message, type = 'info') {
        const notification = $(`
            <div class="notification ${type}">
                <i class="fa fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="close-notification">&times;</button>
            </div>
        `);
        
        $('body').append(notification);
        
        notification.fadeIn(300);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.fadeOut(300, function() {
                $(this).remove();
            });
        }, 5000);
        
        // Manual close
        notification.find('.close-notification').click(function() {
            notification.fadeOut(300, function() {
                $(this).remove();
            });
        });
    }
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Global functions for button clicks
    window.applyForJob = function(jobId) {
        const job = jobsData.find(j => j.id == jobId);
        if (job) {
            showNotification(`Application submitted for ${job.position} at ${job.company}!`, 'success');
        }
    };
    
    window.saveJob = function(jobId) {
        const job = jobsData.find(j => j.id == jobId);
        if (job) {
            showNotification(`Job saved: ${job.position} at ${job.company}`, 'info');
        }
    };
    
    window.joinInterview = function(interviewId) {
        const interview = interviewsData.find(i => i.id == interviewId);
        if (interview) {
            showNotification(`Joining interview for ${interview.position} at ${interview.company}`, 'info');
        }
    };
    
    window.rescheduleInterview = function(interviewId) {
        const interview = interviewsData.find(i => i.id == interviewId);
        if (interview) {
            showNotification(`Reschedule request sent for ${interview.position}`, 'info');
        }
    };
    
    function saveStudentData(data) {
        // In a real application, this would save to a database
        console.log('Saving student data:', data);
        // For demo purposes, we'll just show a success message
    }
    
    function saveCompanyData(data) {
        // In a real application, this would save to a database
        console.log('Saving company data:', data);
        // For demo purposes, we'll just show a success message
    }
    
    function handleQuickAction(action) {
        switch(action) {
            case 'browse-jobs':
                window.location.href = 'job_listings.html';
                break;
            case 'edit-profile':
                window.location.href = 'profile.html';
                break;
            case 'view-resources':
                window.location.href = 'resources.html';
                break;
            case 'schedule-interview':
                window.location.href = 'interview_schedule.html';
                break;
        }
    }
    
    // Initialize remaining page functions
    function initializeStudentRegistration() {
        // Add dynamic form validation
        $('#student-gpa').on('input', function() {
            const gpa = parseFloat($(this).val());
            if (gpa < 0 || gpa > 4) {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
    }
    
    function initializeCompanyRegistration() {
        // Add dynamic form validation
        $('#company-website').on('blur', function() {
            const url = $(this).val();
            if (url && !isValidUrl(url)) {
                $(this).addClass('error');
                showNotification('Please enter a valid website URL', 'error');
            } else {
                $(this).removeClass('error');
            }
        });
    }
    
    function initializeProfile() {
        // Load user profile data
        const currentUser = studentsData.find(s => s.name === 'Omkar Bommakanti');
        if (currentUser) {
            $('#profile-name').text(currentUser.name);
            $('#profile-email').text(currentUser.email);
            $('#profile-phone').text(currentUser.phone);
            $('#profile-branch').text(currentUser.branch);
            $('#profile-year').text(currentUser.year);
            $('#profile-gpa').text(currentUser.gpa);
            $('#profile-skills').text(currentUser.skills);
        }
    }
    
    function initializeStatistics() {
        // Create charts and statistics using the loaded data
        if (jobsData.length > 0) {
            updateJobStatistics();
        }
        if (interviewsData.length > 0) {
            updateInterviewStatistics();
        }
    }
    
    function updateJobStatistics() {
        const totalJobs = jobsData.length;
        const openJobs = jobsData.filter(job => job.status === 'open').length;
        const closedJobs = totalJobs - openJobs;
        
        // Update statistics display
        $('#total-jobs').text(totalJobs);
        $('#open-jobs').text(openJobs);
        $('#closed-jobs').text(closedJobs);
    }
    
    function updateInterviewStatistics() {
        const totalInterviews = interviewsData.length;
        const scheduledInterviews = interviewsData.filter(int => int.status === 'scheduled').length;
        const completedInterviews = interviewsData.filter(int => int.status === 'completed').length;
        
        // Update statistics display
        $('#total-interviews').text(totalInterviews);
        $('#scheduled-interviews').text(scheduledInterviews);
        $('#completed-interviews').text(completedInterviews);
    }
    
    function initializeNotifications() {
        // Create sample notifications
        const notifications = [
            {
                type: 'interview',
                message: 'Capgemini interview scheduled for 8th July, 2 PM',
                time: '2 hours ago'
            },
            {
                type: 'job',
                message: 'Google posted a new opening for Software Intern',
                time: '1 day ago'
            },
            {
                type: 'offer',
                message: 'Infosys selected 5 students for final round',
                time: '2 days ago'
            }
        ];
        
        displayNotifications(notifications);
    }
    
    function displayNotifications(notifications) {
        const container = $('#notifications-container');
        if (container.length === 0) return;
        
        container.empty();
        
        notifications.forEach(notification => {
            const notificationItem = $(`
                <div class="notification-item ${notification.type}">
                    <div class="notification-icon">
                        <i class="fa fa-${notification.type === 'interview' ? 'calendar-check' : notification.type === 'job' ? 'briefcase' : 'award'}"></i>
                    </div>
                    <div class="notification-content">
                        <p>${notification.message}</p>
                        <span class="notification-time">${notification.time}</span>
                    </div>
                    <button class="mark-read">&times;</button>
                </div>
            `);
            
            container.append(notificationItem);
        });
    }
    
    function initializeResources() {
        // Add interactive resource cards
        $('.resource-card').click(function() {
            const resourceType = $(this).data('type');
            showResourceDetails(resourceType);
        });
    }
    
    function showResourceDetails(type) {
        const resources = {
            'resume': {
                title: 'Resume Writing Guide',
                content: 'Learn how to create a professional resume that stands out to employers.',
                link: '#'
            },
            'interview': {
                title: 'Interview Preparation',
                content: 'Tips and techniques to ace your technical and behavioral interviews.',
                link: '#'
            },
            'coding': {
                title: 'Coding Practice',
                content: 'Practice coding problems and improve your programming skills.',
                link: '#'
            }
        };
        
        const resource = resources[type];
        if (resource) {
            showNotification(`Opening ${resource.title}`, 'info');
        }
    }
});
