import { Schema, model } from "mongoose";

const reqString = {
  type: String,
  required: true,
  trim: true,
};

const reqNumber = {
  type: Number,
  required: true,
};

const carSchema = new Schema(
  {
    name: reqString,
    maker: reqString,
    img: reqString,
    car_type: reqString,
    price_mxn: reqNumber,
    price_usd: reqNumber,
    description_es: reqString,
    description_en: reqString,
    models: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Car", carSchema);
