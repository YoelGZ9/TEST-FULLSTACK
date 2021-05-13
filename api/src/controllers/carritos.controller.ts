import { RequestHandler } from "express";
//Modelo
import Carrito from "../models/Carrito";

//@desc Agregar Prodcutos al carrito de compras, se verifica que no se haya
// ingresado con anterioridad
export const createCarrito: RequestHandler = async (req, res) => {
  const carritoFound = await Carrito.find({
    carritoID: req.body.carritoID,
    productoID: req.body.productoID,
    estatus: "Reservado",
  });
  if (carritoFound.length > 0)
    return res
      .status(301)
      .json({ message: "El producto ya existe en el carrito" });
  const carrito = new Carrito(req.body);
  const savedCarrito = await carrito.save();
  res.json(savedCarrito);
};

//@desc Se obtiene todos los productos del carrito con estatus de Reservado
export const getCarrito: RequestHandler = async (req, res) => {
  try {
    const CarritoFound = await Carrito.find({
      carritoID: req.params.id,
      estatus: "Reservado",
    }).populate({ path: "productoID", model: "Car" });
    if (!CarritoFound) return res.status(204).json();
    return res.json(CarritoFound);
  } catch (error) {
    res.json(error);
  }
};

//@desc Eliminar el producto seleccionado del carrito
export const deleteCarrito: RequestHandler = async (req, res) => {
  try {
    const carritoFound = await Carrito.findByIdAndDelete(req.params.id);
    if (!carritoFound) return res.status(204).json();
    return res.json(carritoFound);
  } catch (error) {
    res.json(error);
  }
};

//@desc Actualizar el producto seleccionado del carrito
export const updateCarrito: RequestHandler = async (req, res) => {
  const carritoUpdated = await Carrito.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!carritoUpdated) return res.status(204).json();
  return res.json(carritoUpdated);
};
