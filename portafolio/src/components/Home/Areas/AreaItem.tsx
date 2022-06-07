import { Grid, Box, Typography } from "@mui/material";
import { Area, Framework } from "./areas";

import FrameworkItem from "./FrameworkItem"

interface Props {
    a: Area
}

export default function AreaItem({ a }: Props) {
  return (
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
          <FrameworkItem f={f}/>
        ))}
      </Grid>
    </Box>
  );
}
