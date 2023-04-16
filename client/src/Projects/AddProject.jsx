import React, { useEffect, useState } from "react";
import FlexBetween from "../Components/FlexBetween";
import { Button, TextField } from "@mui/material";
import FlexEvenly from "../Components/FlexEvenly";
import { useTheme } from "@emotion/react";
import { addProject, editProject } from "./project";

const AddProject = (props) => {
  const {
    dataToEdit,
    setDataToEdit,
    refresh,
    setRefresh,
    linkList,
    setLinkList,
  } = props;

  const [p_id, set_id] = useState(null);
  const [titleOfProj, setTitleOfProj] = useState("");
  const [desOfProj, setDesOfProj] = useState("");
  const [linkOfproj, setLinkOfproj] = useState("");
  const theme = useTheme();
  const handleAddLink = () => {
    const obj = {
      _id: titleOfProj,
      title: titleOfProj,
      description: desOfProj,
      link: linkOfproj,
    };
    linkList.push(obj);
    addProject(obj);
    refreshAndClear();
  };

  const handleEdit = () => {
    setLinkList(linkList.filter((f) => f._id !== p_id));
    const obj = {
      _id: p_id,
      title: titleOfProj,
      description: desOfProj,
      link: linkOfproj,
    };
    linkList.push(obj);
    editProject(obj, p_id);
    setLinkList(linkList);
    refreshAndClear();
  };
  const refreshAndClear = () => {
    setRefresh(!refresh);
    set_id(null);
    setDesOfProj("");
    setLinkOfproj("");
    setTitleOfProj("");
  };
  useEffect(() => {
    if (dataToEdit) {
      set_id(dataToEdit._id);
      setTitleOfProj(dataToEdit.title);
      setDesOfProj(dataToEdit.description);
      setLinkOfproj(dataToEdit.link);
      setDataToEdit();
    }
  }, [dataToEdit]);
  return (
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
              onClick={handleEdit}
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
  );
};

export default AddProject;
