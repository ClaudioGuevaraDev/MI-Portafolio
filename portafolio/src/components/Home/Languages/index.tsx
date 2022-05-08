import { Typography, Box, Grid, Tooltip, Container, Link } from "@mui/material";

import { languages, language } from "./languages";

export default function Languages() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="xl" sx={{ padding: 10 }}>
        <Typography variant="h3" fontWeight="bold">
          Conocimientos
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize={20}
          marginTop={2}
          marginBottom={10}
          fontStyle="italic"
        >
          Mis conocimientos base y los lenguajes de programación con los que
          mejor me desempeño para el desarrollo de software
        </Typography>
        <Grid container spacing={5}>
          {languages.map((l: language) => (
            <Grid item xl={2} xs={12} key={l.title}>
              <Tooltip title={l.title}>
                <Link
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  href={l.url}
                  target="_blank"
                >
                  <img src={l.image} width={200} height={200} alt={l.title} />
                </Link>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
