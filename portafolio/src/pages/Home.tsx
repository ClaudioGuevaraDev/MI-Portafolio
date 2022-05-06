// Components
import Layout from "../components/Layout";
import Languages from "../components/Home/Languages";
import Areas from "../components/Home/Areas";

export default function Home() {
  return (
    <Layout>
      <>
        <Languages />

        <Areas />
      </>
    </Layout>
  );
}
