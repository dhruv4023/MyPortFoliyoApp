import React from "react";

import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { chatData } from "../../actions/chat";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contDis, setContDis] = useState({ display: "flex" });

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GAPI,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    const Name = response?.profileObj.name;
    // console.log(Email,Name)
    // console.log(Email,process.env.REACT_APP_ADMIN_EMAIL === Email)
    if (process.env.REACT_APP_ADMIN_EMAIL === Email) {
      navigate("/6300dhruvfb0970e3136ea7ddc9eb");
    } else {
      dispatch(chatData({ name: Name, email: Email, side: "visitor" }));
      setContDis({ display: "none" });
    }
  };
  const onFailure = (response) => {
    // console.log("FAILED", response);
    setContDis({ display: "flex" });
  };

  return (
    <div className="login_container_chat" style={contDis}>
      <GoogleLogin
        clientId={process.env.REACT_APP_GAPI}
        onSuccess={onSuccess}
        onFailure={onFailure}
        render={(renderProps) => (
          <>
            <input
              onClick={renderProps.onClick}
              type="button"
              value="Sign in"
              className="start_chat_btn"
            />
            <b>Click on Sign in to Start Chat</b>
          </>
        )}
      />
    </div>
  );
}

export default Login;
