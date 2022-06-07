import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function LoginPark() {
  const navigate = useNavigate();
  const goToMain = () => {
    // fetch("http://52.79.143.176:8000/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: userId,
    //     password: userPw,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) =>
    //     result.token !== undefined
    //       ? navigate("/main-park")
    //       : alert(result.message)
    //   );
    navigate("/main-park");
  };
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [isValid, setIsValid] = useState(false);
  const validation = () => {
    if (userId.includes("@") && userPw.length > 7) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleId = (event) => {
    const { value } = event.target;
    setUserId(value);
  };
  const handlePw = (event) => {
    const { value } = event.target;
    setUserPw(value);
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
              onKeyUp={validation}
              onChange={handleId}
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              onKeyUp={validation}
              onChange={handlePw}
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
