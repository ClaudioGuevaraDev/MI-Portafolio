// Components
import Layout from "../components/Layout";
import Qualities from "../components/Home/Qualities";
import Languages from "../components/Home/Languages";
import Areas from "../components/Home/Areas";

export default function Home() {
  return (
    <Layout>
      <>
        <Qualities />

        <Languages />

        <Areas />
      </>
    </Layout>
  );
}
