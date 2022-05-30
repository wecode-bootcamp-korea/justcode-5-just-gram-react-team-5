import React from "react";

function Aside() {
  const footerList = ["Instagram정보", "지원", "홍보 센터", "API", "채용 정보", "개인정보처리방침", "약관", "디렉토리", "프로필", "해시태그", "언어"];

  return (
    <div className="main-right">
      <aside className="user-info">
        <a href="">
          <img className="user-img-l" src="./images/jihyeon/user_3_img.jpg" alt="유저 이미지" />
        </a>
        <div>
          <a className="user-name feed-bold-txt" href="">
            jihyeon-kimy
          </a>
          <p className="nickname">개발자를 꿈꾸는 KIMY</p>
        </div>
      </aside>

      <section className="side-wrap">
        <div className="side-wrap-header">
          <p>스토리</p>
          <a className="feed-bold-txt" href="">
            모두 보기
          </a>
        </div>

        <ul className="side-list-1">
          {[1, 2, 3, 4].map((a, i) => {
            return (
              <li className="side-list-img" key={i}>
                <a className="side-list-img-deco" href="">
                  <img className="user-img-side-1" src="./images/jihyeon/user_4_img.jpg" alt="유저 이미지" />
                </a>
                <div className="side-list-info">
                  <a className="feed-bold-txt" href="">
                    chicken&beer
                  </a>
                  <span>16분 전</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="side-wrap">
        <div className="side-wrap-header">
          <p>회원님을 위한 추천</p>
          <a className="feed-bold-txt" href="">
            모두 보기
          </a>
        </div>

        <ul className="side-list-2">
          {[1, 2, 3].map((a, i) => {
            return (
              <li className="side-list-img" key={i}>
                <a href="">
                  <img className="user-img-side-2" src="./images/jihyeon/user_4_img.jpg" alt="유저 이미지" />
                </a>
                <div className="side-list-info">
                  <a className="feed-bold-txt" href="">
                    chicken&beer
                  </a>
                  <span>16분 전</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <footer>
        <div className="footer">
          {footerList.map((a, i) => {
            return (
              <a className="footer-link" href="" key={i}>
                {a}
              </a>
            );
          })}
        </div>

        <div className="copyright">&copy; 2019 INSTAGRAM</div>
      </footer>
    </div>
  );
}

export default Aside;
