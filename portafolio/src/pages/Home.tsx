// Components
import Layout from "../components/Layout";
import Qualities from "../components/Home/Qualities";
import Languages from "../components/Home/Languages";
import Areas from "../components/Home/Areas";
import Proyectos from "../components/Home/Proyectos";
import Portada from "../components/Home/Portada";
import { Box } from "@mui/material";
import useLoadingComponent from "../hooks/useLoadingComponent";

export default function Home() {
  useLoadingComponent();

  return (
    <Layout>
      <>
        <Portada />

        {/* <Qualities /> */}

        <Languages />

        <Areas />

        <Proyectos />

        <Box marginBottom={10}></Box>
      </>
    </Layout>
  );
}
