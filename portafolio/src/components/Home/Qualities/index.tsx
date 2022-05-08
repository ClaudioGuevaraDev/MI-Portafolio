// https://delesign.com/free-designs/graphics/
// https://www.manypixels.co/gallery

import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Happy from "../../../assets/qualities/happy.svg";
import Sociable from "../../../assets/qualities/remote-team.svg"
import Worker from "../../../assets/qualities/javascript-coding-language.svg"
import Improve from "../../../assets/qualities/success.svg"

export default function Qualities() {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="xl" sx={{ padding: 10 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: theme.palette.primary.main, marginBottom: 10 }}
        >
          Mis Cualidades
        </Typography>
        <Grid container spacing={5}>
          <Grid item xl={3}>
            <Box>
              <img src={Happy} alt="happy-illustration" />
              <Typography variant="h5" fontWeight="bold">
                Alegre
              </Typography>
              <Typography variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Grid>
          <Grid item xl={3}>
            <Box>
              <img src={Sociable} alt="happy-illustration" />
              <Typography variant="h5" fontWeight="bold">
                Alegre
              </Typography>
              <Typography variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Grid>
          <Grid item xl={3}>
            <Box>
              <img src={Worker} alt="happy-illustration" />
              <Typography variant="h5" fontWeight="bold">
                Alegre
              </Typography>
              <Typography variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Grid>
          <Grid item xl={3}>
            <Box>
              <img src={Improve} alt="happy-illustration" />
              <Typography variant="h5" fontWeight="bold">
                Alegre
              </Typography>
              <Typography variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
