import { RequestHandler } from "express";
//Modelo
import Carrito from "../models/Carrito";


//@desc Obtener los detalles de un producto seleccionado del ccarrito
export const getCarritoProduct: RequestHandler = async (req, res) => {
  try {
    const CarritoFound = await Carrito.find({
      _id: req.params.id,
      estatus: "Reservado",
    }).populate({ path: "productoID", model: "Car" });
    if (!CarritoFound) return res.status(204).json();
    return res.json(CarritoFound);
  } catch (error) {
    res.json(error);
  }
};

//@desc Al pagar se actualizan todos los productos con estatus de pagado
export const pagoCarrito: RequestHandler = async (req, res) => {
  const carritoPago = await Carrito.updateMany(
    { carritoID: req.params.id },
    { $set: { estatus: req.body.estatus } }
  );

  if (!carritoPago) return res.status(204).json();
  return res.json(carritoPago);
};
