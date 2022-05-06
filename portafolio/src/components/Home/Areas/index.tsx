import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// https://svgporn.com/
import { areas, Area, Framework } from "./areas";

export default function Areas() {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="xl" sx={{ padding: 10 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: 10 }}>
          Áreas de desempeño
        </Typography>
        {areas.map((a: Area) => (
          <Box sx={{ marginTop: 7 }} key={a.section}>
            <Typography variant="h4" fontWeight="500" sx={{ marginBottom: 3 }}>
              {a.section}
            </Typography>
            <Grid
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {a.frameworks.map((f: Framework) => (
                <Grid item xl={2.3} key={f.title}>
                  <Link
                    sx={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                    }}
                    href={f.url}
                    target="_blank"
                  >
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: 1,
                        borderColor: "#000",
                        borderStyle: "solid",
                        borderRadius: "50px",
                        paddingTop: 9,
                        paddingBottom: 9,
                        backgroundColor:
                          theme.palette.mode === "light"
                            ? theme.palette.background.paper
                            : theme.palette.divider,
                      }}
                    >
                      <img src={f.image} width={60} height={60} alt={f.title} />
                      <Typography
                        sx={{ marginLeft: 2 }}
                        variant="subtitle1"
                        fontWeight="bold"
                        fontSize={24}
                      >
                        {f.title}
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
