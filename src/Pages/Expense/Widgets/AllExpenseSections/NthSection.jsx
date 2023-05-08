import React, { useState } from "react";
import FlexBetween from "../../../../Components/FlexBetween";
import CollapsibleTable from "../../../../Components/CollapsibleTable";
import { TextField } from "@mui/material";
import FlexEvenly from "../../../../Components/FlexEvenly";

const NthSection = ({ title, data }) => {
  const [mm, setMm] = useState(new Date().toISOString().substring(0, 7));
  console.log(data);
  return (
    <FlexBetween flexDirection={"column"}>
      <FlexEvenly width={"100%"}>
        <h3>{title}</h3>
        <TextField
          type="month"
          onChange={(e) => setMm(e.target.value)}
          value={mm}
        />
      </FlexEvenly>
      <CollapsibleTable data={data[0].entries} />
    </FlexBetween>
  );
};

export default NthSection;
