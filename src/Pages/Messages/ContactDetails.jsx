import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import FlexBetween from "../../Components/FlexBetween";
import FlexEvenly from "../../Components/FlexEvenly";
import DataCard from "./DataCard";
import { getContactMsg, delContactMsg } from "./contactData";

export default function ContactDetails() {
  // const data = [
  //   {
  //     name: "abc",
  //     email: "abc@example",
  //     message: "abc",
  //   },
  //   {
  //     name: "xyz",
  //     email: "xyz@example",
  //     message: "xyz",
  //   },
  //   {
  //     name: "xyz",
  //     email: "xyz@example",
  //     message: "xyz",
  //   },
  //   {
  //     name: "xyz",
  //     email: "xyz@example",
  //     message: "xyz",
  //   },
  //   {
  //     name: "xyz",
  //     email: "xyz@example",
  //     message: "xyz",
  //   },
  //   {
  //     name: "xyz",
  //     email: "xyz@example",
  //     message: "xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz ",
  //   },
  // ];

  const [data, setData] = useState([]);
  const [loadErr, setLoadErr] = useState(0);
  useEffect(() => {
    setLoadErr(0);
    getContactMsg()
      .then((data) => {
        setData(data);
        data.length === 0 ? setLoadErr(2) : setLoadErr(1);
      })
      .catch((e) => setLoadErr(-1));
  }, []);

  const deleteMsg = (id) => {
    if (window.confirm("Sure about delete ?")) delContactMsg(id);
    setData(data.filter((f) => f._id !== id));
    data.length === 0 && setLoadErr(2);
  };
  console.log(loadErr);
  return (
    <FlexBetween flexDirection={"column"}>
      <Typography
        color={"primary"}
        padding="1rem"
        fontWeight={"bold"}
        fontSize={"clamp(1rem,1.5rem,2rem)"}
      >
        Messages
      </Typography>
      <FlexEvenly flexWrap={"wrap"}>
        <DisplayLodingError
          code={loadErr}
          displayComponent={data.map((m, i) => {
            return <DataCard key={i} dt={m} deleteMsg={deleteMsg} />;
          })}
        />
      </FlexEvenly>
    </FlexBetween>
  );
}
