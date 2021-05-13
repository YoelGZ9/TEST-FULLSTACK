import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Pago from "../components/pago/Pago";
import { useSelector, useDispatch } from "react-redux";
import {
  getCarritoProducts as listaCarritoProducts,
  getCarrito as carID,
} from "../redux/actions/carritoActions";
import { useEffect } from "react";

const Carrito = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const getCarrito = useSelector((state) => state.getCarrito);
  const { carrito } = getCarrito;

  const getCarritoProducts = useSelector((state) => state.getCarritoProducts);
  const { carritoProducts, loading, error } = getCarritoProducts;

  useEffect(() => {
    dispatch(listaCarritoProducts(carrito));
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Head>
          <title>Next.js Project-Carrito</title>
        </Head>
        <div className="w-full items-center justify-center gap-2 my-4 font-semibold text-black-600">
          <h1 className="mb-4.5 text-4xl">Resumen De Compra</h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-2">
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 my-2">
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : carritoProducts.length > 0 ? (
              carritoProducts.map((element) => (
                <Cards key={element._id} datos={element} bag={true} />
              ))
            ) : (
              <>
                <h2 className="mb-4.5 text-4xl">
                  No hay ningun producto en el carrito
                </h2>
                <button
                  className="w-1/2 flex items-center justify-center rounded-full bg-green-500 text-white
               h-10 mt-4"
                  onClick={(e) => router.push("/")}
                >
                  Realizar Nueva Compra
                </button>
              </>
            )}
          </div>
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : carritoProducts.length > 0 ? (
            <Pago dataProducts={carritoProducts} resumen={false} />
          ) : (
            ""
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Carrito;
