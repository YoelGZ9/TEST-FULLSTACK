import Layout from "./../../components/Layout";
import Cards from "./../../components/Cards";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getCarritoProduct as dataCarritoProduct } from "./../../redux/actions/carritoActions";
import { useEffect } from "react";

const CarProduct = () => {
  const router = useRouter();
  const obj = router.query;
  const dispatch = useDispatch();

  const getCarritoProduct = useSelector((state) => state.getCarritoProduct);
  const { carritoProduct, loading, error } = getCarritoProduct;

  useEffect(() => {
    dispatch(dataCarritoProduct(obj.id));
  }, [dispatch, obj]);

  return (
    <Layout>
      <Head>
        <title>Next.js Project-Editar</title>
      </Head>
      <div className="w-full items-center justify-center gap-2 my-4 font-semibold text-black-600">
        <h1 className="mb-4.5 text-4xl">Editar Compra</h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 my-2">
        {loading ? (
          <h1>loading..</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : carritoProduct.length > 0 ? (
          carritoProduct.map((element) => (
            <Cards
              key={element._id}
              datos={element}
              bag={false}
              bagProduct={true}
            />
          ))
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default CarProduct;
