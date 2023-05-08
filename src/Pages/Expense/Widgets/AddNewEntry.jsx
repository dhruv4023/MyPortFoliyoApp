import React, { useState } from "react";
import WidgetWrapper from "../../../Components/WidgetWrapper";
import { MyBtn, MyTitle } from "../../../Components/MyComponent";
import FlexBetween from "../../../Components/FlexBetween";
import {
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
const initialValue = {
  section: "",
  comment: "",
  amount: "",
  type: "",
  date: new Date().toISOString().substring(0, 10),
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
const AddNewEntry = ({ data, refresh, setRefresh, allSections }) => {
  const [values, setValues] = useState(initialValue);
  const onChangehandle = (val, name) => {
    // e.preventDefault();
    // console.log(name,val);
    let tmp = { ...values };
    tmp[name] = val;
    setValues(tmp);
  };
  const AddNewEntry = () => {
    data[values.section][values.date.substring(0, 7)][values.date].entries.push(
      {
        comment: values.comment,
        value: values.type === "cr" ? values.amount : -values.amount,
      }
    );
    setRefresh(!refresh);
  };
  return (
    <WidgetWrapper>
      <FlexBetween flexDirection={"column"}>
        <MyTitle title={"Add New Entry"} />
        <FlexBetween flexDirection={"column"} gap={1}>
          <Select
            sx={{ width: "100%" }}
            label="Select Section"
            value={values.section}
            onChange={(e) => onChangehandle(e.target.value, "section")}
          >
            {allSections.map((m) => {
              return <MenuItem value={m}>{m}</MenuItem>;
            })}
          </Select>
          <TextField
            label="Comment"
            value={values.comment}
            onChange={(e) => onChangehandle(e.target.value, "comment")}
          />
          <TextField
            label="Amount"
            value={values.amount}
            onChange={(e) => onChangehandle(e.target.value, "amount")}
          />
          <RadioGroup onChange={(e) => onChangehandle(e.target.value, "type")}>
            <FormControlLabel value="dr" control={<Radio />} label="Debit" />
            <FormControlLabel value="cr" control={<Radio />} label="credit" />
          </RadioGroup>
          <MyBtn label="Add" onclickHandle={AddNewEntry} />
        </FlexBetween>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AddNewEntry;
