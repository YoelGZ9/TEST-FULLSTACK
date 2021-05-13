import Head from "next/head";
import Navigation from "./Navigation";

const Layout = (props) => (
  <div>
    <Head>
      <title>Next.js Project</title>
    </Head>
    <Navigation />
    <div className="container mx-auto px4">{props.children}</div>
  </div>
);

export default Layout;
