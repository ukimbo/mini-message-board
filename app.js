const express = require("express");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter);

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
});
