import { DeleteForever } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import "./ProjectData.css";
import { useTheme } from "@emotion/react";
import WidgetWrapper from "../Components/WidgetWrapper";
import { delProject, getProject } from "./project";
import AddProject from "./AddProject";
const list = [
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
function ProjectData() {
  const [linkList, setLinkList] = useState();
  const theme = useTheme();
  const [refresh, setRefresh] = useState(false);

  const handleDel = (id) => {
    // let x=confirm()
    // console.log(id);
    if (window.confirm("Confirm Delete !")) {
      setLinkList(linkList.filter((f) => f._id !== id));
      delProject(id);
    }
    setRefresh(!refresh);
  };
  useEffect(() => {
    !linkList && getProject().then((l) => setLinkList(l));
  }, [refresh]);
  console.log(linkList);
  const [dataToEdit, setDataToEdit] = useState();
  return (
    <WidgetWrapper border={"2px solid white"} flexDirection="column">
      <Typography
        color={"primary"}
        padding="1rem"
        fontWeight={"bold"}
        fontSize={"clamp(1rem,1.5rem,2rem)"}
      >
        Update Links
      </Typography>
      <AddProject
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        refresh={refresh}
        setRefresh={setRefresh}
        linkList={linkList}
        setLinkList={setLinkList}
      />
      <Box sx={{ color: theme.palette.primary.dark }}>
        <h1>List</h1>
        {linkList ? (
          <>
            {linkList?.map((m) => {
              return (
                <Box key={m?._id} className="title_projectdata">
                  <Box
                    className="trash_btn_admin"
                    onClick={() => handleDel(m._id)}
                  >
                    <DeleteForever />
                  </Box>
                  <Box
                    width={"100%"}
                    onClick={() => {
                      setDataToEdit({
                        _id: m?._id,
                        title: m.title,
                        description: m.description,
                        link: m.link,
                      });
                    }}
                    className="title_item_ProjectData"
                  >
                    {m.title}
                  </Box>
                </Box>
              );
            })}
          </>
        ) : (
          <h3>No Project Added yet</h3>
        )}
      </Box>
    </WidgetWrapper>
  );
}

export default ProjectData;
