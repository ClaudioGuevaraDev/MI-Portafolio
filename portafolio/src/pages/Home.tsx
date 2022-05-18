// Components
import Layout from "../components/Layout";
import Qualities from "../components/Home/Qualities";
import Languages from "../components/Home/Languages";
import Areas from "../components/Home/Areas";
import Proyectos from "../components/Home/Proyectos";

export default function Home() {
  return (
    <Layout>
      <>
        <Qualities />

        <Languages />

        <Areas />

        <Proyectos/>
      </>
    </Layout>
  );
}
