document.addEventListener('DOMContentLoaded', () => {
    // Simulated user role (in a real app, this would come from authentication)
    const userRole = localStorage.getItem('userRole') || 'student';
    
    // DOM Elements
    const dashboardSections = {
        'student': document.getElementById('student-dashboard'),
        'teacher': document.getElementById('teacher-dashboard'),
        'principal': document.getElementById('principal-dashboard')
    };

    const aiChatbotModal = document.getElementById('ai-chatbot-modal');
    const closeChatbotBtn = document.getElementById('close-chatbot-btn');
    const aiChatbotBtn = document.getElementById('ai-chatbot-btn');
    const sendMessageBtn = document.getElementById('send-message-btn');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Show appropriate dashboard based on user role
    function showDashboard(role) {
        // Hide all dashboards first
        Object.values(dashboardSections).forEach(section => {
            section.classList.add('hidden');
        });

        // Show the current user's dashboard
        if (dashboardSections[role]) {
            dashboardSections[role].classList.remove('hidden');
        }
    }

    // Initialize dashboard
    showDashboard(userRole);

    // Student Dashboard Interactions
    const joinClassBtn = document.getElementById('join-class-btn');
    if (joinClassBtn) {
        joinClassBtn.addEventListener('click', () => {
            const classCode = prompt('Enter class code:');
            if (classCode) {
                // TODO: Implement class joining logic
                alert(`Attempting to join class: ${classCode}`);
            }
        });
    }

    // Teacher Dashboard Interactions
    const createCourseBtn = document.getElementById('create-course-btn');
    if (createCourseBtn) {
        createCourseBtn.addEventListener('click', () => {
            // TODO: Implement course creation modal/form
            alert('Create new course functionality');
        });
    }

    // Profile Settings Interactions
    const profileSettingsBtns = {
        'student': document.getElementById('profile-settings'),
        'teacher': document.getElementById('teacher-profile-settings'),
        'principal': document.getElementById('principal-profile-settings')
    };

    Object.entries(profileSettingsBtns).forEach(([role, btn]) => {
        if (btn) {
            btn.addEventListener('click', () => {
                // TODO: Implement profile settings modal/navigation
                alert(`Open profile settings for ${role}`);
            });
        }
    });

    // AI Chatbot Interactions
    if (aiChatbotBtn && aiChatbotModal) {
        aiChatbotBtn.addEventListener('click', () => {
            aiChatbotModal.classList.remove('hidden');
        });

        // Close chatbot modal
        if (closeChatbotBtn) {
            closeChatbotBtn.addEventListener('click', () => {
                aiChatbotModal.classList.add('hidden');
            });
        }
    }

    // Chatbot Message Sending
    if (sendMessageBtn && chatbotInput && chatbotMessages) {
        function addChatMessage(sender, message) {
            const messageEl = document.createElement('div');
            messageEl.classList.add('chat-message', `chat-message-${sender}`);
            messageEl.textContent = `${sender === 'user' ? 'You' : 'AI'}: ${message}`;
            chatbotMessages.appendChild(messageEl);
            
            // Scroll to bottom
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        sendMessageBtn.addEventListener('click', () => {
            const message = chatbotInput.value.trim();
            if (message) {
                // Add user message
                addChatMessage('user', message);

                // Simulate AI response (placeholder)
                addChatMessage('ai', 'I am processing your request...');

                // Clear input
                chatbotInput.value = '';
            }
        });

        // Allow sending message with Enter key
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessageBtn.click();
            }
        });
    }
});