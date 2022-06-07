// https://delesign.com/free-designs/graphics/
// https://www.manypixels.co/gallery

import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { qualities, quality } from "./qualities";

export default function Qualities() {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="xl" sx={{ padding: 10 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: 10 }}>
          Mis Cualidades
        </Typography>
        <Grid container spacing={3}>
          {qualities.map((q: quality) => (
            <Grid item xl={3} xs={12} key={q.title}>
              <Box
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "transparent"
                      : theme.palette.divider,
                  height: "100%",
                  padding: 2,
                  borderRadius: "3px"
                }}
              >
                <img src={q.image} alt={q.title} />
                <Typography variant="h5" fontWeight="bold" sx={{ marginY: 2 }}>
                  {q.title}
                </Typography>
                <Typography variant="body1" fontSize={18}>
                  {q.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
