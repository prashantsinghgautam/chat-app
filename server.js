const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.json());

app.post("/storeMessage", (req, res) => {
    const { username, message } = req.body;
    const messageData = `${username}: ${message}\n`;
    fs.appendFile("messages.txt", messageData, (err) => {
        if (err) {
            console.error("Error writing message:", err);
            res.status(500).send("Error storing message");
        } else {
            res.send("Message stored successfully");
        }
    });
});

app.get("/getMessages", (req, res) => {
    fs.readFile("messages.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading messages:", err);
            res.status(500).send("Error retrieving messages");
        } else {
            res.send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
