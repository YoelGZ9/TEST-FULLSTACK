import { useSelector, useDispatch } from "react-redux";
import {
  getCarrito,
  addCarrito as addProduct,
  deleteCarritoProducts as deleteProduct,
  updateCarritoProduct as updateProduct,
} from "../redux/actions/carritoActions";
import { getMoneda } from "../redux/actions/productsActions";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Cards = ({ datos, bag, bagProduct }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const getMoneda = useSelector((state) => state.getMoneda);
  const addCarrito = useSelector((state) => state.addCarrito);
  const deleteCarritoProductsl = useSelector(
    (state) => state.deleteCarritoProducts
  );
  const updateCarritoProductl = useSelector(
    (state) => state.updateCarritoProduct
  );
  const getCarrito = useSelector((state) => state.getCarrito);

  const { moneda } = getMoneda;
  const { carrito } = getCarrito;
  const { add, error } = addCarrito;
  const { deleteError } = deleteCarritoProductsl;
  const { updateError } = updateCarritoProductl;

  const dataBag = bag || bagProduct;
  const allDataProduct = dataBag ? datos.productoID : datos;
  const [model, setModel] = useState(dataBag ? datos.modelo : "Unico");
  const [qty, setQty] = useState(dataBag ? datos.cantidad : 1);
  const num = 10;
  const dataModelos = dataBag ? datos.productoID.models : datos.models;
  const document = {
    carritoID: dataBag ? datos.carritoID : "",
    productoID: dataBag ? datos.productoID : datos._id,
    modelo: model,
    estatus: "Reservado",
    cantidad: qty,
  };

  const handleSubmit = () => {
    const carID = carrito;
    dispatch(addProduct(carID, document));
  };

  const deleteSubmit = () => {
    dispatch(deleteProduct(datos._id));
    deleteError ? alert(deleteError) : router.push("/carrito");
  };

  const updateSubmit = () => {
    dispatch(updateProduct(datos._id, document));
    updateError ? alert(updateError) : router.push("/carrito");
  };

  return (
    <div className="flex p-6 shadow" key={datos._id}>
      <div className="flex-none w-44 relative">
        <img
          src={allDataProduct.img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-auto pl-6">
        <div className="flex flex-wrap items-baseline">
          <h1 className="w-full flex-none text-lg font-semibold mb-0.5">
            {allDataProduct.name}
          </h1>
          <h1 className="w-full flex-none text-sm font-medium text-gray-400 mb-2.5">
            {allDataProduct.maker + " " + allDataProduct.car_type}
          </h1>
          <div className="text-3xl leading-7 font-bold text-purple-600 mb-0.5">
            $
            {moneda == "MXN"
              ? allDataProduct.price_mxn
              : allDataProduct.price_usd}{" "}
            {moneda}
          </div>
          <h1 className="w-full flex-none text-lg font-semibold">
            {moneda == "MXN"
              ? allDataProduct.description_es
              : allDataProduct.description_en}
          </h1>
        </div>
        <div className="flex items-baseline my-8">
          {bag ? (
            <>
              <label className="flex text-md font-bold text-purple-600">
                Cantidad:{" "}
              </label>
              &nbsp;
              <label className="flex text-md font-semibold">{qty}</label>
              &nbsp;
            </>
          ) : (
            <div className="space-x-2 flex text-sm font-medium">
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(num).keys()].map((x) => (
                  <option key={datos._id + (x + 1)} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          )}
          {bag ? (
            <>
              <label className="flex text-md font-bold text-purple-600">
                Modelo:
              </label>
              &nbsp;
              <label className="flex text-md font-semibold">
                {datos.modelo}
              </label>
            </>
          ) : dataModelos.length > 0 ? (
            <div className="space-x-2 flex text-sm font-medium">
              <select value={model} onChange={(e) => setModel(e.target.value)}>
                {dataModelos.map((element) => (
                  <option key={datos._id + element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex space-x-3 mb-4 text-sm font-semibold">
          <div className="flex-auto flex space-x-3">
            {bag ? (
              <Link href={`/carProduct/${datos._id}`}>
                <a
                  className="w-full flex items-center justify-center rounded-full bg-blue-700 text-white
                h-10"
                >
                  Editar Producto
                </a>
              </Link>
            ) : bagProduct ? (
              <>
                <button
                  className="w-1/2 flex items-center justify-center rounded-full bg-green-500 text-white
               h-10"
                  onClick={updateSubmit}
                >
                  Guardar Cambios
                </button>
                <button
                  className="w-1/2 flex items-center justify-center rounded-full bg-red-500 text-white
               h-10"
                  onClick={deleteSubmit}
                >
                  Eliminar Del Carrito
                </button>
              </>
            ) : (
              <button
                className="w-full flex items-center justify-center rounded-full bg-purple-700 text-white
               h-10"
                onClick={handleSubmit}
              >
                ADD TO BAG
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
