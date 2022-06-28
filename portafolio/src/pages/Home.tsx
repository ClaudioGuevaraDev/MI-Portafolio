// Components
import Layout from "../components/Layout";
import Qualities from "../components/Home/Qualities";
import Languages from "../components/Home/Languages";
import Areas from "../components/Home/Areas";
import Proyectos from "../components/Home/Proyectos";
import Portada from "../components/Home/Portada";

export default function Home() {
  return (
    <Layout>
      <>
        <Portada />

        {/* <Qualities /> */}

        <Languages />

        {/* <Areas />

        <Proyectos /> */}
      </>
    </Layout>
  );
}
