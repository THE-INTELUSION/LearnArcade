document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const addSchoolBtn = document.getElementById('add-school-btn');
    const addSchoolModal = document.getElementById('add-school-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const addSchoolForm = document.getElementById('add-school-form');
    const bottomNavItems = document.querySelectorAll('.nav-item');
    const quotesBtn = document.querySelector('.quotes-btn');

    // Add School Modal Functionality
    function openAddSchoolModal() {
        addSchoolModal.style.display = 'block';
    }

    function closeAddSchoolModal() {
        addSchoolModal.style.display = 'none';
    }

    // Event Listeners
    if (addSchoolBtn) {
        addSchoolBtn.addEventListener('click', openAddSchoolModal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeAddSchoolModal);
    }

    // Close modal if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target === addSchoolModal) {
            closeAddSchoolModal();
        }
    });

    // Add School Form Submission
    if (addSchoolForm) {
        addSchoolForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const schoolName = document.getElementById('school-name').value;
            const schoolEmail = document.getElementById('school-email').value;
            const principalName = document.getElementById('principal-name').value;
            const contactInfo = document.getElementById('contact-info').value;
            const schoolPassword = document.getElementById('school-password').value;

            // Basic validation
            if (!schoolName || !schoolEmail || !principalName || !contactInfo || !schoolPassword) {
                alert('Please fill in all fields');
                return;
            }

            // TODO: Implement actual school registration logic
            console.log('School Registration Data:', {
                schoolName,
                schoolEmail,
                principalName,
                contactInfo
            });

            // Show success message
            alert(`School "${schoolName}" registered successfully!`);
            
            // Close modal
            closeAddSchoolModal();
        });
    }

    // Bottom Navigation Interaction
    bottomNavItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            bottomNavItems.forEach(navItem => {
                navItem.classList.remove('active');
            });

            // Add active class to clicked item
            item.classList.add('active');

            // TODO: Implement navigation logic for each section
            const navText = item.querySelector('span').textContent;
            switch(navText) {
                case 'Home':
                    console.log('Navigating to Home');
                    break;
                case 'Community':
                    console.log('Navigating to Community');
                    break;
                case 'Notifications':
                    console.log('Navigating to Notifications');
                    break;
                case 'Settings':
                    console.log('Navigating to Settings');
                    break;
            }
        });
    });

    // Quotes Button Functionality
    if (quotesBtn) {
        quotesBtn.addEventListener('click', () => {
            // Array of inspirational quotes
            const quotes = [
                "Education is the passport to the future, tomorrow belongs to those who prepare for it today. - Malcolm X",
                "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
                "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence. - Abigail Adams",
                "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert"
            ];

            // Select a random quote
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            
            // Display quote (you could enhance this with a modal or toast)
            alert(randomQuote);
        });
    }

    // Dynamic Community Feed (Placeholder)
    function updateCommunityFeed() {
        const communityFeed = document.querySelector('.community-feed');
        
        // Sample community posts (in a real app, this would come from a backend)
        const communityPosts = [
            {
                schoolName: "Sodepur Chandrachur Vidyapith (Girls)",
                achievement: "Science Fair Winner 2025",
                logo: "path/to/school-logo.png"
            },
            {
                schoolName: "Techno India School",
                achievement: "National Debate Champions",
                logo: "path/to/another-school-logo.png"
            }
        ];

        // Clear existing posts
        communityFeed.innerHTML = '<h3>School Achievements</h3>';

        // Add new posts
        communityPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('community-post');
            postElement.innerHTML = `
                <img src="${post.logo}" alt="${post.schoolName} Logo">
                <div class="post-content">
                    <h3>${post.schoolName}</h3>
                    <p>Recent achievement: ${post.achievement}</p>
                </div>
            `;
            communityFeed.appendChild(postElement);
        });
    }

    // Initialize community feed
    updateCommunityFeed();
});