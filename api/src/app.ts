import express from "express";
import config from "./config";
import morgan from "morgan";
import cors from "cors";
import carRoutes from "./routes/cars.routes";
import carritoRoutes from "./routes/carritos.routes";
import carritoProductRoutes from "./routes/carritoProduct.routes";
const app = express();

app.set("port", config.PORT);

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(carRoutes, carritoRoutes, carritoProductRoutes);

export default app;
