import { ReactElement, useState } from "react";

import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Components
import Navbar from "./Navbar";

interface Props {
  children: ReactElement;
}

export default function Layout(props: Props) {
  const { children } = props;

  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode === "light" ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Navbar mode={mode} setMode={setMode} children={<></>} />

        <Box sx={{ marginTop: 10 }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}
