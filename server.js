import express from "express";
import productRoutes from "./routes/productRoutes.js";
import logger from "./middleware/logger.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // allow joson from client
app.use(logger);

// Routes
app.use("/api/products", productRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port  http://localhost:${PORT}`));
