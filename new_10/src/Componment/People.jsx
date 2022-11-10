import { useState } from "react";
import { Link } from "react-router-dom";
import "../Page/Css/People.css"
import BookModal from "./Bookmodal";

const People = (props) => {

    const [name, setName] = useState(null);

    const onChange = (e) => {
        setName(e.target.value);
      };

      const [humNum, sethumNum] = useState();

      const onClick = (e) => {
          e.preventDefault()
        sethumNum(e.currentTarget.id)
      };
  
      const [babyNum, setbabyNum] = useState();
  
      const onClick2 = (e) => {
          e.preventDefault()
          setbabyNum(e.currentTarget.id)
      };

      const [timecheck, settimecheck] = useState();
      const onClick3 = (e) => {
        console.log(e.currentTarget);
        settimecheck(e.currentTarget.value);
      };
    
      const [shotcheck, settshotcheck] = useState();
      const onClicks = (e) => {
        console.log(e.currentTarget);
        settshotcheck(e.currentTarget.value);
      };
    
      const week = ["일", "월", "화", "수", "목", "금", "토"];
    
      function dates() {
        let array2 = [];
        for (let i = 0; i < 30; i++) {
          const today = new Date();
          today.setDate(today.getDate() + i);
          const time = {
            year: today.getFullYear(), //현재 년도
            month: today.getMonth() + 1, // 현재 월
            date: today.getDate(), // 현제 날짜
          };
          const dayOfWeek = week[today.getDay()];
          const clickdate = `${time.year} / ${time.month} / ${time.date} / ${dayOfWeek} `;
    
          array2.push(
            <div id="datebox" style={{ display: "inline-block" }}>
              <button onClick={onClick3} value={clickdate} id="timecheck" >
                <p> {dayOfWeek} </p>
                <p>
                  {" "}
                  <br></br>
                  {time.year}
                  <br></br>
                  {time.month}월{time.date}일<br></br>
                </p>
              </button>
    
            </div>
          );
        }
        return array2;
      }

    return ( 
        <div> 
            

            <div>
            <label for="humname">보호자 이름</label>
            <input onChange={onChange} value={name}  id="name"
              name="name"
              placeholder="이름을 입력해주세요" required /> <br></br>
            </div> 
            <div>

     <div required > <p> 몇 명 참가하시나요? (사람) </p> 
     <button onClick={onClick} value={humNum} id="1"> 1 </button>
     <button onClick={onClick} value={humNum} id="2"> 2 </button>            
     <button onClick={onClick} value={humNum} id="3"> 3 </button>            
     <button onClick={onClick} value={humNum} id="4"> 4 </button>    
     <button onClick={onClick} value={humNum} id="5"> 5 </button>
     <br></br>
     {humNum ==='5' ? <div>
         <p> 같이 올 강아지는 몇마리 인가요?  </p>
      <button  onClick={onClick2} value={babyNum} id="1"> 1 </button> 
      <button  onClick={onClick2} value={babyNum} id="2"> 2 </button> 
      <button  onClick={onClick2} value={babyNum} id="3"> 3 </button> 
      <button  onClick={onClick2} value={babyNum} id="4"> 4 </button> 
      <button  onClick={onClick2} value={babyNum} id="5"> 5 </button> </div>

     : <p>  {humNum ==='4' ? <div>
                        <p> 같이 올 강아지는 몇마리 인가요?  </p>
     <button onClick={onClick2} value={babyNum} id="1" > 1 </button> 
     <button  onClick={onClick2} value={babyNum} id="2"> 2 </button> 
     <button onClick={onClick2} value={babyNum} id="3"> 3 </button> 
     <button onClick={onClick2} value={babyNum} id="4"> 4 </button>  </div>

    : <p>  {humNum ==='3' ? <div>
                      <p> 같이 올 강아지는 몇마리 인가요?  </p>
    <button  onClick={onClick2} value={babyNum} id="1"> 1 </button> 
    <button  onClick={onClick2} value={babyNum} id="2"> 2 </button> 
    <button  onClick={onClick2} value={babyNum} id="3"> 3 </button>  </div>

   : <p>  {humNum ==='2' ? <div>
                      <p> 같이 올 강아지는 몇마리 인가요?  </p>
 <button  onClick={onClick2} value={babyNum} id="1"> 1 </button> 
 <button  onClick={onClick2} value={babyNum} id="2">2 </button>   </div>

  : <p>  {humNum ==='1' ? <div>
                      <p> 같이 올 강아지는 몇마리 인가요?  </p>
 <button  onClick={onClick2} value={babyNum} id="1"> 1 </button>   </div>

 : <p> </p> }</p> }</p> }</p> } </p> }</div>

     <div>
       <div className='fbig'> 
        <div className='title-date' ><br></br> 
        <div id="datebox2" required> {dates()} </div>    </div> </div><br></br> 
  
        <button onClick={onClicks} value={"10:00- 12:00"} id="shotcheck"> <p> 10:00- 12:00 </p> </button>
        <button onClick={onClicks} value={"12:00- 14:00"} id="shotcheck"> <p> 12:00- 14:00 </p> </button>
  
      </div>

            <BookModal name={name} humNum ={humNum} babyNum={babyNum} timecheck={timecheck} shotcheck={shotcheck} required />

 <br></br>
 

</div>




 </div> 
     );
}
 
export default People;