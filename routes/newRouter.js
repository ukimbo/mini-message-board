const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("pages/new", { title: "Post New Message" });
});

module.exports = newRouter;
