import { Grid, Tooltip, Link } from "@mui/material";

import { language } from "./languages";

interface Props {
  l: language;
}

export default function LanguageItem({ l }: Props) {
  return (
    <Grid item xl={2} xs={12} key={l.title}>
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
          <img src={l.image} width={200} height={200} alt={l.title} />
        </Link>
      </Tooltip>
    </Grid>
  );
}
