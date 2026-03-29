import express from "express";
import productRoutes from "./routes/product.route.js";
import ErrorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use("/api", productRoutes);

app.use(ErrorMiddleware.handle);

export default app;
