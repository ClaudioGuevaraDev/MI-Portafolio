import { Grid, Link, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Framework } from "./areas";

interface Props {
  f: Framework;
}

export default function FrameworkItem({ f }: Props) {
  const theme = useTheme();

  return (
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
            border: 2,
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
  );
}
