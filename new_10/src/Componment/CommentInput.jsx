import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa'; 
import "../Page/Css/CommentInput.css";



const ARRAY = [0, 1, 2, 3, 4];

function CommentInput() {

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const today = new Date();
  today.setDate(today.getDate() );
  const time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
  };
  const dayOfWeek = week[today.getDay()];
  const clickdate = `${time.year} / ${time.month} / ${time.date} / ${dayOfWeek} `;


  const [note, setNote] = useState('');
  const [username, setusername] = useState('');
  const [lists, setLists] = useState([]);
  const [nextId, setNextId] = useState(0);

  const inputusername = useRef(null);
  const inputnote = useRef(null);


/* input값에 문자 입력할 때 마다 실행 되는 이벤트 함수*/
const onChange = (e) => {
  setNote(e.target.value);
};
const onChange2 = (e) => {
  setusername(e.target.value);
};

const submit = (e) => {
  e.preventDefault();  //새로고침 방지
  const about_lists = lists.concat({ //원래 있는 리스트에 붙여주기
    id: nextId,
    name: username,
    text: note,
    star: sendReview(),
    date : today
  });
  setNextId(nextId + 1); //id값 +1

  /*방금 붙여준 리스트까지 포함 된 리스트로 세팅하기*/
  setLists(about_lists); 
  setNote('');
  setusername(''); //input 태그안에 있는 문자 지워주기
};

/* 리스트들 화면에 띄우기 위해 map으로 반복 요소 불러오기 */

    
console.log(note);
console.log(username);




const [clicked, setClicked] = useState([false, false, false, false, false]);

const handleStarClick = index => {
  let clickStates = [...clicked];
  for (let i = 0; i < 5; i++) {
    clickStates[i] = i <= index ? true : false;
  }
  setClicked(clickStates);
};

useEffect(() => {
  sendReview();
}, [clicked]); //컨디마 컨디업

const sendReview = () => {
  let score = clicked.filter(Boolean).length;
   let reviewnote = ""; 
  switch (score) {
      case 1 : 
      return reviewnote = "1점 매우 나빠요 "
      case 2 : 
      return reviewnote = "2점 나빠요"
      case 3 : 
      return reviewnote = "3점 그냥그래요"
      case 4 : 
      return reviewnote = "4점 좋아요"
      case 5 : 
      return reviewnote = "5점 매우좋아요"
  }
};


const input_list = lists.map((list) => (
  <li key={list.id} >
  <div  id="wrtinb">{list.name} :  {list.text}  </div>  <div id="wrtin"> 작성일: {clickdate} <br></br>  </div> 
  <div> {list.star} </div>
  <div>  <button  onClick={() => removeList(list.id)} > X </button> </div>
  </li>
  
));

//삭제 이벤트 함수
const removeList = (id) => {
  const about_lists = lists.filter((list) => list.id !== id);
  setLists(about_lists);
};


  return (<div>

<form onSubmit={submit}>
    <label>이름</label>
    <input name = "username"  type="text"  placeholder="이름을 입력해주세요"           value={username}
         classname="textbosss" onChange={onChange2} ref={inputusername} id="namebox" 
         style={{ width: "50%"}} required />
<br></br>

<div className='Wrap'>

      <div className='Stars'>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}    <div className='RatingText'> <p> {sendReview() }</p>  </div>
      </div>
    </div>


<label>리뷰</label>

         <input name="list"   type="text"  placeholder="내용을 작성해주세요."
          value={note}  onChange={onChange}  ref={inputnote} id="textbox"
           className='name_box' style={{ height: "100px"}} required />
    <br></br>
        <button type="submit">확인</button>
      </form>



      <hr></hr> <div className='inputlistun'>
      <ul>{input_list}</ul> </div>


</div>
  );

  }

export default CommentInput;

