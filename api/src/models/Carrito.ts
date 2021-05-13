import { Schema, model } from "mongoose";

const Car = model("Car");

const reqString = {
  type: String,
  required: true,
};

const reqNumber = {
  type: Number,
  required: true,
};

const carritosSchema = new Schema(
  {
    carritoID: reqString,
    productoID: { type: Schema.Types.ObjectId, ref: "Car" },
    modelo: reqString,
    estatus: reqString,
    cantidad: reqNumber,
  },
  {
    timestamps: true,
  }
);

export default model("Carrito", carritosSchema);
