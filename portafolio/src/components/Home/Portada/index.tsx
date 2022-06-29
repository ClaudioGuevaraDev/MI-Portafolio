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

export default function Portada() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: 20,
      }}
    >
      <Grid container spacing={2}>
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
          <Typography
            variant="h1"
            fontSize={{ xl: 90, lg: 80, md: 65, sm: 43, xs: 32 }}
            fontWeight="bold"
            color={theme.palette.primary.main}
          >
            Claudio Guevara
          </Typography>
          <Typography
            variant="h4"
            fontSize={{ xl: 38, lg: 38, md: 32, sm: 25, xs: 20 }}
            marginTop={{ xs: 1 }}
            marginBottom={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }}
          >
            Desarrollador de Software
          </Typography>
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
          <Box
            component="img"
            sx={{
              height: { xl: 470, lg: 450, md: 350, sm: 280, xs: 270 },
              width: { xl: 470, lg: 450, md: 350, sm: 280, xs: 270 },
              borderRadius: "50%",
            }}
            alt="Claudio Guevara"
            src={Claudio}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
