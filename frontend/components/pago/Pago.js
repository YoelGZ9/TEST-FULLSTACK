import { useSelector, useDispatch } from "react-redux";
import {
  getCarritoUser as setUsuario,
  getCarritoProducts as listaCarritoProducts,
  getCarrito as carID,
} from "../../redux/actions/carritoActions";
import { pago as getPago } from "../../redux/actions/pagoActions";
import { getMoneda } from "../../redux/actions/productsActions";
import { useState } from "react";
import { useRouter } from "next/router";

const Pago = ({ dataProducts, resumen }) => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const getCarrito = useSelector((state) => state.getCarrito);
  const { carrito } = getCarrito;

  const getMoneda = useSelector((state) => state.getMoneda);
  const { moneda } = getMoneda;

  const usuarioSubmit = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(setUsuario(user));
      dispatch(getPago(carrito));
      router.push("/gracias");
    } else {
      alert("Debes ingresar un nombre para comprar");
    }
  };
  return (
    <div className="shadow gap-4 my-2">
      <div className="flex p-6">
        <form className="flex-auto pl-6">
          {dataProducts.map((element) => (
            <div
              className="flex flex-wrap items-baseline mb-1"
              key={element._id}
            >
              <h1 className="w-1/2 flex-none text-lg font-semibold mb-0.5">
                {element.cantidad +
                  " " +
                  element.productoID.name +
                  " " +
                  element.productoID.maker +
                  " " +
                  element.modelo}
              </h1>
              <div className="w-1/2 text-lg text-right font-bold text-purple-600">
                $
                {new Intl.NumberFormat().format(
                  moneda == "MXN"
                    ? element.productoID.price_mxn * element.cantidad
                    : element.productoID.price_usd * element.cantidad
                )}
              </div>
            </div>
          ))}
          <div className="flex flex-wrap items-baseline mb-4">
            {!resumen ? (
              <input
                type="text"
                name="name"
                placeholder="Por favor escribir tu nombre"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                required
              />
            ) : (
              ""
            )}
            <div className="w-full text-4xl text-center font-bold text-purple-600">
              Total: $
              {moneda == "MXN"
                ? new Intl.NumberFormat().format(
                    dataProducts.reduce(
                      (sum, value) =>
                        sum + value.productoID.price_mxn * value.cantidad,
                      0
                    )
                  )
                : new Intl.NumberFormat().format(
                    dataProducts.reduce(
                      (sum, value) =>
                        sum + value.productoID.price_usd * value.cantidad,
                      0
                    )
                  )}
            </div>
          </div>
          {!resumen ? (
            <div className="flex space-x-3 mb-4 text-sm font-semibold">
              <div className="flex-auto flex space-x-3">
                <button
                  className="w-full flex items-center justify-center rounded-full bg-purple-700 text-white
                h-10"
                  type="submit"
                  onClick={usuarioSubmit}
                >
                  Comprar
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default Pago;
