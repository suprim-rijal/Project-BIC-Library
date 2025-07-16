document.addEventListener('DOMContentLoaded', function() {
    // Notification dropdown toggle
    const notificationBtn = document.querySelector('.notification-btn');
    const notificationDropdown = document.querySelector('.notification-dropdown');
    
    notificationBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
        document.querySelector('.user-dropdown').style.display = 'none';
    });
    
    // User dropdown toggle
    const userMenuBtn = document.querySelector('.user-menu-btn');
    const userDropdown = document.querySelector('.user-dropdown');
    
    userMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        notificationDropdown.style.display = 'none';
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        notificationDropdown.style.display = 'none';
        userDropdown.style.display = 'none';
    });
    
    // Tab switching
    const navLinks = document.querySelectorAll('.admin-nav a');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked nav item
            this.parentElement.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the selected tab content
            const tabId = this.getAttribute('href').substring(1);
            document.getElementById(`${tabId}-content`).classList.add('active');
            
            // Update page title
            document.querySelector('.admin-header h1').textContent = this.querySelector('span').textContent;
        });
    });
    
    // Time filter buttons
    const timeFilterBtns = document.querySelectorAll('.time-filter button');
    
    timeFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            timeFilterBtns.forEach(button => button.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Pagination
    const paginationLinks = document.querySelectorAll('.page-link');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all pagination items
            document.querySelectorAll('.page-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked pagination item
            this.parentElement.classList.add('active');
        });
    });
    
    // Quick action buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Here you would handle the action button clicks
            // For now, just show an alert
            const action = this.querySelector('span').textContent;
            alert(`Action: ${action}`);
        });
    });
});