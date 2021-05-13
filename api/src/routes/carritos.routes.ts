import { Router } from "express";
const router = Router();

import * as carritoCtrl from "../controllers/carritos.controller";

//@desc Obtenemos todos los productos del carrito a travez de la ID que recibamos
router.get("/carritos/:id", carritoCtrl.getCarrito);

//@desc Se agregan productos al carrito
router.post("/carritos", carritoCtrl.createCarrito);

//@desc Se elimina el producto del carrito del ID que recibamos
router.delete("/carritos/:id", carritoCtrl.deleteCarrito);

//@desc Actualizamos el producto del carrito a travez de la ID que recibamos
router.put("/carritos/:id", carritoCtrl.updateCarrito);

export default router;
