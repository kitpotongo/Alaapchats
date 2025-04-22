// Elements
const chatArea = document.getElementById('chat-area');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const loginModal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const userStatus = document.getElementById('user-status');

let username = '';

// Check if already logged in
if(localStorage.getItem('alaapchats-username')) {
    username = localStorage.getItem('alaapchats-username');
    loginModal.style.display = 'none';
    userStatus.textContent = username;
} else {
    loginModal.style.display = 'flex';
}

// Login function
loginBtn.addEventListener('click', () => {
    if(usernameInput.value.trim() !== '') {
        username = usernameInput.value.trim();
        localStorage.setItem('alaapchats-username', username);
        loginModal.style.display = 'none';
        userStatus.textContent = username;
        addMessage('System', `${username} joined the chat`, 'system');
    }
});

// Send message function
function sendMessage() {
    const message = messageInput.value.trim();
    if(message !== '' && username !== '') {
        addMessage(username, message, 'my-message');
        messageInput.value = '';
        
        // Here you would normally send to server
        // For now we'll just simulate a reply
        setTimeout(() => {
            addMessage('Friend', 'Thanks for your message!', 'other-message');
        }, 1000);
    }
}

// Add message to chat
function addMessage(sender, text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') sendMessage();
});
