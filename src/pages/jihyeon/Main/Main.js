import React, { useState } from "react";
import Addcomment from "../Components/comment";
import "./Main.scss";

function MainKim() {
  const [newComment, setNewComment] = useState("");
  const [commentUser, setCommentUser] = useState(["hiThere", "areYouOkay"]);
  const [commentText, setCommentText] = useState(["베스킨라빈스 아몬드 봉봉을 좋아합니다🤞", "옆에 침대가 보이니 눕고 싶네요...."]);

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
        <article className="real-main-article">
          <h1>Your Feed</h1>
          <header className="feed-header">
            <div>
              <a href="">
                <img className="user-img" src="./images/jihyeon/user_1_img.jpg" alt="유저 이미지" />
              </a>
              <a className="feed-bold-txt" href="">
                rem.jh
              </a>
            </div>
            <button type="button">
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </header>

          <img className="feed-img" src="./images/jihyeon/post_1.jpg" alt="post" />

          <div className="feed-content">
            <div className="feed-buttons">
              <div>
                <button className="feed-button" type="button">
                  <i className="fa-regular fa-heart fa-lg"></i>
                </button>
                <button type="button">
                  <i className="fa-regular fa-comment fa-lg"></i>
                </button>
                <button type="button">
                  <i className="fa-regular fa-paper-plane fa-lg"></i>
                </button>
              </div>
              <button type="button">
                <i className="fa-regular fa-bookmark fa-lg"></i>
              </button>
            </div>

            <div className="like">
              <a href="">
                <img className="user-img-s" src=".././images/jihyeon/user_2_img.jpg" alt="user profile" />
              </a>
              <a className="feed-bold-txt" href="">
                developer
              </a>
              님{" "}
              <a className="feed-bold-txt" href="">
                외 <span>10</span>명
              </a>
              이 좋아합니다.
            </div>

            <div className="comment-collection">
              <ul className="comment-list">
                {commentUser.map((a, i) => {
                  return <Addcomment user={commentUser} num={i} text={commentText} />;
                })}
              </ul>
            </div>

            <div className="upload-time">
              <span>42분</span> 전
            </div>
          </div>

          <div className="comment-box">
            <input
              className="comment-write"
              type="text"
              placeholder="댓글 달기..."
              onChange={(e) => {
                setNewComment(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.keyCode == 13) {
                  let copyText = [...commentText];
                  copyText.push(newComment);
                  setCommentText(copyText);

                  let copyUser = [...commentUser];
                  copyUser.push("jihyeon-kimy");
                  setCommentUser(copyUser);
                }
              }}
            />
            <button
              className="comment-btn"
              type="button"
              onClick={() => {
                let copyText = [...commentText];
                copyText.push(newComment);
                setCommentText(copyText);

                let copyUser = [...commentUser];
                copyUser.push("jihyeon-kimy");
                setCommentUser(copyUser);
              }}>
              게시
            </button>
          </div>
        </article>

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
