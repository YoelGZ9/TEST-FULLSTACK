import { Router } from "express";
const router = Router();

import * as carritoProductCtrl from "../controllers/carritoProduct.controller";

//@desc Obtenemos el producto del carrito por ID en la base de datos
router.get("/carritoProduct/:id", carritoProductCtrl.getCarritoProduct);

//@desc Se actualizand todos los productos de carrito con estado de 'Pagado'
router.put("/carritoProduct/:id", carritoProductCtrl.pagoCarrito);

export default router;
