import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginSon() {
  //ID, PW input의 사용자 입력값을 useState에 저장
  const [userInfo, setUserInfo] = useState({ id: "", pw: "" });

  const { id, pw } = userInfo;

  const handleIdPw = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  //로그인 버튼 onclick -> main 페이지로 이동
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main-Son");
  };

  //   const goToMain = (event) => {
  //   event.preventDefault();
  //   fetch("http://52.79.143.176:8000/users/login", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json",},
  //     body: JSON.stringify({email: userInfo.id, password: userInfo.pw,}),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log("결과: ", result));
  // };

  //로그인 버튼 비활성화
  let [validation, setValidation] = useState(false);

  const btnValidation = (e) => {
    const { value, name } = e.target;

    if (name === "id" && value.includes("@") && pw.length > 5) {
      setValidation(true);
    } else if (name === "pw" && value.length > 5 && id.includes("@")) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  return (
    <div className="Login">
      <div className="loginWhole">
        <div className="logoBox">
          <div className="logo">
            <span className="logo-text">Justgram</span>
          </div>
          <div className="inputWholeBox">
            <form className="infoInputWholeBox" id="loginForm" method="post">
              <div className="infoInputWholeBox">
                <div className="id-box">
                  <div className="id-input-box">
                    <input
                      className="id_input"
                      type="email"
                      placeholder="전화번호,사용자 이름 또는 이메일"
                      onKeyUp={btnValidation}
                      onChange={handleIdPw}
                      value={id}
                      name="id"
                    />
                  </div>
                </div>
                <div className="pw-box">
                  <div className="pw-input-box">
                    <input
                      className="pw_input"
                      type="password"
                      placeholder="비밀번호"
                      onKeyUp={btnValidation}
                      onChange={handleIdPw}
                      value={pw}
                      name="pw"
                    />
                  </div>
                </div>

                <div className="login-button-box">
                  <button
                    className={
                      validation
                        ? "login-button active"
                        : "login-button inactive"
                    }
                    type="submit"
                    disabled={!validation}
                    onClick={goToMain}
                  >
                    로그인
                  </button>
                </div>

                <div className="or-box">
                  <div className="or-left-line"></div>
                  <div className="or-text">또는</div>
                  <div className="or-right-line"></div>
                </div>

                <div className="facebook-login-box">
                  <button className="facebook-login-button" type="button">
                    <img
                      className="facebook-icon"
                      src="images/sohee/facebook.png"
                      alt="facebook"
                    />
                    <span className="facebook-text">Facebook으로 로그인</span>
                  </button>
                </div>
              </div>

              <div href="" className="pw-finder">
                비밀번호를 잊으셨나요?
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSon;
