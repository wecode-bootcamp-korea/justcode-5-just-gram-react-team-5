import React, { useState, useEffect } from "react";
// import Header from "./Components/header";
import Feeds from "./Components/Feeds";
import styles from "./Main.module.scss";

function MainSon() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/feedData.json")
      .then((res) => res.json())
      .then((data) => setFeeds(data));
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className={styles.Main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.header_line}>
              <div className={styles.header_box}>
                <div className={styles.logo_box} href="main">
                  <img alt="logo" src="images/sohee/instagram.png" />
                  <span>justgram</span>
                </div>

                <div className={styles.search_box}>
                  <img
                    className={styles.magnifying_glass}
                    src="images/sohee/search.png"
                    alt="magnifying_glass"
                  />
                  <input
                    className={styles.search}
                    type="text"
                    placeholder="검색"
                  />
                </div>

                <div className={styles.menu_box}>
                  <img alt="explore" src="images/sohee/explore.png" />
                  <img alt="heart" src="images/sohee/heart.png" />
                  <img alt="mypage" src="images/sohee/profile.png" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contents}>
            <div className={styles.feed_group}>
              {/* <Feeds feeds={feeds} /> */}
              <section className="main-feed">
                {feeds.map((data) => {
                  return <Feeds key={data.id} data={data} />;
                })}
              </section>
            </div>
            <div className={styles.floationg_section}>
              <div className={styles.profile_box}>
                <img alt="profile_img" src="images/sohee/profileme.png" />
                <div className={styles.profile_text} href="#">
                  <div className={styles.bold}>wecode_bootcamp</div>
                  <div className={styles.grey}>WeCode | 위코드</div>
                </div>
              </div>
              <div className={styles.story_box}>
                <div className={styles.story_header}>
                  <span>스토리</span>
                  <button>모두 보기</button>
                </div>
                <div className={styles.story_group}>
                  <div className={styles.story_a_box}>
                    <img alt="profile_a_img" src="images/sohee/circle.png" />
                    <div className={styles.profile_a_text}>
                      <div className={styles.bold}>_yun_s</div>
                      <div className={styles.grey}>16분 전</div>
                    </div>
                  </div>
                  <div className={styles.story_b_box}>
                    <img alt="profile_b_img" src="images/sohee/circle.png" />
                    <div className={styles.profile_b_text} href="#">
                      <div className={styles.bold}>drink_eat_drink</div>
                      <div className={styles.grey}>3시간 전</div>
                    </div>
                  </div>
                  <div className={styles.story_c_box}>
                    <img alt="profile_c_img" src="images/sohee/circle.png" />
                    <div className={styles.profile_c_text}>
                      <div className={styles.bold}>hyukyc</div>
                      <div className={styles.grey}>20시간 전</div>
                    </div>
                  </div>
                  <div className={styles.story_d_box}>
                    <img alt="profile_d_img" src="images/sohee/circle.png" />
                    <div className={styles.profile_d_text}>
                      <div className={styles.bold}>jminkeek</div>
                      <div className={styles.grey}>5시간 전</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommend_box}>
                <div className={styles.recommend_header}>
                  <span>회원님만을 위한 추천</span>
                  <button>모두 보기</button>
                </div>
                <div className={styles.recommend_group}>
                  <div className={styles.recommend_a_box}>
                    <img
                      alt="recommend_a_img"
                      src="images/sohee/profileme.png"
                    />
                    <div className={styles.recommend_a_text}>
                      <div className={styles.bold}>joaaaaaahye</div>
                      <div className={styles.grey}>_leqend_a님 외 2명이...</div>
                    </div>
                    <button>팔로우</button>
                  </div>
                  <div className={styles.recommend_b_box}>
                    <img
                      alt="recommend_b_img"
                      src="images/sohee/profileme.png"
                    />
                    <div className={styles.recommend_b_text}>
                      <div className={styles.bold}>rampart81</div>
                      <div className={styles.grey}>
                        ringo.in.seoul님 외 12...
                      </div>
                    </div>
                    <button>팔로우</button>
                  </div>
                  <div className={styles.recommend_c_box}>
                    <img
                      alt="recommend_c_img"
                      src="images/sohee/profileme.png"
                    />
                    <div className={styles.recommend_c_text}>
                      <div className={styles.bold}>shawnjjoo</div>
                      <div className={styles.grey}>jimmmylee1220님 외 1...</div>
                    </div>
                    <button>팔로우</button>
                  </div>
                </div>
              </div>
              <div className={styles.company_info_box}>
                <div className={styles.info}>
                  <span>Justgram 정보</span> ・ <span>지원</span> ・
                  <span>홍보센터</span> ・ <span>API</span> ・{" "}
                  <span>채용정보</span> ・<span>개인정보처리방침</span> ・{" "}
                  <span>약관</span> ・ <span>디렉터리</span> ・
                  <span>프로필</span> ・ <span>해시태그</span> ・{" "}
                  <span>언어</span>
                  <div className={styles.year}>@2022 Justgram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSon;
