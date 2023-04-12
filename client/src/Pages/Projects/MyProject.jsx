import { useTheme } from "@emotion/react";
import WidgetWrapper from "Components/WidgetWrapper";
import React, { useState } from "react";
import NavProject from "./NavProject";
import Project from "./Project";
export default function MyProject() {
  const linkList = [
    {
      _id: "63028c7a139c6b28e7889b8b",
      title: "You Tube Clone",
      link: "https://dhruv4023youtubeclone.netlify.app",
      description:
        "MERN stack Project Made As a submission Project for NULLCLASS COMPANY Internship.",
    },
    {
      _id: "63028c7a139c6b28e7889b85",
      title: "Appointment App",
      link: "https://aasdp.vercel.app",
      description: "Software development project for submission",
    },
  ];
  const [index, setIndex] = useState(0);
  const titles = linkList.map((m) => [m.title, m._id]);
  const theme = useTheme();
  return (
    <WidgetWrapper
      width={"95vw"}
      backgroundColor={theme.palette.background.semiTransparent}
      flexDirection={"column"}
    >
      <NavProject titles={titles} setIndex={setIndex} />
      <Project data={linkList[index]} />
    </WidgetWrapper>
  );
}
