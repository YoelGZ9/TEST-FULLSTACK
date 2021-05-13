import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Pago from "../components/pago/Pago";

const Gracias = () => {
  const [user, setUser] = useState(undefined);
  const [carItems, setCarItems] = useState([]);
  const router = useRouter();

  if (typeof window !== "undefined") {
    useEffect(() => {
      setUser(localStorage.getItem("usuario"));
      setCarItems(JSON.parse(localStorage.getItem("cartItems")));
    }, []);
  }
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-5">
          <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
            <img
              className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src="http://www.guerrillafitness.net/wp-content/themes/guerrilla/images/Free-Trial-Class/check-mark.png"
              alt=""
              width={384}
              height={512}
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                {user ? (
                  <p className="text-4xl font-semibold">
                    “Gracias por su compra {user}”
                  </p>
                ) : (
                  <p className="text-4xl font-semibold">
                    “Aun no se ha registrado ninguna compra”
                  </p>
                )}
                <button
                  className="w-1/2 flex items-center justify-center rounded-full bg-green-500 text-white
               h-10 mt-4"
                  onClick={(e) => router.push("/")}
                >
                  Realizar Nueva Compra
                </button>
              </blockquote>
            </div>
          </figure>
          {carItems ? <Pago dataProducts={carItems} resumen={true} /> : ""}
        </div>
      </Layout>
    </div>
  );
};

export default Gracias;
