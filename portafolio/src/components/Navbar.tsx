import {
  AppBar,
  FormControlLabel,
  FormGroup,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  cloneElement,
} from "react";

import { MaterialUISwitch } from "./utils";

interface Props {
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
  window?: () => Window;
  children: ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar(props: Props) {
  const { mode, setMode } = props;

  const theme = useTheme();

  const handleChangeMode = (e: ChangeEvent<HTMLInputElement>) => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  return (
    <ElevationScroll {...props}>
      <AppBar
        sx={{ p: 2, backgroundColor: theme.palette.background.default }}
      >
        <Toolbar variant="dense">
          <Typography
            sx={{ flexGrow: 1, fontWeight: "bold", fontStyle: "italic", color: theme.palette.primary.main }}
            variant="h4"
            noWrap
          >
            Claudio Guevara
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch onChange={handleChangeMode} />}
              label=""
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
