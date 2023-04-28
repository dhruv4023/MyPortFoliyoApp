import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";

export const MyBtn = ({ onclickHandle, label = "x" }) => {
  const theme = useTheme();
  return (
    <Button
      fullWidth
      type="submit"
      onClick={onclickHandle}
      sx={{
        m: "1.2rem 0",
        p: "1rem",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.alt,
        "&:hover": { color: theme.palette.primary.main },
      }}
    >
      {label}
    </Button>
  );
};
