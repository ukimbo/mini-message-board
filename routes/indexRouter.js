const { Router } = require("express");
const messages = require("../db");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("pages/index", {
        title: "Mini Message Board",
        messages: messages,
    });
});

module.exports = indexRouter;
