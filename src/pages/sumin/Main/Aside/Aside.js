import React from "react";

function Aside() {
  return (
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
  );
}

export default Aside;
