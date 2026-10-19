const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/jobs", (req, res) => res.json([]));
app.post("/api/auth/login", (req, res) => res.json({ message: "TODO" }));

app.listen(5000, () => console.log("Server running on 5000"));
