// Components
import Layout from "../components/Layout";
import Languages from "../components/Home/Languages";
import Areas from "../components/Home/Areas";
import Proyectos from "../components/Home/Proyectos";
import Portada from "../components/Home/Portada";
import { Box } from "@mui/material";
import useLoadingComponent from "../hooks/useLoadingComponent";
import About from "../components/Home/About";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  useLoadingComponent();
  const theme = useTheme();

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
