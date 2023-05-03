import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import NavProject from "./NavProject";
import Project from "./Project";
import WidgetWrapper from "../../Components/WidgetWrapper";
import { getProject } from "./projectApi";

// const linkList = [
//   {
//     _id: "63028c7a139c6b28e7889b8b",
//     title: "You Tube Clone",
//     link: "https://dhruv4023youtubeclone.netlify.app",
//     description:
//       "MERN stack Project Made As a submission Project for NULLCLASS COMPANY Internship.",
//   },
//   {
//     _id: "63028c7a139c6b28e7889b85",
//     title: "Appointment App",
//     link: "https://aasdp.vercel.app",
//     description: "Software development project for submission",
//   },
// ];
export default function MyProject() {
  const [index, setIndex] = useState(0);
  const [titles, setTitles] = useState();
  const [linkList, setLinkList] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getProject()
      .then((project) => {
        setLinkList(project);
        setTitles(project.map((m) => [m.title, m._id]));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  const theme = useTheme();
  return (
    <WidgetWrapper
      width={"95vw"}
      backgroundColor={theme.palette.background.semiTransparent}
      flexDirection={"column"}
    >
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {titles && linkList ? (
            <>
              {titles.length !== 0 ? (
                <>
                  <NavProject titles={titles} setIndex={setIndex} />
                  <Project data={linkList[index]} />
                </>
              ) : (
                <>No Project Added Yet</>
              )}
            </>
          ) : (
            <>Server Error</>
          )}
        </>
      )}
    </WidgetWrapper>
  );
}
