import Head from "next/head";
import Layout from "../components/Layout";
import Products from "../components/products/Products";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productsActions";
import { useEffect } from "react";

const Index = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Head>
          <title>Next.js Project-Home</title>
        </Head>
        <div className="w-full items-center justify-center gap-2 my-4 font-semibold text-black-600">
          <center>
            <h1 className="w-full mb-4.5 text-4xl">Automoviles Disponibles</h1>
          </center>
        </div>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <Products cars={products} />
        )}
      </Layout>
    </div>
  );
};

export default Index;
