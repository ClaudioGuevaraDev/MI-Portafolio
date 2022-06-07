import { Box, Container, Typography } from "@mui/material";

import AreaItem from "./AreaItem";

// https://svgporn.com/
import { areas, Area } from "./areas";

export default function Areas() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="xl" sx={{ padding: 10 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: 10 }}>
          Áreas de desempeño
        </Typography>
        {areas.map((a: Area) => (
          <AreaItem a={a}/>
        ))}
      </Container>
    </Box>
  );
}
