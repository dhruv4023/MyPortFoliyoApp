import { Navbar } from "Pages/Navbar/Navbar";
import React, { useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import ChatBtn from "Components/Chat/ChatBtn";
import PageSections from "Components/PageSections";
// import Admin from "admin/Admin";

const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <PageSections />
          <ChatBtn />
          {/* <Admin/> */}
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
