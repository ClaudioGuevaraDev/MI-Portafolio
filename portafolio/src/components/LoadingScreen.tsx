import { Box } from "@mui/material";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useTheme } from "@mui/material/styles";

export default function LoadingScreen() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: " center",
      }}
    >
        <PacmanLoader loading={true} color={theme.palette.primary.main}/>
    </Box>
  );
}
