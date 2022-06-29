import { Typography, Box, Grid, Container } from "@mui/material";

import { languages, language } from "./languages";

import LanguageItem from "./LanguageItem";
import { useTheme } from "@mui/material/styles";

export default function Languages() {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center", backgroundColor: theme.palette.action.selected }}>
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
