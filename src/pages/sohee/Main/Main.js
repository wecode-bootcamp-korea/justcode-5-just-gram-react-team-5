import React from 'react'
import "./Main.scss";

function MainSon () {
    return(
        <div className="Main">
         

         <div className="container">

            <div className="header">

                <div className="header_line">
                <div className="header_box">
                    <div className="logo_box" href="main">
                        <img alt="logo" src="images/sohee/instagram.png" />
                        <span>justgram</span>
                    </div>
                
                    <div className="search_box">
                        <img className="magnifying_glass" src="images/sohee/search.png" alt="magnifying_glass" />
                        <input className="search" type="text" placeholder="검색" />
                    </div>

                    <div className="menu_box">
                        <img alt="explore" src="images/sohee/explore.png"/>
                        <img alt="heart" src="images/sohee/heart.png"/>
                        <img alt="mypage" src="images/sohee/profile.png"/>
                    </div>
                </div>
                </div>

            <div className="contents">
                <div className="feed_group">
                    <div className="feed_container">
                        <div className="feed_header">
                            <div> <img alt="profile_images" src="images/sohee/profileme.png" />cannon_mj</div>
                            <button><img alt="triple_dot" src="images/sohee/more.png"/></button>
                        </div>
                        <div className="feed_images">
                            <img alt="feed_images" src="images/sohee/intheocean.jpg"/>
                        </div>
                        <div className="feed_contents">
                            <div className="button_group">
                                <span className="button_left_group">
                                    <button><img alt="heart" src="images/sohee/heart.png"/></button>
                                    <button><img alt="message" src="images/sohee/comment.png"/></button>
                                    <button><img alt="send" src="images/sohee/send.png"/></button>
                                </span>
                                <span className="button_right_group">
                                    <button><img alt="save" src="images/sohee/save.png"/></button>
                                </span>
                            </div>
                            <div className="like_sentence">
                                <div><img alt="like_profile_images" src="images/sohee/profileme.png"/></div>
                                <span className="bold">aineworld</span>님 <span className="bold">외 10명</span>이 좋아합니다.
                            </div>
                            <div className="comment_group"></div>
                            <div className="write_comment">
                                <input className="comment_input" type="text" placeholder="댓글달기..."/>
                                <button className="write_comment_button">게시</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="floationg_section">
                    <div className="profile_box">
                        <img alt="profile_img"src="images/sohee/profileme.png"/>
                        <div className="profile_text" href="#">
                            <div className="bold">wecode_bootcamp</div>
                            <div className="grey">WeCode | 위코드</div>
                        </div>
                    </div>
                    <div className="story_box">
                        <div className="story_header">
                            <span>스토리</span>
                            <button>모두 보기</button>
                        </div>
                        <div className="story_group">
                            <div className="story_a_box">
                                <img alt="profile_a_img"src="images/sohee/circle.png"/>
                                <div className="profile_a_text">
                                    <div className="bold">_yun_s</div>
                                    <div className="grey">16분 전</div>
                                </div>
                            </div>
                            <div className="story_b_box">
                                <img alt="profile_b_img"src="images/sohee/circle.png"/>
                                <div className="profile_b_text" href="#">
                                    <div className="bold">drink_eat_drink</div>
                                    <div className="grey">3시간 전</div>
                                </div>
                            </div>
                            <div className="story_c_box">
                                <img alt="profile_c_img"src="images/sohee/circle.png"/>
                                <div className="profile_c_text">
                                    <div className="bold">hyukyc</div>
                                    <div className="grey">20시간 전</div>
                                </div>
                            </div>
                            <div className="story_d_box">
                                <img alt="profile_d_img"src="images/sohee/circle.png"/>
                                <div className="profile_d_text">
                                    <div className="bold">jminkeek</div>
                                    <div className="grey">5시간 전</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recommend_box">
                        <div className="recommend_header">
                            <span>회원님만을 위한 추천</span>
                            <button>모두 보기</button>
                        </div>    
                            <div className="recommend_group">
                                <div className="recommend_a_box">
                                    <img alt="recommend_a_img"src="images/sohee/profileme.png"/>
                                    <div className="recommend_a_text">
                                        <div className="bold">joaaaaaahye</div>
                                        <div className="grey">_leqend_a님 외 2명이...</div>
                                    </div>
                                    <button>팔로우</button>
                                </div>
                                <div className="recommend_b_box">
                                    <img alt="recommend_b_img"src="images/sohee/profileme.png"/>
                                    <div className="recommend_b_text">
                                        <div className="bold">rampart81</div>
                                        <div className="grey">ringo.in.seoul님 외 12...</div>
                                    </div>
                                    <button>팔로우</button>
                                </div>
                                <div className="recommend_c_box">
                                    <img alt="recommend_c_img"src="images/sohee/profileme.png"/>
                                    <div className="recommend_c_text" >
                                        <div className="bold">shawnjjoo</div>
                                        <div className="grey">jimmmylee1220님 외 1...</div>
                                    </div>
                                    <button>팔로우</button>
                                </div>
                            </div>
                    </div>
                    <div className="company_info_box">
                        <div className="info"><span>Justgram 정보</span> ・ <span>지원</span> ・ 
                            <span>홍보센터</span> ・ <span>API</span> ・ <span>채용정보</span> ・ 
                            <span>개인정보처리방침</span> ・ <span>약관</span> ・ <span>디렉터리</span> ・ 
                            <span>프로필</span> ・ <span>해시태그</span> ・ <span>언어</span>
                            <div className="year">@2022 Justgram</div>
                         </div>
                    </div>
                </div>
        </div>
        </div>

        </div>
        </div>
    );
}

export default MainSon;