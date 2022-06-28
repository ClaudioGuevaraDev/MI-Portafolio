import { Typography, Box, Grid, Container } from "@mui/material";

import { languages, language } from "./languages";

import LanguageItem from "./LanguageItem";

export default function Languages() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container
        maxWidth="xl"
        sx={{
          padding: 3,
          marginTop: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="500"
          marginTop={2}
          marginBottom={5}
          fontSize={{ xl: 60, lg: 55, md: 50, sm: 43, xs: 32 }}
        >
          Conocimientos
        </Typography>
        <Grid container spacing={1}>
          {languages.map((l: language) => (
            <LanguageItem l={l} key={l.title} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
