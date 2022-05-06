import { Typography, Box, Grid, Tooltip, Container } from "@mui/material";

// Images
import HTML from "../../../assets/languages/html.png";
import CSS from "../../../assets/languages/css.png";
import JavaScript from "../../../assets/languages/javascript.png";
import TypeScript from "../../../assets/languages/typescript.png";
import Python from "../../../assets/languages/python.png";
import SQL from "../../../assets/languages/sql.png";

export default function Languages() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="xl" sx={{ padding: 10 }}>
      <Typography variant="h3" fontWeight="bold">
        Mis conocimientos base
      </Typography>
      <Typography
        variant="subtitle1"
        fontSize={20}
        marginTop={2}
        marginBottom={10}
        fontStyle="italic"
      >
        Los lenguajes de programación con los que mejor me desempeño para el
        desarrollo de software
      </Typography>
      <Grid container spacing={3}>
        <Grid item xl={2} xs={12}>
          <Tooltip title="HTML5">
            <a
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              href="https://es.wikipedia.org/wiki/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <img src={HTML} width={200} height={200} alt="HTML5" />
            </a>
          </Tooltip>
        </Grid>
        <Grid item xl={2} xs={12}>
          <Tooltip title="CSS3">
            <a
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              href="https://es.wikipedia.org/wiki/CSS"
              target="_blank"
              rel="noreferrer"
            >
              <img src={CSS} alt="CSS3" width={200} height={200} />
            </a>
          </Tooltip>
        </Grid>
        <Grid item xl={2} xs={12}>
          <Tooltip title="JavaScript">
            <a
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              href="https://developer.mozilla.org/es/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img src={JavaScript} alt="JavaScript" width={200} height={200} />
            </a>
          </Tooltip>
        </Grid>
        <Grid item xl={2} xs={12}>
          <Tooltip title="TypeScript">
            <a
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TypeScript} alt="TypeScript" width={200} height={200} />
            </a>
          </Tooltip>
        </Grid>
        <Grid item xl={2} xs={12}>
          <Tooltip title="Python">
            <a
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              href="https://www.python.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Python} alt="Python" width={200} height={200} />
            </a>
          </Tooltip>
        </Grid>
        <Grid item xl={2} xs={12}>
          <Tooltip title="SQL">
            <a
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              href="https://es.wikipedia.org/wiki/SQL"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SQL} alt="SQL" width={200} height={200} />
            </a>
          </Tooltip>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
