import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import Claudio from "../../../assets/claudio.jpeg";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Portada() {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ padding: 10 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            fontSize={90}
            fontWeight="bold"
            color={theme.palette.primary.main}
          >
            Claudio Guevara
          </Typography>
          <Typography variant="h4" fontSize={38} marginBottom={3}>
            Desarrollador de Software
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
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
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <a
                href="https://www.linkedin.com/in/claudio-guevara-v%C3%A1squez-0b7b3123a/"
                target="_blank"
              >
                <LinkedInIcon
                  sx={{
                    color: theme.palette.text.primary,
                    display: "flex",
                    alignItems: "center",
                    marginX: 1,
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
                    marginX: 1,
                    fontSize: 35,
                  }}
                />
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Claudio}
            alt="Claudio Guevara"
            width={500}
            height={500}
            style={{ borderRadius: "50%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
