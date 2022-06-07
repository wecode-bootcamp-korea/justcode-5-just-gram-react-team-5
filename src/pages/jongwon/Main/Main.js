/* eslint-disable jsx-a11y/alt-text */
import "./Main.scss";
import React, { useState, useEffect } from "react";
import Feeds from "./Feeds";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
library.add(faHeart, faComment, faShareFromSquare, faBookmark, faTrashCan);

function MainPark() {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => setFeeds(res));
  }, []);

  const [commentlist, setCommentlist] = useState([
    { name: "chubbychubby", content: "귀여워잉" },
  ]);
  const [likeBtn, setLikeBtn] = useState(false);

  const likeBtnactivation = () => {
    setLikeBtn(!likeBtn);
  };
  const [deleteBtn, setdeleteBtn] = useState(false);
  const deleteComment = () => {
    setdeleteBtn(true);
    deleteCommentFeed();
  };
  const deleteCommentFeed = () => {
    if (deleteBtn === true) {
      return null;
    }
  };

  const [inputText, setInputText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputText = (event) => {
    const { value } = event.target;
    setInputText(value);
  };
  const commentValidation = () => {
    if (!(inputText === "")) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const uploadComment = () => {
    setCommentlist([{ ...commentlist, name: "2seul2", content: inputText }]);
    setInputText("");
    setIsValid(false);
  };
  return (
    <div className="Main">
      <nav>
        <div className="navleft">
          <img
            className="justalogo"
            src="https://marjanvanaubel.com/wp-content/uploads/2019/11/instagram-logo.png"
          />
          <h1 className="title"> webstagram </h1>
        </div>
        <div>
          <input className="searchbar" type="text" placeholder="검색" />
        </div>
        <div className="navright">
          <img
            className="finder"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="heart"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="mypage"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </nav>
      <main className="mainpage">
        <div className="feeds">
          <article>
            <header className="feedtop">
              <div className="profile">
                <img
                  className="doraemon"
                  src="https://bunny.jjalbot.com/2018/12/GwXW0igIB/zzal.jpg"
                />
                <span className="username"> doraemon333 </span>
              </div>
              <span>...</span>
            </header>
            <img
              className="doraemonfeed"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MTJfMTM1%2FMDAxNjMxNDU1NTk1MDQ1.IWhw0jlt4s89a7PzkbLLBUnsi-haHxF1BkUUhj9KNgUg.UqVEuc_SLksMIdffsiDGmUoQVgVH71REPDt-7LPrymsg.JPEG.ksobrain48%2Foutput_326140650.jpg&type=sc960_832"
            />
            <div className="feedbottom">
              <div className="feedbottom-iconwrapper">
                <div className="feedbottom-icons">
                  <FontAwesomeIcon
                    icon="fa-regular fa-heart"
                    className="likeBtn"
                    onClick={likeBtnactivation}
                    style={{ color: likeBtn ? "red" : "gray" }}
                  />
                  <FontAwesomeIcon icon="fa-regular fa-comment" />
                  <FontAwesomeIcon icon="fa-regular fa-share-from-square" />
                </div>
                <FontAwesomeIcon icon="fa-regular fa-bookmark" />
              </div>
              <div className="profile">
                <img src="https://ilovegangwon.com/data/file/humor/16081758443386.jpg" />
                <div className="howmanylikes">
                  <span className="username"> best9</span> 님
                  <span className="username"> 외 10명</span> 이 좋아합니다
                </div>
              </div>
              <div className="feedbottom-bottom">
                <div className="caption">
                  <span className="username">doraemon333 </span> 사고친 진구를
                  보는 나..
                </div>
                <div className="comment-wrapper">
                  <div className="commentlist">
                    <div className="comment-content-wrapper">
                      <div className="username-content">
                        <span className="username">real9 </span> 사랑하는거
                        알지?
                      </div>
                      <div className="liketrashbtn">
                        <FontAwesomeIcon
                          icon="fa-regular fa-heart"
                          className="likeBtn"
                          onClick={likeBtnactivation}
                          style={{ color: likeBtn ? "red" : "gray" }}
                        />
                        <FontAwesomeIcon
                          icon="fa-regular fa-trash-can"
                          onClick={deleteComment}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description">1시간전</div>
              </div>
            </div>
            <div className="makecomment">
              <input
                className="makecomment-box"
                type="text"
                placeholder="댓글달기..."
                onChange={handleInputText}
                onKeyUp={commentValidation}
                value={inputText}
              />
              <input
                className="publish-button"
                type="button"
                value="게시"
                disabled={isValid ? false : true}
                style={{ opacity: isValid ? "1" : "0.2" }}
                onClick={uploadComment}
              />
            </div>
          </article>
          {feeds.map((feed) => {
            return (
              <Feeds
                key={feed.id}
                userImage={feed.user.image}
                userName={feed.user.name}
                feedImage={feed.feedImage}
                likes={feed.likeUser.likes}
                whoLiked={feed.likeUser.name}
                likedImage={feed.likeUser.Image}
                content={feed.content}
                commentList={feed.commentList}
              />
            );
          })}
        </div>
        <div className="wrapper">
          <div className="first">
            <div className="profile">
              <img
                className="doraemon"
                src="https://bunny.jjalbot.com/2018/12/GwXW0igIB/zzal.jpg"
              />
              <div className="column">
                <span className="username"> doraemon333 </span>
                <span className="description"> 진구네 </span>
              </div>
            </div>
          </div>
          <div className="story">
            <div className="story-top">
              <span className="description">스토리</span>
              <span>모두보기</span>
            </div>
            <div className="profile">
              <img
                className="doraemon"
                src="https://bunny.jjalbot.com/2018/12/GwXW0igIB/zzal.jpg"
              />
              <div className="column">
                <span className="username"> doraemon333 </span>
                <span className="description"> 진구네 </span>
              </div>
            </div>
            <div className="profile">
              <img
                className="doraemon"
                src="https://bunny.jjalbot.com/2018/12/GwXW0igIB/zzal.jpg"
              />
              <div className="column">
                <span className="username"> doraemon333 </span>
                <span className="description"> 진구네 </span>
              </div>
            </div>
            <div className="profile">
              <img
                className="doraemon"
                src="https://bunny.jjalbot.com/2018/12/GwXW0igIB/zzal.jpg"
              />
              <div className="column">
                <span className="username"> doraemon333 </span>
                <span className="description"> 진구네 </span>
              </div>
            </div>
          </div>
          <div className="recommendation">
            <div className="recommendation-top">
              <span className="description">회원님을 위한 추천</span>
              <span>모두보기</span>
            </div>
            <div className="profile">
              <div className="recommendation-profile">
                <img
                  className="doraemon"
                  src="https://bunny.jjalbot.com/2018/12/GwXW0igIB/zzal.jpg"
                />
                <div className="column">
                  <span className="username"> doraemon333 </span>
                  <span className="description"> 진구네 </span>
                </div>
              </div>
              <input type="button" value="팔로우" />
            </div>
            <div className="profile">
              <div className="recommendation-profile">
                <img
                  className="doraemon"
                  src="https://bunny.jjalbot.com/2018/12/GwXW0igIB/zzal.jpg"
                />
                <div className="column">
                  <span className="username"> doraemon333 </span>
                  <span className="description"> 진구네 </span>
                </div>
              </div>
              <input type="button" value="팔로우" />
            </div>
            <div className="profile">
              <div className="recommendation-profile">
                <img
                  className="doraemon"
                  src="https://bunny.jjalbot.com/2018/12/GwXW0igIB/zzal.jpg"
                />
                <div className="column">
                  <span className="username"> doraemon333 </span>
                  <span className="description"> 진구네 </span>
                </div>
              </div>
              <input type="button" value="팔로우" />
            </div>
          </div>
          <div className="right-bottom description">
            {" "}
            Webstagram 정보 . 지원 . 홍보센터 . api . 채용정보 .
            개인정보처리방침 . 약관 . 디렉터리 . 프로필 . 해시태그 . 언어{" "}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPark;
