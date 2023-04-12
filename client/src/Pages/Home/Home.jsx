import { Box } from "@mui/material";
import React from "react";
import "./home.css";
import "./TextAnimation.css";
import FlexBetween from "../../Components/FlexBetween";
import WidgetWrapper from "../../Components/WidgetWrapper";
export default function Home() {
  return (
    <FlexBetween width="100%" flexWrap={"wrap"}>
      {/* <WidgetWrapper width={"17rem"} border="1px solid red">
        <Box className="Clock_cont_home">
          <Clock />
        </Box>
      </WidgetWrapper> */}
      <WidgetWrapper height={"70vh"} width={"100%"}>
        <Box
          sx={{
            fontSize: "1.5rem",

            textAlign: "center",
            fontWeight: 500,
          }}
          className="text_home animate_charcter"
        >
          Hello My Name is Dhruv Patel, welcome You To My PortFoliyo React App.
        </Box>
      </WidgetWrapper>
    </FlexBetween>
  );
}
