import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button type="button" className="header-btn" aria-label="새 게시글 작성">
          <i className="fa-brands fa-instagram fa-2x"></i>
        </button>
        <button type="button" className="logo-btn">
          justgram
        </button>
      </div>
      <div className="header-center">
        <i className="search-icon fa-solid fa-magnifying-glass fa-m"></i>
        <input className="search-input" type="text" placeholder="검색" />
      </div>
      <div>
        <button type="button" className="header-btn" aria-label="사람 찾기">
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="" />
        </button>
        <button type="button" className="header-btn" aria-label="활동 피드">
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="" />
        </button>
        <button type="button" className="header-btn" aria-label="프로필">
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
