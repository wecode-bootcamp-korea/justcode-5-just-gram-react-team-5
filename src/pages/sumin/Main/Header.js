import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
  );
};

export default Header;
