import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Navbar } from "./Pages/Navbar/Navbar";
import ChatBtn from "./Components/Chat/ChatBtn";
import PageSec from "./Components/PageSec";
import { BrowserRouter as Router } from "react-router-dom";
import Alert from "./Components/Alert";

const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Alert /> */}
        <Navbar />
        <PageSec />
        <ChatBtn />
      </ThemeProvider>
    </Router>
  );
};

export default App;
