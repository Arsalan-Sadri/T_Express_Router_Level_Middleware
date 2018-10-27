const express = require("express");
const app = express();
const router = express.Router();

router.use("/user/:id", (req, res) => {
    console.log(`"Request method: ${req.method}"`);
    res.send(req.params.id);
});

// the next line as as same as this: app.use(router);
app.use("/", router);           // http://localhost:8080/user/bomshakalaka
app.use("/contact", router);    // http://localhost:8080/contact/user/bomshakalaka
app.use("/profile", router);    // http://localhost:8080/profile/user/bomshakalaka

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () =>
    console.log("App running on http://" + host + ":" + PORT));