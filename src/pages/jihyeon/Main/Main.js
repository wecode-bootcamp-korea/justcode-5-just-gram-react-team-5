import React, { useEffect, useState } from "react";

import Addfeed from "../Components/Feed";
import "./Main.scss";

function MainKim() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/commentData.json")
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data);
      });
  }, []);

  return (
    <div>
      <header className="main-header">
        <nav className="main-header-nav">
          <h1>Navigation Menu</h1>
          <div className="nav-left">
            <button type="button" className="nav-btn" aria-label="새 게시글 작성">
              <i className="fa-brands fa-instagram fa-2x"></i>
            </button>
            <button type="button" className="logo-btn">
              justgram
            </button>
          </div>
          <div className="nav-center">
            <i className="search-icon fa-solid fa-magnifying-glass fa-m"></i>
            <input className="search-input" type="text" placeholder="검색" />
          </div>
          <div>
            <button type="button" className="nav-btn" aria-label="사람 찾기">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="" />
            </button>
            <button type="button" className="nav-btn" aria-label="활동 피드">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="" />
            </button>
            <button type="button" className="nav-btn" aria-label="프로필">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="" />
            </button>
          </div>
        </nav>
      </header>
      <main className="real-main">
        <div>
          {feeds.map((a, i) => {
            return <Addfeed feed={a} feeds={feeds} setfeeds={setFeeds} num={i} />;
          })}
        </div>

        <div className="main-right">
          <aside>
            <h1>Your Profile</h1>
            <a className="user-img-l-box" href="">
              <img className="user-img-l" src="./images/jihyeon/user_3_img.jpg" alt="유저 이미지" />
            </a>
            <div>
              <a className="user-name feed-bold-txt" href="">
                jihyeon-kimy
              </a>
              <p className="nickname">개발자를 꿈꾸는 KIMY</p>
            </div>
          </aside>

          <section className="story-side-bar">
            <h1>Story</h1>
            <div className="story-side-bar-h">
              <p>스토리</p>
              <a className="feed-bold-txt" href="">
                모두 보기
              </a>
            </div>

            <ul className="story-side-bar-ul-1">
              <li className="story-side-bar-content">
                <a className="profileImg2" href="">
                  <img className="user-img-side" src="./images/jihyeon/user_4_img.jpg" alt="유저 이미지" />
                </a>
                <div>
                  <a className="feed-bold-txt" href="">
                    chicken&beer
                  </a>
                  <span>16분 전</span>
                </div>
              </li>

              <li className="story-side-bar-content">
                <a className="profileImg2" href="">
                  <img className="user-img-side" src="./images/jihyeon/user_4_img.jpg" alt="유저 이미지" />
                </a>
                <div>
                  <a className="feed-bold-txt" href="">
                    chicken&beer
                  </a>
                  <span>16분 전</span>
                </div>
              </li>

              <li className="story-side-bar-content">
                <a className="profileImg2" href="">
                  <img className="user-img-side" src="./images/jihyeon/user_4_img.jpg" alt="유저 이미지" />
                </a>
                <div>
                  <a className="feed-bold-txt" href="">
                    chicken&beer
                  </a>
                  <span>16분 전</span>
                </div>
              </li>

              <li className="story-side-bar-content">
                <a className="profileImg2" href="">
                  <img className="user-img-side" src="./images/jihyeon/user_4_img.jpg" alt="유저 이미지" />
                </a>
                <div>
                  <a className="feed-bold-txt" href="">
                    chicken&beer
                  </a>
                  <span>16분 전</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="story-side-bar">
            <h1>recommend for you</h1>
            <div className="story-side-bar-h">
              <p>회원님을 위한 추천</p>
              <a className="feed-bold-txt" href="">
                모두 보기
              </a>
            </div>

            <ul className="story-side-bar-ul-2">
              <li className="story-side-bar-content">
                <a href="">
                  <img className="user-img-side-2" src="./images/jihyeon/user_4_img.jpg" alt="유저 이미지" />
                </a>
                <div>
                  <a className="feed-bold-txt" href="">
                    chicken&beer
                  </a>
                  <span>16분 전</span>
                </div>
              </li>

              <li className="story-side-bar-content">
                <a href="">
                  <img className="user-img-side-2" src="./images/jihyeon/user_4_img.jpg" alt="유저 이미지" />
                </a>
                <div>
                  <a className="feed-bold-txt" href="">
                    chicken&beer
                  </a>
                  <span>16분 전</span>
                </div>
              </li>

              <li className="story-side-bar-content">
                <a href="">
                  <img className="user-img-side-2" src="./images/jihyeon/user_4_img.jpg" alt="유저 이미지" />
                </a>
                <div>
                  <a className="feed-bold-txt" href="">
                    chicken&beer
                  </a>
                  <span>16분 전</span>
                </div>
              </li>
            </ul>
          </section>

          <footer>
            <div>
              <a className="footer-link" href="">
                Instagram 정보
              </a>
              <a className="footer-link" href="">
                지원
              </a>
              <a className="footer-link" href="">
                홍보 센터
              </a>
              <a className="footer-link" href="">
                API
              </a>
              <a className="footer-link" href="">
                채용 정보
              </a>
              <a className="footer-link" href="">
                개인정보처리방침
              </a>
              <a className="footer-link" href="">
                약관
              </a>
              <a className="footer-link" href="">
                디렉터리
              </a>
              <a className="footer-link" href="">
                프로필
              </a>
              <a className="footer-link" href="">
                해시태그
              </a>
              <a className="" href="">
                언어
              </a>
            </div>

            <div className="copyright">&copy; 2019 INSTAGRAM</div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default MainKim;
