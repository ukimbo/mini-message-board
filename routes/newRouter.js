const { Router } = require("express");
const messages = require("../db");

const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("pages/new", { title: "Post New Message" });
});

newRouter.post("/", (req, res) => {
    messages.push({
        text: req.body.message,
        name: req.body.name,
        added: new Date(),
    });
    res.redirect("../");
});

module.exports = newRouter;
