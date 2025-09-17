import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home page of Task Management app");
});

export default app;
