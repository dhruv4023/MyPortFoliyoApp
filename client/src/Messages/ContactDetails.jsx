import React from "react";
import "./ContactDetails.css";
import DataCard from "./DataCard";
import { Typography } from "@mui/material";
import FlexEvenly from "../Components/FlexEvenly";

export default function ContactDetails() {
  const data = [
    {
      name: "abc",
      email: "abc@example",
      message: "abc",
    },
    {
      name: "xyz",
      email: "xyz@example",
      message: "xyz",
    },
    {
      name: "xyz",
      email: "xyz@example",
      message: "xyz",
    },
    {
      name: "xyz",
      email: "xyz@example",
      message: "xyz",
    },
    {
      name: "xyz",
      email: "xyz@example",
      message: "xyz",
    },
    {
      name: "xyz",
      email: "xyz@example",
      message: "xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz xyz ",
    },
  ];

  return (
    <>
      <Typography
        color={"primary"}
        padding="1rem"
        fontWeight={"bold"}
        fontSize={"clamp(1rem,1.5rem,2rem)"}
      >
        Messages
      </Typography>
      <FlexEvenly flexWrap={"wrap"}>
        {data.map((m, i) => {
          return <DataCard key={i} dt={m} />;
        })}
      </FlexEvenly>
    </>
  );
}
