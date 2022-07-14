import { useEffect } from "react";
import { useLoadingContext, topbar } from "react-router-loading";
import { useTheme } from "@mui/material/styles";

export default function useLoadingComponent() {
  const loadingContext = useLoadingContext();
  const theme = useTheme();

  topbar.config({
    autoRun: false,
    barThickness: 4,
    barColors: {
      0: `${theme.palette.primary.main}`,
      0.3: `${theme.palette.primary.main}`,
      1.0: `${theme.palette.primary.main}`,
    },
    shadowBlur: 5,
    className: "topbar",
  });

  useEffect(() => {
    loadingContext.done();
    // setTimeout(() => {
    //     loadingContext.done();
    // }, 1500)
  }, []);

  return {};
}
