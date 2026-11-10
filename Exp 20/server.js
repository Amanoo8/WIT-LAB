const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

// Serve static files
app.use(express.static("public"));

// Handle client connections
io.on("connection", (socket) => {

    console.log("A user connected:", socket.id);

    // Receive message from client
    socket.on("chatMessage", (message) => {

        // Send message to all connected users
        io.emit("chatMessage", message);

    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });

});

// Start server
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});