import express from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Applications Routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("FutureStack Blog");
});

// Global Error Handling Middleware
app.use(globalErrorHandler);

// API not found
app.use(notFound);

export default app;
