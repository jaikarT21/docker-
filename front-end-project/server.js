const express = require("express");
const app = express();

app.use(express.static(__dirname)); // Serve static files

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

