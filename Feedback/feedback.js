document.addEventListener('DOMContentLoaded', function() {
    // Character Counter
    const message = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    if (message && charCount) {
        message.addEventListener('input', function() {
            const currentLength = this.value.length;
            charCount.textContent = `${currentLength}/500 characters`;
            
            if (currentLength < 50) {
                charCount.style.color = '#e74c3c';
            } else {
                charCount.style.color = '#27ae60';
            }
        });
    }
    
    // File Upload Display
    const fileInput = document.getElementById('screenshot');
    const fileName = document.getElementById('file-name');
    
    if (fileInput && fileName) {
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                fileName.textContent = this.files[0].name;
            } else {
                fileName.textContent = 'No file chosen';
            }
        });
    }
    
    // Form Submission
    const feedbackForm = document.getElementById('feedbackForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    
    if (feedbackForm && successModal && closeModal) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate minimum character count
            if (message.value.length < 50) {
                alert('Please provide at least 50 characters in your feedback message.');
                return;
            }
            
            // Form data collection
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                userRole: document.getElementById('userRole').value,
                feedbackType: document.querySelector('input[name="feedbackType"]:checked').value,
                rating: document.querySelector('input[name="rating"]:checked')?.value || 'Not rated',
                message: message.value,
                screenshot: fileInput.files.length > 0 ? fileInput.files[0].name : 'No file'
            };
            
            console.log('Form submitted with data:', formData);
            
            // Show success modal
            successModal.style.display = 'flex';
            
            // Reset form
            this.reset();
            if (charCount) {
                charCount.textContent = '0/500 characters';
                charCount.style.color = '#666';
            }
            if (fileName) {
                fileName.textContent = 'No file chosen';
            }
        });
        
        // Close Modal
        closeModal.addEventListener('click', function() {
            successModal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        successModal.addEventListener('click', function(e) {
            if (e.target === successModal) {
                successModal.style.display = 'none';
            }
        });
    }
});

