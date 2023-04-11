import { Delete, DeleteForever } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import FlexBetween from "Components/FlexBetween";
import WidgetWrapper from "Components/WidgetWrapper";
import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./ProjectData.css";
function ProjectData() {
  const [p_id, set_id] = useState(null);
  const [titleOfProj, setTitleOfProj] = useState("");
  const [desOfProj, setDesOfProj] = useState("");
  const [linkOfproj, setLinkOfproj] = useState("");

  const dispatch = useDispatch();
  const linkList = useSelector((s) => s.projectReducer)?.data;
  // console.log(linkList);

  const handleAddLink = () => {};

  const handleDel = (id) => {
    // let x=confirm()
    if (window.confirm("Confirm Delete !")) {
      // console.log()
    }
  };

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
        <Box>
          {p_id ? (
            <>
              <Button onClick={handleAddLink} value="Edit" />
              <Button
                onClick={() => {
                  set_id(null);
                  setDesOfProj("");
                  setLinkOfproj("");
                  setTitleOfProj("");
                }}
                value="Clear"
              />
            </>
          ) : (
            <Button
              onClick={handleAddLink}
              className="btn_ProjectData"
              type="button"
              value="Add"
            />
          )}
        </Box>
      </FlexBetween>
      <Box>
        <h1>List</h1>
        {linkList?.map((m) => {
          return (
            <Box
              key={m?._id}
              onClick={() => {
                set_id(m?._id);
                setTitleOfProj(m?.Title);
                setDesOfProj(m?.Description);
                setLinkOfproj(m?.Link);
              }}
              className="title_projectdata"
            >
              <Box
                className="trash_btn_admin"
                onClick={() => handleDel(m?._id)}
              >
                <DeleteForever />
              </Box>
              <Box className="title_item_ProjectData">{m?.Title}</Box>
            </Box>
          );
        })}
      </Box>
    </WidgetWrapper>
  );
}

export default ProjectData;
