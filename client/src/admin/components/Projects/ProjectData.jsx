import { DeleteForever } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import FlexBetween from "Components/FlexBetween";
import WidgetWrapper from "Components/WidgetWrapper";
import React, { useEffect } from "react";
import { useState } from "react";
import "./ProjectData.css";
import { useTheme } from "@emotion/react";
import FlexEvenly from "Components/FlexEvenly";
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
  const [p_id, set_id] = useState(null);
  const [titleOfProj, setTitleOfProj] = useState("");
  const [desOfProj, setDesOfProj] = useState("");
  const [linkOfproj, setLinkOfproj] = useState("");
  const [linkList, setLinkList] = useState(list);
  const theme = useTheme();
  const [refresh, setRefresh] = useState(false);
  // const dispatch = useDispatch();

  const handleAddLink = () => {
    linkList.push({
      _id: titleOfProj,
      title: titleOfProj,
      description: desOfProj,
      link: linkOfproj,
    });
    setRefresh(!refresh);
    set_id(null);
    setDesOfProj("");
    setLinkOfproj("");
    setTitleOfProj("");
  };

  const handleDel = (id) => {
    // let x=confirm()
    // console.log(id);
    if (window.confirm("Confirm Delete !")) {
      setLinkList(linkList.filter((f) => f._id !== id));
    }
    setRefresh(!refresh);
  };
  useEffect(() => {}, [refresh]);
  // console.log(linkList);

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
      <FlexBetween gap={"0.5rem"} flexDirection={"column"}>
        <TextField
          type="text"
          value={titleOfProj}
          fullWidth
          onChange={(e) => setTitleOfProj(e.target.value)}
          placeholder="Enter Title here"
        />
        <TextField
          onChange={(e) => setDesOfProj(e.target.value)}
          type="text"
          fullWidth
          value={desOfProj}
          placeholder="Enter Description here"
        />
        <TextField
          value={linkOfproj}
          onChange={(e) => setLinkOfproj(e.target.value)}
          type="text"
          fullWidth
          placeholder="Enter Link here"
        />
        <FlexEvenly width={"100%"}>
          {p_id ? (
            <>
              <Button
                sx={{
                  width: "30%",
                  backgroundColor: theme.palette.neutral.light,
                  "&:hover": {
                    background: theme.palette.primary.dark,
                    color: "orange",
                  },
                }}
                onClick={handleAddLink}
              >
                Edit
              </Button>
              <Button
                sx={{
                  width: "30%",
                  backgroundColor: theme.palette.neutral.light,
                  "&:hover": {
                    background: theme.palette.primary.dark,
                    color: "orange",
                  },
                }}
                onClick={() => {
                  set_id(null);
                  setDesOfProj("");
                  setLinkOfproj("");
                  setTitleOfProj("");
                }}
              >
                Clear
              </Button>
            </>
          ) : (
            <Button
              sx={{
                backgroundColor: theme.palette.neutral.light,
                "&:hover": {
                  background: theme.palette.primary.dark,
                  color: "orange",
                },
              }}
              onClick={handleAddLink}
              fullWidth
              type="button"
            >
              Add
            </Button>
          )}
        </FlexEvenly>
      </FlexBetween>
      <Box sx={{ color: theme.palette.primary.dark }}>
        <h1>List</h1>
        {linkList?.map((m) => {
          return (
            <Box key={m?._id} className="title_projectdata">
              <Box className="trash_btn_admin" onClick={() => handleDel(m._id)}>
                <DeleteForever />
              </Box>
              <Box
                onClick={() => {
                  set_id(m?._id);
                  setTitleOfProj(m.title);
                  setDesOfProj(m.description);
                  setLinkOfproj(m.link);
                }}
                className="title_item_ProjectData"
              >
                {m.title}
              </Box>
            </Box>
          );
        })}
      </Box>
    </WidgetWrapper>
  );
}

export default ProjectData;
