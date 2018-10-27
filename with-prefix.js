const express = require("express");
const app = express();
const router = express.Router();

router.use("/user/:id", (req, res) => {
    console.log(`"Request method: ${req.method}"`);
    res.send(req.params.id);
});

app.use("/contact", router);

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () =>
    console.log("App running on http://" + host + ":" + PORT));