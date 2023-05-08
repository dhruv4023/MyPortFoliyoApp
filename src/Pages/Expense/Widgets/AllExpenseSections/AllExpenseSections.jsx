import React from "react";
import WidgetWrapper from "../../../../Components/WidgetWrapper";
import { MyTitle } from "../../../../Components/MyComponent";
import FlexBetween from "../../../../Components/FlexBetween";
import NthSection from "./NthSection";
import { Box } from "@mui/material";
import FlexEvenly from "../../../../Components/FlexEvenly";

const AllExpenseSections = ({ data }) => {
  return (
    <WidgetWrapper>
      <FlexBetween flexDirection={"column"}>
        <MyTitle title={"All Expense Section"} />
        <FlexEvenly width={"100%"} gap={"0.5rem"} flexWrap={"wrap"}>
          {Object.keys(data).map((m) => {
            return (
              <Box width={"100%"}>
                <hr color="black" />
                <NthSection data={data[m]} title={m} />
              </Box>
            );
          })}
        </FlexEvenly>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AllExpenseSections;
