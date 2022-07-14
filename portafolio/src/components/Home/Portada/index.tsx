import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Tooltip,
} from "@mui/material";
import Claudio from "../../../assets/claudio.jpeg";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Espanol from "../../../assets/español.png";
import { Zoom } from "react-reveal";
import TypeIt from "typeit-react";

export default function Portada() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: { xl: 10, lg: 10, md: 10, sm: 10, xs: 4 },
      }}
    >
      <Grid container spacing={8}>
        <Grid
          item
          xl={6}
          lg={7}
          md={7}
          sm={7}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <TypeIt options={{ speed: 100, cursor: false }}>
            <Typography
              variant="h1"
              fontSize={{ xl: 90, lg: 80, md: 50, sm: 30, xs: 32 }}
              fontWeight="bold"
              color={theme.palette.primary.main}
            >
              Claudio Guevara
            </Typography>
          </TypeIt>
          <Zoom delay={2000}>
            <Typography
              variant="h4"
              fontSize={{ xl: 38, lg: 38, md: 32, sm: 23, xs: 20 }}
              marginTop={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
              marginBottom={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }}
            >
              Desarrollador de Software
            </Typography>
          </Zoom>
          <Zoom delay={3000}>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon
                  sx={{
                    color: theme.palette.text.primary,
                    display: "flex",
                    alignItems: "center",
                    marginX: 1,
                    fontSize: 28,
                  }}
                />
                <Typography variant="subtitle1" fontSize={18}>
                  claudio.guevara.dev@gmail.com
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: { xs: 1, sm: 1, md: 0, lg: 0, xl: 0 },
                }}
              >
                <a
                  href="https://www.linkedin.com/in/claudio-guevara-v%C3%A1squez-0b7b3123a/"
                  target="_blank"
                >
                  <LinkedInIcon
                    sx={{
                      color: theme.palette.text.primary,
                      display: "flex",
                      alignItems: "center",
                      fontSize: 35,
                    }}
                  />
                </a>
                <a href="https://github.com/ClaudioGuevaraDev" target="_blank">
                  <GitHubIcon
                    sx={{
                      color: theme.palette.text.primary,
                      display: "flex",
                      alignItems: "center",
                      marginLeft: 1,
                      fontSize: 35,
                    }}
                  />
                </a>
                <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
                <Tooltip title="Idioma español">
                  <img
                    src={Espanol}
                    width={35}
                    height={35}
                    alt="Idioma español"
                  />
                </Tooltip>
              </Box>
            </Box>
          </Zoom>
        </Grid>
        <Grid
          item
          xl={6}
          lg={5}
          md={5}
          sm={5}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { xs: 2, sm: 0, md: 0, lg: 0, xl: 0 },
          }}
        >
          <Zoom>
            <Box
              component="img"
              sx={{
                height: { xl: 470, lg: 430, md: 300, sm: 200, xs: 270 },
                width: { xl: 470, lg: 430, md: 300, sm: 200, xs: 270 },
                borderRadius: "50%",
              }}
              alt="Claudio Guevara"
              src={Claudio}
            />
          </Zoom>
        </Grid>
      </Grid>
    </Container>
  );
}
