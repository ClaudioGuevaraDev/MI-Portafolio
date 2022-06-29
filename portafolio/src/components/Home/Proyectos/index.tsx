import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link,
  CardActions,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";

import { IProyecto, proyectos } from "./proyectos";

export default function Proyectos() {
  const theme = useTheme();

  return (
    <Box
      textAlign="center"
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.divider : "#f2f2f2",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          padding: { xl: 10, lg: 10, md: 10, sm: 10, xs: 4 },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="500"
          marginBottom={5}
          fontSize={{ xl: 60, lg: 55, md: 50, sm: 43, xs: 32 }}
        >
          Proyectos
        </Typography>
        <Grid container spacing={3}>
          {proyectos.map((p: IProyecto) => (
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <Card
                variant="elevation"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    src={p.image}
                    alt={p.title}
                  />
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color={theme.palette.text.primary}
                    sx={{ marginTop: 2 }}
                  >
                    {p.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={19}
                    color={theme.palette.text.primary}
                    textAlign="justify"
                  >
                    <span style={{ fontWeight: "bold" }}>Descripción:</span>{" "}
                    {p.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={19}
                    color={theme.palette.text.primary}
                    textAlign="justify"
                  >
                    <span style={{ fontWeight: "bold" }}>Visitar:</span>{" "}
                    <Link
                      href={p.link}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        fontSize: 21,
                      }}
                    >
                      {" "}
                      {p.link}
                    </Link>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={19}
                    color={theme.palette.text.primary}
                    textAlign="justify"
                  >
                    <span style={{ fontWeight: "bold" }}>Puesto:</span>{" "}
                    {p.puesto}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={19}
                    color={theme.palette.text.primary}
                    textAlign="justify"
                  >
                    <span style={{ fontWeight: "bold" }}>Tecnologías:</span>{" "}
                    {p.tecnologias}
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} xl={5}>
                      {p.repositorio ? (
                        <Link
                          href={p.repositorio}
                          target="_blank"
                          sx={{ textDecoration: "none", color: "#fff" }}
                        >
                          <Button
                            variant="contained"
                            color="success"
                            sx={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            size="large"
                          >
                            <GitHubIcon sx={{ marginRight: 1 }} /> Repositorio
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant="contained"
                          color="success"
                          sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          size="large"
                        >
                          <GitHubIcon sx={{ marginRight: 1 }} /> Privado
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
