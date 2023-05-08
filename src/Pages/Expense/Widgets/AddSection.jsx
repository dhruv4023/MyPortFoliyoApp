import React, { useState } from "react";
import WidgetWrapper from "../../../Components/WidgetWrapper";
import { MyBtn, MyTitle } from "../../../Components/MyComponent";
import FlexBetween from "../../../Components/FlexBetween";
import { TextField } from "@mui/material";
const initialValue = {
  section: "",
};
const defaultData = [
  {
    month: new Date().toISOString().substring(0, 7),
    entries: [
      {
        date: new Date().toISOString().substring(0, 10),
        dailydebit: 0,
        dailyCredit: 0,
        entries: [],
      },
    ],
  },
];
const AddSection = ({ data, refresh, setRefresh, allSections }) => {
  const [values, setValues] = useState(initialValue);
  const onChangehandle = (val, name) => {
    // e.preventDefault();
    // console.log(name,val);
    let tmp = { ...values };
    tmp[name] = val;
    setValues(tmp);
  };
  const addSection = () => {
    allSections.push(values.section);
    data[values.section] = defaultData;
    setRefresh(!refresh);
  };

  return (
    <WidgetWrapper>
      <FlexBetween flexDirection={"column"}>
        <MyTitle title={"Add New Section"} />
        <TextField
          label="Section Name"
          value={values.section}
          onChange={(e) => onChangehandle(e.target.value, "section")}
        />
        <MyBtn label="Add Section" onclickHandle={addSection} />
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AddSection;
