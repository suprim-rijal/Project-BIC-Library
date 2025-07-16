// Initialize data
document.addEventListener('DOMContentLoaded', function() {
    // Load student data
    loadStudentData();
    
    // Load reservations
    loadReservations();
    
    // Load calendar
    const now = new Date();
    loadCalendar(now.getFullYear(), now.getMonth());
    
    // Load reading history
    loadReadingHistory();
    
    // Initialize chart
    initReadingChart();
    
    // Set up event listeners for calendar navigation
    document.getElementById('prev-month').addEventListener('click', function() {
        const currentMonthText = document.getElementById('current-month').textContent;
        const [monthName, year] = currentMonthText.split(' ');
        const monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"];
        const currentMonthIndex = monthNames.indexOf(monthName);
        const currentYear = parseInt(year);
        
        let newYear = currentYear;
        let newMonthIndex = currentMonthIndex - 1;
        
        if (newMonthIndex < 0) {
            newMonthIndex = 11;
            newYear--;
        }
        
        loadCalendar(newYear, newMonthIndex);
    });
    
    document.getElementById('next-month').addEventListener('click', function() {
        const currentMonthText = document.getElementById('current-month').textContent;
        const [monthName, year] = currentMonthText.split(' ');
        const monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"];
        const currentMonthIndex = monthNames.indexOf(monthName);
        const currentYear = parseInt(year);
        
        let newYear = currentYear;
        let newMonthIndex = currentMonthIndex + 1;
        
        if (newMonthIndex > 11) {
            newMonthIndex = 0;
            newYear++;
        }
        
        loadCalendar(newYear, newMonthIndex);
    });
    
    // Set up navigation tabs
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab styling
            navLinks.forEach(l => {
                l.classList.remove('active');
                l.style.color = '';
            });
            this.classList.add('active');
            this.style.color = '#004080';
            
            // Show the corresponding content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
    
    // Set up profile edit functionality
    document.getElementById('edit-personal-btn').addEventListener('click', function() {
        // Show editable fields
        document.getElementById('student-email-display').classList.add('hidden');
        document.getElementById('student-email-edit').classList.remove('hidden');
        document.getElementById('student-program-display').classList.add('hidden');
        document.getElementById('student-program-edit').classList.remove('hidden');
        document.getElementById('student-semester-display').classList.add('hidden');
        document.getElementById('student-semester-edit').classList.remove('hidden');
        
        // Show save/cancel buttons
        document.getElementById('personal-btns').classList.remove('hidden');
        
        // Hide edit button
        this.classList.add('hidden');
    });
    
    document.getElementById('edit-contact-btn').addEventListener('click', function() {
        // Show editable fields
        document.getElementById('student-phone-display').classList.add('hidden');
        document.getElementById('student-phone-edit').classList.remove('hidden');
        document.getElementById('student-address-display').classList.add('hidden');
        document.getElementById('student-address-edit').classList.remove('hidden');
        document.getElementById('student-dob-display').classList.add('hidden');
        document.getElementById('student-dob-edit').classList.remove('hidden');
        document.getElementById('student-emergency-display').classList.add('hidden');
        document.getElementById('student-emergency-edit').classList.remove('hidden');
        
        // Show save/cancel buttons
        document.getElementById('contact-btns').classList.remove('hidden');
        
        // Hide edit button
        this.classList.add('hidden');
    });
    
    // Save personal info
    document.getElementById('save-personal-btn').addEventListener('click', function() {
        // Get values from inputs
        const email = document.getElementById('student-email-edit').value;
        const program = document.getElementById('student-program-edit').value;
        const semester = document.getElementById('student-semester-edit').value;
        
        // Update display fields
        document.getElementById('student-email-display').textContent = email;
        document.getElementById('student-program-display').textContent = program;
        document.getElementById('student-semester-display').textContent = semester;
        
        // Hide editable fields
        document.getElementById('student-email-display').classList.remove('hidden');
        document.getElementById('student-email-edit').classList.add('hidden');
        document.getElementById('student-program-display').classList.remove('hidden');
        document.getElementById('student-program-edit').classList.add('hidden');
        document.getElementById('student-semester-display').classList.remove('hidden');
        document.getElementById('student-semester-edit').classList.add('hidden');
        
        // Hide save/cancel buttons
        document.getElementById('personal-btns').classList.add('hidden');
        
        // Show edit button
        document.getElementById('edit-personal-btn').classList.remove('hidden');
        
        // Update header info
        document.getElementById('student-id').textContent = `BIC-2023-001 | ${program}`;
    });
    
    // Cancel personal info edit
    document.getElementById('cancel-personal-btn').addEventListener('click', function() {
        // Hide editable fields
        document.getElementById('student-email-display').classList.remove('hidden');
        document.getElementById('student-email-edit').classList.add('hidden');
        document.getElementById('student-program-display').classList.remove('hidden');
        document.getElementById('student-program-edit').classList.add('hidden');
        document.getElementById('student-semester-display').classList.remove('hidden');
        document.getElementById('student-semester-edit').classList.add('hidden');
        
        // Hide save/cancel buttons
        document.getElementById('personal-btns').classList.add('hidden');
        
        // Show edit button
        document.getElementById('edit-personal-btn').classList.remove('hidden');
    });
    
    // Save contact info
    document.getElementById('save-contact-btn').addEventListener('click', function() {
        // Get values from inputs
        const phone = document.getElementById('student-phone-edit').value;
        const address = document.getElementById('student-address-edit').value;
        const dob = document.getElementById('student-dob-edit').value;
        const emergency = document.getElementById('student-emergency-edit').value;
        
        // Format date
        const dobDate = new Date(dob);
        const formattedDob = dobDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        // Update display fields
        document.getElementById('student-phone-display').textContent = phone;
        document.getElementById('student-address-display').textContent = address;
        document.getElementById('student-dob-display').textContent = formattedDob;
        document.getElementById('student-emergency-display').textContent = emergency;
        
        // Hide editable fields
        document.getElementById('student-phone-display').classList.remove('hidden');
        document.getElementById('student-phone-edit').classList.add('hidden');
        document.getElementById('student-address-display').classList.remove('hidden');
        document.getElementById('student-address-edit').classList.add('hidden');
        document.getElementById('student-dob-display').classList.remove('hidden');
        document.getElementById('student-dob-edit').classList.add('hidden');
        document.getElementById('student-emergency-display').classList.remove('hidden');
        document.getElementById('student-emergency-edit').classList.add('hidden');
        
        // Hide save/cancel buttons
        document.getElementById('contact-btns').classList.add('hidden');
        
        // Show edit button
        document.getElementById('edit-contact-btn').classList.remove('hidden');
    });
    
    // Cancel contact info edit
    document.getElementById('cancel-contact-btn').addEventListener('click', function() {
        // Hide editable fields
        document.getElementById('student-phone-display').classList.remove('hidden');
        document.getElementById('student-phone-edit').classList.add('hidden');
        document.getElementById('student-address-display').classList.remove('hidden');
        document.getElementById('student-address-edit').classList.add('hidden');
        document.getElementById('student-dob-display').classList.remove('hidden');
        document.getElementById('student-dob-edit').classList.add('hidden');
        document.getElementById('student-emergency-display').classList.remove('hidden');
        document.getElementById('student-emergency-edit').classList.add('hidden');
        
        // Hide save/cancel buttons
        document.getElementById('contact-btns').classList.add('hidden');
        
        // Show edit button
        document.getElementById('edit-contact-btn').classList.remove('hidden');
    });
    
    // Set up dropdown menus
    document.querySelectorAll('.menu-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const menu = this.nextElementSibling;
            document.querySelectorAll('.menu-dropdown').forEach(m => {
                if (m !== menu) m.classList.add('hidden');
            });
            menu.classList.toggle('hidden');
        });
    });
    
    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', function() {
        document.querySelectorAll('.menu-dropdown').forEach(menu => {
            menu.classList.add('hidden');
        });
    });
});

// Initialize reading activity chart
function initReadingChart() {
    const ctx = document.getElementById('readingChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Books Read',
                data: [3, 5, 4, 6, 5, 2],
                backgroundColor: '#3b82f6',
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1e3a8a',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `${context.raw} book${context.raw !== 1 ? 's' : ''}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        callback: function(value) {
                            return Number.isInteger(value) ? value : '';
                        }
                    }
                }
            }
        }
    });
}

// Student data
function loadStudentData() {
    // In a real app, this would come from an API or localStorage
    const studentData = {
        name: "John Doe",
        id: "BIC-2023-001",
        email: "john.doe@bic.edu.np",
        program: "BBA Finance",
        semester: "Third Semester",
        joined: "January 15, 2023",
        phone: "+977 9841234567",
        address: "Bharatpur-10, Chitwan",
        dob: "March 15, 2002",
        emergency: "Jane Doe (Mother) +977 9847654321",
        totalBooks: 24,
        currentReservations: 3,
        dueBooks: 2
    };
    
    document.getElementById('student-name').textContent = studentData.name;
    document.getElementById('student-id').textContent = `${studentData.id} | ${studentData.program}`;
    document.getElementById('student-id-full').textContent = studentData.id;
    document.getElementById('student-email-display').textContent = studentData.email;
    document.getElementById('student-email-edit').value = studentData.email;
    document.getElementById('student-program-display').textContent = studentData.program;
    document.getElementById('student-program-edit').value = studentData.program;
    document.getElementById('student-semester-display').textContent = studentData.semester;
    document.getElementById('student-semester-edit').value = studentData.semester;
    document.getElementById('student-joined').textContent = studentData.joined;
    document.getElementById('student-phone-display').textContent = studentData.phone;
    document.getElementById('student-phone-edit').value = studentData.phone;
    document.getElementById('student-address-display').textContent = studentData.address;
    document.getElementById('student-address-edit').value = studentData.address;
    document.getElementById('student-dob-display').textContent = studentData.dob;
    document.getElementById('student-dob-edit').value = "2002-03-15";
    document.getElementById('student-emergency-display').textContent = studentData.emergency;
    document.getElementById('student-emergency-edit').value = studentData.emergency;
    document.getElementById('total-books').textContent = studentData.totalBooks;
    document.getElementById('current-reservations').textContent = studentData.currentReservations;
    document.getElementById('due-books').textContent = studentData.dueBooks;
}

// Calendar functions
function loadCalendar(year, month) {
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];
    
    // Update month/year display
    document.getElementById('current-month').textContent = `${monthNames[month]} ${year}`;
    
    // Get first day of month and total days in month
    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday, 1 = Monday, etc.
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get days from previous month to show
    const prevMonthDays = new Date(year, month, 0).getDate();
    
    // Clear existing calendar days
    const calendarDays = document.getElementById('calendar-days');
    calendarDays.innerHTML = '';
    
    // Add days from previous month
    for (let i = firstDay - 1; i >= 0; i--) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.innerHTML = `
            <div class="w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium text-gray-400">
                ${prevMonthDays - i}
            </div>
        `;
        calendarDays.appendChild(dayElement);
    }
    
    // Add days for current month
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
    
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        // Check if this is today
        const isToday = isCurrentMonth && i === today.getDate();
        
        // Randomly add event indicators (for demo purposes)
        const hasEvent = Math.random() > 0.7;
        
        dayElement.innerHTML = `
            <div class="w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${isToday ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}">
                ${i}
            </div>
            ${hasEvent ? '<div class="flex justify-center space-x-1 mt-1"><div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div></div>' : ''}
        `;
        
        if (isToday) {
            dayElement.classList.add('today');
        }
        
        calendarDays.appendChild(dayElement);
    }
    
    // Calculate remaining cells to fill the grid (next month days)
    const totalCells = 42; // 6 rows x 7 days
    const daysSoFar = firstDay + daysInMonth;
    const remainingCells = totalCells - daysSoFar;
    
    // Add days from next month
    for (let i = 1; i <= remainingCells; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.innerHTML = `
            <div class="w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium text-gray-400">
                ${i}
            </div>
        `;
        calendarDays.appendChild(dayElement);
    }
}

// Reservations data
function loadReservations() {
    // This would be replaced with actual data loading in a real app
    console.log("Loading reservations...");
}

// Reading history
function loadReadingHistory() {
    // This would be replaced with actual data loading in a real app
    console.log("Loading reading history...");
}

// Helper functions
function formatDate(dateString) {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatTime(dateString) {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function renderRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star rating-star"></i>';
        } else {
            stars += '<i class="far fa-star rating-star"></i>';
        }
    }
    return stars;
}