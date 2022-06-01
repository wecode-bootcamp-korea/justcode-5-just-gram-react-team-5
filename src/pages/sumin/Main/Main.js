import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import "./Main.scss";

function MainSeo() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/feedData.json")
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data);
      });
  }, []);

  return (
    <section className="Main main__wrapper">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <header className="header">
        <div className="header-center">
          <div className="header__logo">
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="header__logo-border">|</div>
            <div className="header__logo-txt">
              <Link to="/login-seo">JustGram</Link>
            </div>
          </div>
          <div className="header__search-group">
            <div className="header__search-box">
              <input
                type="text"
                className="header__search-box-bar"
                placeholder="검색"
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="header__icon">
            <button className="header__icon-explore">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="사람 찾기"
              />
            </button>
            <button className="header__icon-like">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="활동 피드"
              />
            </button>
            <button className="header__icon-profile">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="프로필 사진"
              />
            </button>
          </div>
        </div>
      </header>
      <main className="main-feed__wrapper">
        <section className="main-feed">
          {feeds.map((data) => {
            return <Feed key={data.id} data={data} />;
          })}
        </section>
        <aside className="main-sidebar">
          <div className="sidebar__profile">
            <a href="#">
              <img
                src="images/sumin/profile/002.jpg"
                alt="프로필 사진"
                className="profile-common"
              />
            </a>
            <div className="sidebar__profile-txt">
              <p>
                <a href="#" className="bold">
                  hihihihi
                </a>
              </p>
              <p>
                <a href="#" className="sub_txt">
                  JucstCode | 저스트코드
                </a>
              </p>
            </div>
          </div>
          <div className="sidebar__story sidebar__common">
            <div className="story__header sidebar__common-header">
              <p>스토리</p>
              <a href="#">모두 보기</a>
            </div>
            <ul className="story__contents-list sidebar__common-list">
              <li>
                <a href="#" className="story__profile">
                  <img
                    src="images/sumin/profile/003.jpg"
                    alt="프로필 사진"
                    className="profile-common"
                  />
                </a>
                <div className="story-txt">
                  <div className="story-id bold">_yum_s</div>
                  <div className="story-time">16분 전</div>
                </div>
              </li>
              <li>
                <a href="#" className="story__profile">
                  <img
                    src="images/sumin/profile/004.jpg"
                    alt="프로필 사진"
                    className="profile-common"
                  />
                </a>
                <div className="story-txt">
                  <div className="story-id bold">drink_eat_drink</div>
                  <div className="story-time">3시간 전</div>
                </div>
              </li>
              <li>
                <a href="#" className="story__profile">
                  <img
                    src="images/sumin/profile/005.jpg"
                    alt="프로필 사진"
                    className="profile-common"
                  />
                </a>
                <div className="story-txt">
                  <div className="story-id bold">hyukyc</div>
                  <div className="story-time">20시간 전</div>
                </div>
              </li>
              <li>
                <a href="#" className="story__profile">
                  <img
                    src="images/sumin/profile/006.jpg"
                    alt="프로필 사진"
                    className="profile-common"
                  />
                </a>
                <div className="story-txt">
                  <div className="story-id bold">jminkeek</div>
                  <div className="story-time">21시간 전</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidebar__recommend sidebar__common">
            <div className="recommend__header sidebar__common-header">
              <p>회원님을 위한 추천</p>
              <a href="#">모두 보기</a>
            </div>
            <ul className="story__recommend-list sidebar__common-list">
              <li>
                <div className="recommend-info">
                  <a href="#" className="recommend__profile">
                    <img
                      src="images/sumin/profile/007.jpg"
                      alt="프로필 사진"
                      className="profile-common"
                    />
                  </a>
                  <div className="recommend-txt">
                    <div className="recommend-id bold">joaaaaaahye</div>
                    <div className="recommend-myfriend">
                      jminkeek님 외 2명이 팔로우
                    </div>
                  </div>
                </div>
                <a href="#" className="recommend__follow-btn">
                  팔로우
                </a>
              </li>
              <li>
                <div className="recommend-info">
                  <a href="#" className="recommend__profile">
                    <img
                      src="images/sumin/profile/008.jpg"
                      alt="프로필 사진"
                      className="profile-common"
                    />
                  </a>
                  <div className="recommend-txt">
                    <div className="recommend-id bold">rampart81</div>
                    <div className="recommend-myfriend">
                      drink_eat_drink님 외 12명이 팔로우
                    </div>
                  </div>
                </div>
                <a href="#" className="recommend__follow-btn">
                  팔로우
                </a>
              </li>
              <li>
                <div className="recommend-info">
                  <a href="#" className="recommend__profile">
                    <img
                      src="images/sumin/profile/009.jpg"
                      alt="프로필 사진"
                      className="profile-common"
                    />
                  </a>
                  <div className="recommend-txt">
                    <div className="recommend-id bold">shawnjjoo</div>
                    <div className="recommend-myfriend">
                      yumss님 외 15명이 팔로우
                    </div>
                  </div>
                </div>
                <a href="#" className="recommend__follow-btn">
                  팔로우
                </a>
              </li>
            </ul>
          </div>
          <footer className="main__footer">
            <p>
              Instagram 정보·지원·홍보 센터·API·채용
              정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
            </p>
            <p>© 2019 INSTAGRAM</p>
          </footer>
        </aside>
      </main>
    </section>
  );
}

export default MainSeo;
