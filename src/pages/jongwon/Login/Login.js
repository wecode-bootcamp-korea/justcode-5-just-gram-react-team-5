import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function LoginPark() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validation = () => {
    if (userID.includes("@") && userPW.length > 7) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleIDInput = (event) => {
    setUserID(event.target.value);
  };
  const handlePWInput = (event) => {
    setUserPW(event.target.value);
  };

  return (
    <div className="Login">
      <div className="wrapper">
        <div className="inside">
          <div className="title-login"> webstagram </div>
          <div className="inputhtml">
            <input
              className="username-login"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              onChange={handleIDInput}
              onKeyUp={validation}
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              onChange={handlePWInput}
              onKeyUp={validation}
            />
          </div>
          <input
            className="login-btn"
            type="button"
            value="로그인"
            onClick={goToMain}
            disabled={isValid ? false : true}
            style={{ opacity: isValid ? "1" : "0.3" }}
          />
          <div className="alertforgotpassword"> 비밀번호를 잊으셨나요? </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPark;
