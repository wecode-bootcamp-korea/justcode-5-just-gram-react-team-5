import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginSeo() {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/main-seo");
  };

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [inputs, setInputs] = useState({
    userId: "",
    userPw: "",
  });

  const { userId, userPw } = inputs;

  const handleInputs = (event) => {
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const validation = (textId, textPw) => {
    if (!textId.includes("@") || textPw.length < 6) {
      return false;
    }
    return true;
  };

  const inputValid = validation(userId, userPw);

  // 비활성화 signUp();
  const signUp = () => {
    fetch("http://52.79.143.176:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과 : ", result));
  };
  /////

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
              onChange={handleInputs}
              ref={inputRef}
            />
          </div>
          <div className="login__pw-box">
            <input
              type="password"
              name="userPw"
              className="login__pw"
              placeholder="비밀번호"
              value={userPw}
              onChange={handleInputs}
            />
          </div>
          <button
            className={inputValid ? "login__btn-active" : "login__btn-inactive"}
            disabled={!inputValid}
            onClick={moveToMain} // onClick={signUp}
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
