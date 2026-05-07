const messages = require("../db");
const { v4: uuidv4 } = require("uuid");

function getNewMessagePage(req, res) {
    res.render("pages/new", { title: "Post New Message" });
}

function createMessage(req, res) {
    messages.push({
        id: uuidv4,
        text: req.body.message,
        user: req.body.name,
        added: new Date("Mar 25 2015").toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }),
    });
    res.redirect("../");
}

module.exports = {
    getNewMessagePage,
    createMessage,
};
