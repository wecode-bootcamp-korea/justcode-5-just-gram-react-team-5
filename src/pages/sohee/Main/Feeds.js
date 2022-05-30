import React, { useState } from 'react';
import Comments from './Comments';
import './Feeds.scss';

// function Feeds ({props}) {
//     const { feeds } = props;


// function Feeds({ feeds }) {

//   const [comment, setComment] = useState('');
//   const getComment =(event) => setComment(event.target.value);

//   const [commentArray, setCommentArray] = useState([]);
//   const onSubmit = event => {
//     event.preventDefault();
//     if (comment === '') {
//       return;
//     }
//     setCommentArray(commentValueList => [comment, ...commentValueList]);
//     setComment('');
//   }

function Feeds({ data }) {
  const [comment, setComment] = useState("");
  const [space, setSpace] = useState([]);

  function inputText(event) {
    setComment(event.target.value);
  }

  const enterBtn = (event) => {
    if (event.key === "Enter") {
      setSpace((prevComment) => {
        return [...prevComment, comment];
      });
    }
    setComment("");
  };

  return (
    // <div className="feeds" key={data.id}  >
    //   {feeds.map(f => 
      
    <div className="feed_container" key={data.id} >
      <div className="feed_header">
        <div> 
          <img alt="profile_images" src={data.user.image} /> 
          <span className="feed_profile_name">{data.user.name}</span> 
        </div>
          <button><img alt="triple_dot" src="images/sohee/more.png"/></button>
      </div>
      <div className="feed_image">
        <img alt="feed_images" src={data.feedImage}/>
      </div>
      <div className="feed_contents">
        <div className="button_group">
          <span className="button_left_group">
            <button >
              {data.isLiked ===true ? <img alt="heart" src="images/sohee/heart.png"/> : null }
            </button>
            <button><img alt="message" src="images/sohee/comment.png"/></button>
            <button><img alt="send" src="images/sohee/send.png"/></button>
          </span>
          <span className="button_right_group">
            <button><img alt="save" src="images/sohee/save.png"/></button>
          </span>
        </div>
        <div className="like_sentence">
          <div><img alt="like_profile_images" src={data.likeUser.image}/></div>
          <span className="bold">aineworld</span>님 <span className="bold">외 {data.likeUser.likes}명</span>이 좋아합니다.
        </div>
        <div className="comment_group">
          <div className="feed_text">
            <span className="feed_user_name">{data.user.name}</span> <span>{data.content}</span>
            <span className="feed_veiw_more">...더 보기</span>
          </div>
          <div className="comment_text">
            {/* {f.commentList.map(comment => <Comments key={comment.id} comment={comment}/>)} */}
            {data.commentList.map((txt) => {
              return (
                <div className="basic_comment">
                <p key={txt.id}>
                  {<span className="bold">{txt.name}</span>}
                  {txt.content}
                </p>
                </div>
              );
            })}
            {space.map((comment, data) => {
              return <Comments key={data.id} comment={comment}/>;
            })}
          </div>
          <div className="comment_date">30분 전</div>
        </div>
        {/* <div className="write_comment">
          <input 
          className="comment_input" 
          type="text" 
          placeholder="댓글달기..."
          onChange={getComment}
          />
          <button className="write_comment_button">게시</button>
        </div> */}

        <div className="write_comment">
          <input
            type="text"
            className="comment_input"
            placeholder="댓글 달기..."
            value={comment}
            onChange={inputText}
            onKeyPress={enterBtn}
          />
            <button 
              className="write_comment_button"
              onClick={() => {
                setSpace((prevComment) => {
                  return [...prevComment, comment];
                });
                setComment("");
              }}
            >
              게시
            </button>
        </div>

      </div>
    </div>
  );
}
//}

export default Feeds;