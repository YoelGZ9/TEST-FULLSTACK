import {RequestHandler} from 'express'
//Modelo
import Car from '../models/Car'

//@desc Obtenemos todos los productos
export const getCars: RequestHandler = async (req, res) => {
    try {
        const cars = await Car.find()
        return res.json(cars);
    } catch (error) {
        res.json(error);
    }
};

//@desc Se obtiene el detalle de un solo producto
export const getCar: RequestHandler = async (req, res) => {
    try {
        const carFound = await Car.findById(req.params.id)
        if (!carFound) return res.status(204).json();
        return res.json(carFound);
    } catch (error) {
        res.json(error)
    }
};