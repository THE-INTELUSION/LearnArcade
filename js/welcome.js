// welcome.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize chatbot
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');

    window.toggleChatbot = () => {
        const currentDisplay = chatbotWindow.style.display;
        chatbotWindow.style.display = currentDisplay === 'flex' ? 'none' : 'flex';
    };

    window.sendMessage = () => {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const responses = [
                "I'm here to help! What would you like to know about LearnArcade?",
                "You can create an account by clicking the Sign Up button.",
                "We offer different features for students, teachers, and principals.",
                "Need help with something specific? Just ask!"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'bot');
        }, 1000);
    };

    const addMessage = (text, type) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    // Handle enter key in chat input
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});