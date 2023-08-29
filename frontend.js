const loginForm = document.getElementById("loginForm");
const usernameForm = document.getElementById("usernameForm");
const chatForm = document.getElementById("chatForm");
const messageForm = document.getElementById("messageForm");
const chatMessages = document.getElementById("chatMessages");

usernameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    loginForm.style.display = "none";
    chatForm.style.display = "block";
});

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = localStorage.getItem("username");
    const message = document.getElementById("message").value;
    const messageEntry = document.createElement("div");
    messageEntry.innerText = `${username}: ${message}`;
    chatMessages.appendChild(messageEntry);
    sendMessageToServer(username, message); // Function to send the message to the server
});

// You should also retrieve messages from the server and display them when the page loads.
// This part requires interaction with the server as well.
