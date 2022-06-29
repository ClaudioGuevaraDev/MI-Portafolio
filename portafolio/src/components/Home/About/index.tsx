import { Box, Container, Typography } from "@mui/material";
import Fondo from "../../../assets/fondo_about.jpg";

export default function About() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container
        maxWidth="xl"
        sx={{
          padding: 2,
          marginTop: 2,
        }}
      >
        <Typography variant="h5">
          Hola, mi nombre es Claudio Guevara. Soy desarrollador de software
          egresado de la Univerisdad de Talca, Chile. Hice esta página con el
          fin de mostrar mis capacidades en el mundo de la programación.
          <br></br>
          <br></br>
          En general me gusta programar, aprender nuevos lenguajes, nuevas
          tecnologías, ayudar al equipo y cumplir con los objetivos de la
          empresa o equipo de trabajo.
          <br></br>
          <br></br>
          En este portafolio encontrarás los lenguaje de programación y
          frameworks con los que me desempeño, así como también las áreas en las
          que puedo trabajar y los proyectos que he realizado hasta el momento.
        </Typography>
      </Container>
    </Box>
  );
}
