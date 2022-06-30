import { Box, Container, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Zoom } from "react-reveal";

export default function About() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.divider : "#f2f2f2",
      }}
    >
      <Zoom>
        <Container
          maxWidth="xl"
          sx={{
            padding: { xl: 15, lg: 15, md: 10, sm: 10, xs: 4 },
          }}
        >
          <Typography variant="h4">
            Hola, mi nombre es Claudio Guevara. Soy desarrollador de software
            egresado de la Universidad de Talca, Chile. Hice esta página con el
            fin de mostrar mis capacidades en el mundo de la programación.
            <br></br>
            <br></br>
            En general me gusta programar, aprender nuevos lenguajes, nuevas
            tecnologías, ayudar al equipo, generar un buen ambiente y cumplir
            con los objetivos de la empresa o equipo de trabajo.
            <br></br>
            <br></br>
            En este portafolio encontrarás los lenguaje de programación y
            frameworks con los que me desempeño, así como también las áreas en
            las que puedo trabajar y los proyectos que he realizado hasta el
            momento.
          </Typography>
        </Container>
      </Zoom>
    </Box>
  );
}
