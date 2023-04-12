import {
  DarkMode,
  LightMode,
  ContactSupport,
  NewReleases,
} from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import { setMode } from "../../state";

const MenuItems = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;

  return (
    <>
      <IconButton gap={"1rem"}>
        <Tooltip title="ProjectsW">
          <NewReleases />
        </Tooltip>
      </IconButton>

      <IconButton gap={"1rem"}>
        <Tooltip title="Contact me">
          <ContactSupport />
        </Tooltip>
      </IconButton>
      <IconButton gap={"1rem"} onClick={() => dispatch(setMode())}>
        {theme.palette.mode === "dark" ? (
          <Tooltip title="switch to light mode">
            <LightMode sx={{ fontSize: "25px" }} />
          </Tooltip>
        ) : (
          <Tooltip title="switch to dark mode">
            <DarkMode sx={{ fontSize: "25px", color: dark }} />
          </Tooltip>
        )}
      </IconButton>

      {/* <FormControl variant="standard" value={fullName}>
        <Select
          value={fullName}
          sx={{
            width: "100px",
            borderRadius: "0.25rem",
            p: "0 2rem",
            "& .MuiSvgIcon-root:": {
              pr: "0.25rem",
              width: "3rem",
            },
            "& .MultiSelect-select:focus": {
              backgroundColor: neutralLight,
            },
          }}
          input={<InputBase />}
        >
          <MenuItem value={fullName}>
            <Typography>{fullName}</Typography>
          </MenuItem>
          <MenuItem onClick={() => dispatch(setLogout())}>Log out</MenuItem>
        </Select>
      </FormControl> */}
    </>
  );
};

export default MenuItems;
