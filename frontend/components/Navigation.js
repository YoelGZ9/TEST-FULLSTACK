import Link from "next/link";
import { getCarrito as carID } from "../redux/actions/carritoActions";
import { getMoneda as setMoneda } from "../redux/actions/productsActions";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useSelector, useDispatch } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();

  const getCarrito = useSelector((state) => state.getCarrito);
  const { carrito } = getCarrito;

  const getMoneda = useSelector((state) => state.getMoneda);
  const { moneda } = getMoneda;

  const [monedaID, setMonedaID] = useState(moneda);

  const changeMoneda = (e) => {
    dispatch(setMoneda(e.target.value));
    setMonedaID(e.target.value);
  };

  useEffect(() => {
    if (!carrito) {
      dispatch(carID(uuid()));
    }
  }, [dispatch]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width={54}
          height={54}
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">E-COMMERCE</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-4">
              Autos
            </a>
          </Link>
          <a
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-4"
            onClick={(e) => alert("hola we")}
          >
            Moneda
          </a>
          <select value={monedaID} onChange={changeMoneda}>
            <option value="MXN">MXN</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div>
          {
            <Link href={`/carrito`}>
              <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
