import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginKim() {
  // 1. ID와 PW 인풋에 적은 내용을 useState에 저장
  const [idPw, setIdPw] = useState({
    id: "",
    pw: ""
  });

  const { id, pw } = idPw;

  const handleIdPw = (e) => {
    const { value, name } = e.target;
    setIdPw({
      ...idPw,
      [name]: value
    });
  };

  // 2. 로그인 버튼을 누를 경우, main 페이지로 이동
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main-kim");
  };

  // 3. 로그인 버튼 활성화

  let [validation, setValidation] = useState(true);

  const btnValidation = (e) => {
    const { value, name } = e.target;

    if (name === "id" && value.includes("@") && pw.length > 5) {
      setValidation(false);
    } else if (name === "pw" && value.length > 5 && id.includes("@")) {
      setValidation(false);
    } else {
      setValidation(true);
    }
  };

  return (
    <div className="body">
      <section className="login-box">
        <h1 className="title">justgram</h1>
        <input className="id input writing" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onKeyUp={btnValidation} onChange={handleIdPw} value={id} name="id" />
        <input className="pw input" type="password" placeholder="비밀번호" onKeyUp={btnValidation} onChange={handleIdPw} value={pw} name="pw" />

        <button className={validation ? "login-button-inactive" : "login-button-active"} disabled={validation} type="button" onClick={goToMain}>
          로그인
        </button>
        <a className="forgot-password" href="">
          비밀번호를 잊으셨나요?
        </a>
      </section>
    </div>
  );
}

export default LoginKim;
