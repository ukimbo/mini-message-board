const { v4: uuidv4 } = require("uuid");

const messages = [
    {
        id: uuidv4(),
        text: "Hi there!",
        user: "Amando",
        added: new Date().toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }),
    },
    {
        id: uuidv4(),
        text: "Hello World!",
        user: "Charles",
        added: new Date().toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }),
    },
];

module.exports = messages;
