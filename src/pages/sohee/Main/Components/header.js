import React from "react";

function Header() {
  return (
    <header className={styles.header}>
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
            <input className={styles.search} type="text" placeholder="검색" />
          </div>

          <div className={styles.menu_box}>
            <img alt="explore" src="images/sohee/explore.png" />
            <img alt="heart" src="images/sohee/heart.png" />
            <img alt="mypage" src="images/sohee/profile.png" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
