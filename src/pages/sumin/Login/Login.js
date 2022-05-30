import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginSeo() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const moveToMain = () => {
    navigate("/main-seo");
  };

  function handleIdInput(event) {
    setUserId(event.target.value);
  }

  function handlePwInput(event) {
    setUserPw(event.target.value);
  }

  const validation = (textId, textPw) => {
    if (!textId.includes("@")) {
      return false;
    }
    if (textPw.length < 6) {
      return false;
    }
    return true;
  };

  const inputValid = validation(userId, userPw);

  return (
    <section className="Login login__wrapper">
      <article className="login__wrap">
        <h1 className="login__logo">
          <Link to="/main-seo">Justgram</Link>
        </h1>
        <div className="login__form">
          <div className="login__id-box">
            <input
              type="text"
              name="userId"
              className="login__id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={userId}
              onChange={handleIdInput}
            />
          </div>
          <div className="login__pw-box">
            <input
              type="password"
              name="userPw"
              className="login__pw"
              placeholder="비밀번호"
              value={userPw}
              onChange={handlePwInput}
            />
          </div>
          <button
            className={inputValid ? "login__btn-active" : "login__btn-inactive"}
            disabled={!inputValid}
            onClick={moveToMain}
          >
            로그인
          </button>
        </div>
        <footer className="login__footer">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </footer>
      </article>
      <script src="js/login.js"></script>
    </section>
  );
}

export default LoginSeo;
