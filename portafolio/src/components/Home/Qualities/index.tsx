// https://delesign.com/free-designs/graphics/
// https://www.manypixels.co/gallery

import { Box, Container, Grid, Typography } from "@mui/material";

import { qualities, quality } from "./qualities";

import QualityItem from "./QualityItem";

export default function Qualities() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="xl" sx={{ padding: 10 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: 10 }}>
          Mis Cualidades
        </Typography>
        <Grid container spacing={3}>
          {qualities.map((q: quality) => (
            <QualityItem q={q}/>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
