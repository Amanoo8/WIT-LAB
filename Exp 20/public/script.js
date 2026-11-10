// Connect to Socket.IO server
const socket = io();

// Get HTML elements
const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");
const messages = document.getElementById("messages");

// Send message
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const message = input.value.trim();

    if (message) {

        socket.emit("chatMessage", message);

        input.value = "";

    }

});

// Receive message
socket.on("chatMessage", (message) => {

    const div = document.createElement("div");

    div.classList.add("message");

    div.textContent = message;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;

});