import { Navbar } from "Pages/Navbar/Navbar";
import React, { useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Sections  from "Components/Sections";
import ChatBtn from "Components/Chat/ChatBtn";
// import Admin from "admin/Admin";

const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state) => state.token));
  // console.log(mode,theme,isAuth)
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Sections />
          <ChatBtn />
          {/* <Admin/> */}
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
