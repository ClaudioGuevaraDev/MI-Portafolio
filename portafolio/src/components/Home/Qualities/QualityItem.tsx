import { Grid, Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles";

import { quality } from "./qualities"

interface Props {
    q: quality
}

export default function QualityItem({ q }: Props) {
    const theme = useTheme()

  return (
    <Grid item xl={3} xs={12} key={q.title}>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "transparent"
              : theme.palette.divider,
          height: "100%",
          padding: 2,
          borderRadius: "3px",
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
  );
}
