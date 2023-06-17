import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/Db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// config dotenv

dotenv.config();

//database config
ConnectDB();

//esModule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/dist")));

// route
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Your App is running mode ${process.env.DEV_MODE} on port${PORT}`.bgCyan
      .white
  );
});
