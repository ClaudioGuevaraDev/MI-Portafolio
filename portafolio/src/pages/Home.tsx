// Components
import Layout from "../components/Layout";
import Languages from "../components/Home/Languages";
import Areas from "../components/Home/Areas";
import Proyectos from "../components/Home/Proyectos";
import Portada from "../components/Home/Portada";
import useLoadingComponent from "../hooks/useLoadingComponent";
import About from "../components/Home/About";

export default function Home() {
  useLoadingComponent();

  return (
    <Layout>
      <>
        <Portada />

        <About />

        <Languages />

        <Areas />

        <Proyectos />
      </>
    </Layout>
  );
}
