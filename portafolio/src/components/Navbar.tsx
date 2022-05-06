import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles"

export default function Navbar() {
    const theme = useTheme()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: 2, backgroundColor: theme.palette.background.default }}>
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1, fontWeight: "bold", fontStyle: "italic" }} variant="h4" color="primary" noWrap>Claudio Guevara</Typography>
          <Button variant="outlined" color="warning">
            hola
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
