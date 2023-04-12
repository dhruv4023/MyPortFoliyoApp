import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Navbar } from "./Pages/Navbar/Navbar";
import ChatBtn from "./Components/Chat/ChatBtn";
import PageSec from "./Components/PageSec";

const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <PageSec />
        <ChatBtn />
      </ThemeProvider>
    </>
  );
};

export default App;
