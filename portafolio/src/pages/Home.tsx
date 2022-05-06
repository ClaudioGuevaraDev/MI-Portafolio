import { useState } from "react"

import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Components
import Navbar from "../components/Navbar";

export default function Home() {
  const [mode, setMode] = useState("light")

  const theme = createTheme({
    palette: {
      mode: mode === "light" ? "light" : "dark"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default
        }}
      >
        <Navbar mode={mode} setMode={setMode} children={<></>}/>
      </Box>
    </ThemeProvider>
  );
}
