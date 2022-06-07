import { Typography, Box, Grid, Container } from "@mui/material";

import { languages, language } from "./languages";

import LanguageItem from "./LanguageItem";

export default function Languages() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="xl" sx={{ padding: 10 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          marginTop={2}
          marginBottom={10}
        >
          Conocimientos
        </Typography>
        <Grid container spacing={5}>
          {languages.map((l: language) => (
            <LanguageItem l={l} key={l.title} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
