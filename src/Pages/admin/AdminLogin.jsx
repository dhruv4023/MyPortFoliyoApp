import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { getLoginUsingCode } from "./adminApi";
import FlexBetween from "../../Components/FlexBetween";

const AdminLogin = ({ setAdminPAge }) => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState();
  const getLogin = async () => {
    if (!code) alert("Please enter Code");
    else {
      setLoading(true);
      getLoginUsingCode({ code })
        .then((s) => {
          setLoading(false);
          setAdminPAge(s);
        })
        .catch(() => {
          setLoading(false);
          setAdminPAge(false);
        });
    }
  };
  return (
    <FlexBetween flexDirection={"column"} gap={"0.5rem"} my={"5rem"}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <TextField
            label="password"
            type="password"
            onChange={(e) => setCode(e.target.value)}
          />
          <Button onClick={getLogin}>Login</Button>
        </>
      )}
    </FlexBetween>
  );
};

export default AdminLogin;
