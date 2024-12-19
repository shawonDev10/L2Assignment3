import express from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Applications Routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("L2Assignment3");
});

// Global Error Handling Middleware
app.use(globalErrorHandler)

export default app;
