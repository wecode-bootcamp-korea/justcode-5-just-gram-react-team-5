import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginYu() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });
  const { id, pw } = userInfo;
  const navigate = useNavigate();
  const toMain = () => {
    navigate("/main-yu");
  };

  return (
    <body>
      <div className="wrapper">
        <div className="modal">
          <h1 className="header">Westagram</h1>
          <form className="user-input">
            <input
              value={id}
              className="input-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  id: e.target.value,
                })
              }
            />
            <input
              value={pw}
              className="input-password"
              type="password"
              placeholder="비밀번호"
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  pw: e.target.value,
                })
              }
            />
            <button
              className="login-button"
              type="submit"
              onClick={toMain}
              style={{
                backgroundColor:
                  pw.length >= 5 && id.includes("@") ? "#61ADED" : "#aed4ea",
                cursor:
                  pw.length >= 5 && id.includes("@") ? "pointer" : "default",
              }}
              disabled={!(pw.length >= 5 && id.includes("@"))}
            >
              로그인
            </button>
          </form>
          <a href="/empty" className="find-password">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </body>
  );
}

export default LoginYu;
