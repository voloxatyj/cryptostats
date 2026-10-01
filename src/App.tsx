import "./App.css";
import "./index.css"; 
import { createTheme, ThemeProvider } from "@mui/material";

import { Routes } from "./routes/routes";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App = () => (
  <ThemeProvider theme={darkTheme}>
    <Routes />
  </ThemeProvider>
)