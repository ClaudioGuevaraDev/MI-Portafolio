import { Grid, Box, Typography } from "@mui/material";
import { Area, Framework } from "./areas";

import FrameworkItem from "./FrameworkItem";

interface Props {
  a: Area;
}

export default function AreaItem({ a }: Props) {
  return (
    <Box sx={{ marginTop: 5 }} key={a.section}>
      <Typography
        variant="h4"
        fontWeight="500"
        sx={{ marginBottom: 3 }}
        fontSize={{ xl: 37, lg: 35, md: 35, sm: 35, xs: 28 }}
      >
        {a.section}
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {a.frameworks.map((f: Framework) => (
          <FrameworkItem f={f} key={f.title} />
        ))}
      </Grid>
    </Box>
  );
}
