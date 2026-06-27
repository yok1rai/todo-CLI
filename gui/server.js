import express from "express";

const app = express();
const PORT = 3000;

app.use((req, res) => {
    res.send("will be added soon");
});

app.listen(PORT, () => {
    console.log(`WEB API running at http://localhost:${PORT}`);
});
