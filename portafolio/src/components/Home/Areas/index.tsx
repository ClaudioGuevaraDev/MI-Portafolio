import { Box, Container, Typography } from "@mui/material";

import AreaItem from "./AreaItem";

// https://svgporn.com/
import { areas, Area } from "./areas";

export default function Areas() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container
        maxWidth="xl"
        sx={{
          padding: { xl: 10, lg: 10, md: 10, sm: 10, xs: 3 },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="500"
          marginBottom={5}
          fontSize={{ xl: 60, lg: 55, md: 50, sm: 43, xs: 32 }}
        >
          Áreas de desempeño
        </Typography>
        {areas.map((a: Area) => (
          <AreaItem a={a} key={a.section}/>
        ))}
      </Container>
    </Box>
  );
}
