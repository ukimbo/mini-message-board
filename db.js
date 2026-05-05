const messages = [
    {
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
