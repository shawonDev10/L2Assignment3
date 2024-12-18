import express from "express";
import cors from "cors"

const app = express();

// Parser
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("L2Assignment3");
});

export default app;
