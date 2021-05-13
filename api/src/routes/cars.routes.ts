import { Router } from "express";
const router = Router();

import * as carCtrl from "../controllers/cars.controller";

//@desc Obtenemos todos los productos de autos de la base de datos
router.get("/cars", carCtrl.getCars);

//@desc Obtenemos los datos del producto auto por ID en la base de datos
router.get("/cars/:id", carCtrl.getCar);

export default router;
