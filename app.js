const express = require("express");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const app = express.Router();

const PORT = process.env.PORT || 3000;

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
});
