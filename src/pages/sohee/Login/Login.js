import "./Login.scss";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function LoginSon () {

    const navigate = useNavigate();
    const [identify, setIdentify] = useState('');
    const [password, setPassword] = useState('');

    const validation = (idText, pwText) => {
        if (!idText.includes('@')) {
          return false;
        }
        if (pwText.length < 7) {
          return false;
        }
    
        return true;
      };
    
      const buttonOnClick = () => {
        if (validation(identify, password)) {
          alert('로그인 되었습니다.');
          navigate('/main-son');
        } else {
          alert('로그인에 실패하였습니다.');
          setIdentify('');
          setPassword('');
        }
      };
    

    const valid = validation(identify, password);

    return(
        <div className="Login">
            <div className="loginWhole">
           <div className="logoBox">
            <div className="logo">
                <span className = "logo-text">Justgram</span>
            </div>
            <div className="inputWholeBox">
                <form className="infoInputWholeBox" id="loginForm" method="post">
                    <div className="infoInputWholeBox">


                        <div className="id-box">
                            <div className="id-input-box"> 
                                <input
                                className="login_input"
                                name="identify"
                                type="email"
                                placeholder="전화번호,사용자 이름 또는 이메일"
                                value={identify}
                                onChange={(event) => {
                                    setIdentify(event.target.value);
                                }}
                                />
                            </div>
                        </div>

                        <div className="pw-box">
                            <div className="pw-input-box">
                                <input
                                className="login_input"
                                name="password"
                                type="password"
                                minLength={5}
                                placeholder="비밀번호"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                />
                            </div>
                        </div>


                        <div className="login-button-box">
                            <button
                                className={valid ? 'login-button active' : 'login-button inactive'}
                                disabled={!valid}
                                onClick={buttonOnClick}
                            >
                                로그인
                            </button>
                        </div>
                        

                        <div className="or-box">
                            <div className="or-left-line">
                            </div>
                            <div className="or-text">또는 
                            </div>
                            <div className="or-right-line"> 
                            </div>
                        </div>

                        <div className="facebook-login-box">
                            <button className="facebook-login-button" type="button">
                                <img className="facebook-icon" src="images/sohee/facebook.png" alt="facebook"/>
                                <span className="facebook-text">Facebook으로 로그인
                                </span>
                            </button>
                        </div>

                    </div>
                    
                    <div href="" className="pw-finder"> 비밀번호를 잊으셨나요? </div>

                </form>
            </div>

        </div>
        </div>
        </div>
    );
}

export default LoginSon;