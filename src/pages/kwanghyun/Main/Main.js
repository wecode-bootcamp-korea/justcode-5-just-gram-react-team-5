import { useEffect, useState } from "react";
import Feed from "../../../components/Feed/Feed";
import "./Main.scss";

const MainYu = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await (
        await fetch("http://localhost:3000/data/data.json")
      ).json();
      setData(result.slice(0, page));
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight && page <= 8) {
        setTimeout(
          setPage((prev) => prev + 2),
          700
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <body>
      <nav>
        <div className="nav-insta-logo">
          <img
            className="nav-insta-logo-image"
            src="images/kwanghyun/c.png"
            alt="Instagram logo"
          />
          <span className="nav-text">Instagram</span>
        </div>
        <div className="nav-find">
          <input className="nav-find-search" type="text" placeholder="검색" />
        </div>
        <div className="nav-icons">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="Search icon"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="Likes icon"
          />
          <img
            className="user-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="My page icon"
          />
          <div className="nav-icons-user-menu">
            <div>
              <i className="fa-solid fa-user"></i>
              <span>프로필</span>
            </div>
            <div>
              <i className="fa-solid fa-bookmark"></i>
              <span>저장됨</span>
            </div>
            <div>
              <i className="fa-solid fa-gear"></i>
              <span>설정</span>
            </div>
            <div>
              <span>로그아웃</span>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="feeds">
          {!isLoading && data.map((el) => <Feed key={el.id} data={el} />)}
        </div>

        <div className="main-right">
          <div className="wecode-profile">
            <img src="images/kwanghyun/e.jpg" alt="user images" />
            <div className="wecode-profile-nickname">
              <span>wecode_bootcamp</span>
              <span>Wecode | 위코드</span>
            </div>
          </div>
          <div className="story-section">
            <div className="story-header">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <div className="story-users">
              <div className="story-users-first">
                <img src="images/kwanghyun/f.jpg" alt="user images" />
                <div className="story-users-first-info">
                  <span>_yum_s</span>
                  <span>16분 전</span>
                </div>
              </div>
              <div className="story-users-second">
                <img src="images/kwanghyun/g.jpg" alt="user images" />
                <div className="story-users-second-info">
                  <span>ygh0627</span>
                  <span>45분 전</span>
                </div>
              </div>
              <div className="story-users-third">
                <img src="/images/kwanghyun/h.jpg" alt="user images" />
                <div className="story-users-third-info">
                  <span>kny0723</span>
                  <span>1분 전</span>
                </div>
              </div>
            </div>
          </div>
          <div className="follow-section">
            <div className="follow-header">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <div className="follow-section-first">
              <div className="follow-section-first-info">
                <img src="images/kwanghyun/i.jpg" alt="user images" />
                <div className="follow-section-info-text">
                  <span>Seunghun82</span>
                  <span>2명이 팔로우합니다.</span>
                </div>
              </div>
              <button className="follow-button">팔로우</button>
            </div>
            <div className="follow-section-second">
              <div className="follow-section-second-info">
                <img src="images/kwanghyun/a.jpg" alt="user images" />
                <div className="follow-section-info-text">
                  <span>Kwanghyun17</span>
                  <span>7명이 팔로우합니다.</span>
                </div>
              </div>
              <button className="follow-button">팔로우</button>
            </div>
            <div className="follow-section-third">
              <div className="follow-section-third-info">
                <img src="images/kwanghyun/b.jpg" alt="user images" />
                <div className="follow-section-info-text">
                  <span>Mikyung11</span>
                  <span>9명이 팔로우합니다.</span>
                </div>
              </div>
              <button className="follow-button">팔로우</button>
            </div>
          </div>
          <footer>
            <p>
              Instagram 정보·지원·홍보 센터·API·채용 정보·개인정보처리방침·약관·
              디렉터리· 프로필· 해시태그·언어
            </p>
            <span>© 2019 INSTAGRAM</span>
          </footer>
        </div>
      </main>
    </body>
  );
};

export default MainYu;
