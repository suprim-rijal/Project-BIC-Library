// Sample book data (10 books)
const books = [
    {
        id: 1,
        title: "Financial Accounting",
        author: "John Smith",
        isbn: "978-1259914898",
        courseCategory: ["BBA", "BBA Finance"],
        semester: ["1", "2"],
        availability: "available",
        type: "physical",
        rating: 4.5,
        cover: "https://m.media-amazon.com/images/I/51eqjXwFzwL._SY425_.jpg",
        description: "Comprehensive guide to financial accounting principles and practices for business students. This textbook covers all fundamental aspects of financial accounting including balance sheets, income statements, and cash flow statements. It's designed specifically for first and second semester students in business administration programs."
    },
    {
        id: 2,
        title: "Marketing Principles",
        author: "Sarah Johnson",
        isbn: "978-0134492513",
        courseCategory: ["BBA", "BHM"],
        semester: ["3"],
        availability: "reserved",
        type: "physical",
        rating: 4.2,
        cover: "https://m.media-amazon.com/images/I/41xShlnTZTL._SY425_.jpg",
        description: "Fundamental concepts of marketing with real-world applications and case studies. This book provides a thorough introduction to marketing concepts, consumer behavior, market research, and marketing strategies. Ideal for third semester students looking to build a strong foundation in marketing principles."
    },
    {
        id: 3,
        title: "Database Systems",
        author: "Michael Brown",
        isbn: "978-0133970777",
        courseCategory: ["BCIS", "BCSIT"],
        semester: ["4", "5"],
        availability: "checked-out",
        type: "physical",
        rating: 4.7,
        cover: "https://m.media-amazon.com/images/I/51Ga5GuElyL._SY425_.jpg",
        description: "Comprehensive coverage of database design, implementation, and management. This textbook is essential for fourth and fifth semester computer science students, covering relational database theory, SQL, normalization, and database administration. Includes practical examples and exercises."
    },
    {
        id: 4,
        title: "Business Law",
        author: "Emily Wilson",
        isbn: "978-1260091812",
        courseCategory: ["BBA", "BBA Finance"],
        semester: ["2", "3"],
        availability: "available",
        type: "ebook",
        rating: 4.0,
        cover: "https://m.media-amazon.com/images/I/51Uok2Bn13L._SY425_.jpg",
        description: "Essential legal concepts for business students with practical examples. This book covers contract law, torts, business organizations, and regulatory compliance. Perfect for second and third semester students who need to understand the legal environment of business."
    },
    {
        id: 5,
        title: "Corporate Finance",
        author: "David Lee",
        isbn: "978-1259918940",
        courseCategory: ["BBA Finance", "MBA"],
        semester: ["5", "6"],
        availability: "available",
        type: "physical",
        rating: 4.8,
        cover: "https://m.media-amazon.com/images/I/51Nswyy224L._SY425_.jpg",
        description: "Advanced corporate finance concepts with case studies and financial analysis. This comprehensive text is designed for fifth and sixth semester finance students, covering capital budgeting, risk management, corporate valuation, and financial strategy. Includes real-world case studies from global corporations."
    },
    {
        id: 6,
        title: "Organizational Behavior",
        author: "Sarah Johnson",
        isbn: "978-0134729329",
        courseCategory: ["BBA", "MBA"],
        semester: ["4"],
        availability: "available",
        type: "physical",
        rating: 4.3,
        cover: "https://m.media-amazon.com/images/I/51Q5Y2VVCGL._SY425_.jpg",
        description: "Understanding human behavior in organizational settings for better management. This fourth semester textbook explores individual and group behavior in organizations, motivation, leadership, organizational culture, and change management. Features numerous case studies and self-assessment tools."
    },
    {
        id: 7,
        title: "Strategic Management",
        author: "Robert Davis",
        isbn: "978-1260092376",
        courseCategory: ["BBA", "MBA", "MBS"],
        semester: ["6", "7"],
        availability: "reserved",
        type: "ebook",
        rating: 4.6,
        cover: "https://m.media-amazon.com/images/I/41SNoh5ZhOL._SY425_.jpg",
        description: "Comprehensive guide to strategic planning and competitive advantage. Designed for sixth and seventh semester students, this book covers environmental scanning, strategy formulation, implementation, and evaluation. Includes contemporary examples of strategic management in global businesses."
    },
    {
        id: 8,
        title: "Human Resource Management",
        author: "Jennifer Adams",
        isbn: "978-1260565768",
        courseCategory: ["BBA", "MBA"],
        semester: ["5"],
        availability: "available",
        type: "physical",
        rating: 4.1,
        cover: "https://m.media-amazon.com/images/I/51R1T5nR5TL._SY425_.jpg",
        description: "Modern approaches to managing human resources in organizations. This fifth semester textbook covers recruitment, selection, training, performance appraisal, compensation, and labor relations. Features current HR trends and best practices from leading organizations."
    },
    {
        id: 9,
        title: "Operations Management",
        author: "William Taylor",
        isbn: "978-1260566475",
        courseCategory: ["BBA", "BHM"],
        semester: ["4", "5"],
        availability: "checked-out",
        type: "physical",
        rating: 4.4,
        cover: "https://m.media-amazon.com/images/I/51wGZQx0qPL._SY425_.jpg",
        description: "Efficient production and operations management techniques. This book is essential for fourth and fifth semester students, covering process design, capacity planning, quality management, supply chain management, and lean operations. Includes quantitative models and real-world applications."
    },
    {
        id: 10,
        title: "Business Statistics",
        author: "Michael Brown",
        isbn: "978-1260547658",
        courseCategory: ["BBA", "BBA Finance", "BCIS"],
        semester: ["2", "3"],
        availability: "available",
        type: "ebook",
        rating: 3.9,
        cover: "https://m.media-amazon.com/images/I/51T3R1oN8ZL._SY425_.jpg",
        description: "Statistical methods for business decision making and analysis. This textbook is designed for second and third semester students, covering descriptive statistics, probability, hypothesis testing, regression analysis, and forecasting. Features Excel applications and business case examples."
    }
];

// DOM Elements
const bookGrid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');
const courseFilter = document.getElementById('courseFilter');
const semesterFilter = document.getElementById('semesterFilter');
const availabilityFilter = document.getElementById('availabilityFilter');
const typeFilter = document.getElementById('typeFilter');
const sortBy = document.getElementById('sortBy');
const noResults = document.getElementById('noResults');
const bookCount = document.getElementById('bookCount');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const successMessage = document.getElementById('successMessage');
const successText = document.getElementById('successText');
const bookDetailView = document.getElementById('bookDetailView');
const bookDetailContent = document.getElementById('bookDetailContent');
const bookDetailClose = document.getElementById('bookDetailClose');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Initial render
    renderBooks(books);

    // Event listeners for filters
    searchInput.addEventListener('input', filterBooks);
    courseFilter.addEventListener('change', filterBooks);
    semesterFilter.addEventListener('change', filterBooks);
    availabilityFilter.addEventListener('change', filterBooks);
    typeFilter.addEventListener('change', filterBooks);
    sortBy.addEventListener('change', filterBooks);

    // Close book detail view
    bookDetailClose.addEventListener('click', () => {
        bookDetailView.style.display = 'none';
    });
});

// Filter and render books based on criteria
function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const courseValue = courseFilter.value;
    const semesterValue = semesterFilter.value;
    const availabilityValue = availabilityFilter.value;
    const typeValue = typeFilter.value;
    const sortValue = sortBy.value;

    let filteredBooks = books.filter(book => {
        // Search term matching
        const matchesSearch = searchTerm === '' || 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm) ||
            book.isbn.includes(searchTerm);
        
        // Course filter
        const matchesCourse = courseValue === 'all' || 
            book.courseCategory.includes(courseValue);
        
        // Semester filter
        const matchesSemester = semesterValue === 'all' || 
            book.semester.includes(semesterValue);
        
        // Availability filter
        const matchesAvailability = availabilityValue === 'all' || 
            book.availability === availabilityValue;
        
        // Type filter
        const matchesType = typeValue === 'all' || 
            book.type === typeValue;
        
        return matchesSearch && matchesCourse && matchesSemester && matchesAvailability && matchesType;
    });

    // Sort books
    filteredBooks = sortBooks(filteredBooks, sortValue);

    // Update book count
    bookCount.textContent = filteredBooks.length;

    // Show/hide no results message
    if (filteredBooks.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }

    renderBooks(filteredBooks);
}

// Sort books based on selected option
function sortBooks(booksToSort, sortValue) {
    const [sortBy, sortOrder] = sortValue.split('-');
    
    return [...booksToSort].sort((a, b) => {
        let comparison = 0;
        
        if (sortBy === 'title') {
            comparison = a.title.localeCompare(b.title);
        } else if (sortBy === 'rating') {
            comparison = a.rating - b.rating;
        }
        
        return sortOrder === 'desc' ? -comparison : comparison;
    });
}

// Render books to the grid
function renderBooks(booksToRender) {
    bookGrid.innerHTML = '';
    
    booksToRender.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.style.animationDelay = `${Math.random() * 0.5}s`;
        
        // Determine availability class
        let availabilityClass = '';
        let availabilityText = '';
        if (book.availability === 'available') {
            availabilityClass = 'available';
            availabilityText = 'Available';
        } else if (book.availability === 'reserved') {
            availabilityClass = 'reserved';
            availabilityText = 'Reserved';
        } else {
            availabilityClass = 'checked-out';
            availabilityText = 'Checked Out';
        }
        
        // Create course badges
        let courseBadges = '';
        book.courseCategory.forEach(course => {
            courseBadges += `<span class="book-course">${course}</span> `;
        });
        
        // Create rating stars
        const fullStars = Math.floor(book.rating);
        const hasHalfStar = book.rating % 1 >= 0.5;
        let ratingStars = '';
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                ratingStars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                ratingStars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                ratingStars += '<i class="far fa-star"></i>';
            }
        }
        
        // Determine action buttons
        let actionButtons = '';
        if (book.type === 'ebook') {
            actionButtons = `
                <button class="action-btn view-btn" data-id="${book.id}">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="action-btn download-btn" data-id="${book.id}">
                    <i class="fas fa-download"></i> Download
                </button>
            `;
        } else if (book.availability === 'available') {
            actionButtons = `
                <button class="action-btn view-btn" data-id="${book.id}">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="action-btn reserve-btn" data-id="${book.id}">
                    <i class="fas fa-bookmark"></i> Reserve
                </button>
            `;
        } else {
            actionButtons = `
                <button class="action-btn view-btn" data-id="${book.id}">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="action-btn disabled-btn">
                    <i class="fas fa-times"></i> Unavailable
                </button>
            `;
        }
        
        bookCard.innerHTML = `
            <div class="book-cover">
                ${book.type === 'ebook' ? '<span class="ebook-badge">E-BOOK</span>' : ''}
                <img src="${book.cover}" alt="${book.title}">
            </div>
            <div class="book-details">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <div class="book-meta">
                    <div>${courseBadges}</div>
                    <span class="book-availability ${availabilityClass}">${availabilityText}</span>
                </div>
                <div class="book-rating">
                    ${ratingStars} <span>(${book.rating.toFixed(1)})</span>
                </div>
                <div class="book-actions">
                    ${actionButtons}
                </div>
            </div>
        `;
        
        bookGrid.appendChild(bookCard);
    });

    // Add event listeners to buttons
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const bookId = parseInt(button.getAttribute('data-id'));
            showBookDetails(bookId);
        });
    });

    document.querySelectorAll('.reserve-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const bookId = parseInt(button.getAttribute('data-id'));
            reserveBook(bookId);
        });
    });

    document.querySelectorAll('.download-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const bookId = parseInt(button.getAttribute('data-id'));
            downloadEbook(bookId);
        });
    });

    // Add event listener to book cards
    document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('click', () => {
            const bookId = parseInt(card.querySelector('.view-btn').getAttribute('data-id'));
            showBookDetails(bookId);
        });
    });
}

// Show book details in modal
function showBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    
    // Create rating stars
    const fullStars = Math.floor(book.rating);
    const hasHalfStar = book.rating % 1 >= 0.5;
    let ratingStars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            ratingStars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            ratingStars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            ratingStars += '<i class="far fa-star"></i>';
        }
    }
    
    // Create semester badges
    let semesterBadges = '';
    book.semester.forEach(sem => {
        semesterBadges += `<span class="book-detail-meta-item">Semester ${sem}</span>`;
    });
    
    // Create course badges
    let courseBadges = '';
    book.courseCategory.forEach(course => {
        courseBadges += `<span class="book-detail-meta-item">${course}</span>`;
    });
    
    // Determine action buttons
    let actionButtons = '';
    if (book.type === 'ebook') {
        actionButtons = `
            <button class="action-btn download-btn" data-id="${book.id}" style="flex-grow: 1;">
                <i class="fas fa-download"></i> Download E-Book
            </button>
        `;
    } else if (book.availability === 'available') {
        actionButtons = `
            <button class="action-btn reserve-btn" data-id="${book.id}" style="flex-grow: 1;">
                <i class="fas fa-bookmark"></i> Reserve This Book
            </button>
        `;
    } else {
        actionButtons = `
            <button class="action-btn disabled-btn" style="flex-grow: 1;">
                <i class="fas fa-times"></i> Currently Unavailable
            </button>
        `;
    }
    
    bookDetailContent.innerHTML = `
        <div class="book-detail-cover">
            <img src="${book.cover}" alt="${book.title}">
            ${book.type === 'ebook' ? '<span class="ebook-badge">E-BOOK</span>' : ''}
        </div>
        <div class="book-detail-info">
            <h1 class="book-detail-title">${book.title}</h1>
            <p class="book-detail-author">by ${book.author}</p>
            
            <div class="book-detail-meta">
                ${semesterBadges}
                ${courseBadges}
                <span class="book-detail-meta-item">ISBN: ${book.isbn}</span>
                <span class="book-detail-meta-item ${book.availability === 'available' ? 'available' : book.availability === 'reserved' ? 'reserved' : 'checked-out'}">
                    ${book.availability === 'available' ? 'Available' : book.availability === 'reserved' ? 'Reserved' : 'Checked Out'}
                </span>
            </div>
            
            <div class="book-detail-rating">
                ${ratingStars} <span>${book.rating.toFixed(1)}/5.0</span>
            </div>
            
            <div class="book-detail-section">
                <h3 class="book-detail-section-title">Description</h3>
                <p class="book-detail-description">${book.description}</p>
            </div>
            
            <div class="book-detail-actions">
                ${actionButtons}
            </div>
        </div>
    `;
    
    // Add event listeners to buttons in modal
    const reserveBtn = bookDetailContent.querySelector('.reserve-btn');
    if (reserveBtn) {
        reserveBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            reserveBook(book.id);
        });
    }
    
    const downloadBtn = bookDetailContent.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            downloadEbook(book.id);
        });
    }
    
    // Show the modal
    bookDetailView.style.display = 'flex';
}

// Reserve a book
function reserveBook(bookId) {
    const book = books.find(b => b.id === bookId);
    
    // In a real app, this would connect to a backend
    // For now, we'll simulate with localStorage
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push({
        bookId: book.id,
        title: book.title,
        author: book.author,
        date: new Date().toISOString(),
        status: 'reserved'
    });
    localStorage.setItem('reservations', JSON.stringify(reservations));
    
    // Show success message
    successText.textContent = `"${book.title}" reserved successfully!`;
    successMessage.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
    
    // Update availability in UI (in a real app, this would come from the backend)
    book.availability = 'reserved';
    filterBooks();
    
    // Close the detail view
    bookDetailView.style.display = 'none';
}

// Download ebook
function downloadEbook(bookId) {
    const book = books.find(b => b.id === bookId);
    
    // Show success message
    successText.textContent = `Downloading "${book.title}"...`;
    successMessage.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
    
    // In a real app, this would initiate a download
    console.log(`Downloading ebook: ${book.title}`);
    
    // Close the detail view
    bookDetailView.style.display = 'none';
}