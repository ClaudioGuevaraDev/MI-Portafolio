import { Grid, Tooltip, Link, Box } from "@mui/material";

import { language } from "./languages";

interface Props {
  l: language;
}

export default function LanguageItem({ l }: Props) {
  return (
    <Grid item xl={2} lg={2} md={2} sm={4} xs={6} key={l.title}>
      <Tooltip title={l.title}>
        <Link
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          href={l.url}
          target="_blank"
        >
          <Box
            component="img"
            sx={{
              width: { xl: 200, lg: 180, md: 150, sm: 140, xs: 120 },
              height: { xl: 200, lg: 180, md: 150, sm: 140, xs: 120 },
            }}
            alt={l.title}
            src={l.image}
          />
        </Link>
      </Tooltip>
    </Grid>
  );
}
