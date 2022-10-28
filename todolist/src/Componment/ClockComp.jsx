// 함수형 컴포넌트 - 시간 출력 

import { useEffect, useMemo, useState } from "react";

// 
const ClockComp = () => {
    const [time, setTime] = useState(new Date())
    
    // 1초마다 반복하기 위한 setInterval 사용 - 생성될때 한번만 실행 
    useEffect(()=>{
        setInterval(()=>{setTime(new Date())},1000);
            },
        [])

    //useMemo 지정한 state 값이 바뀌지 않는다면 이전의 return 값을 그대로 쓸 수 있다. 
    const hours = useMemo(()=>{
        let stringHour = String(time.getHours())
        return stringHour.padStart(2,"0");
    }, [time]);

    const minutes = useMemo(()=>{
        let stringMinutes = String(time.getMinutes())
        return stringMinutes.padStart(2,"0");
    }, [time]);

    const seconds = useMemo (()=>{
        let stringSeconds  = String(time.getSeconds())
        return stringSeconds.padStart(2,"0");
    }, [time]);

    const month = useMemo (()=>{
        let months  = String(time.getMonth()+1)
        return months.padStart(2,"0");
    }, [time]);

    const day = useMemo (()=>{
        let days  = String(time.getDay())
        return days.padStart(2,"0");
    }, [time]);

    const year = useMemo (()=>{
        let years  = String(time.getFullYear())
        return years.padStart(4,"0");
    }, [time]);

    const today = new Date();
    const dayName = today.toLocaleString('ko-KR', { weekday: 'short' });


    return ( 
        <div id = "clock">

        <div class = "container">
            <div class = "c-item1">TODAY</div>
            <div class = "c-item2">{dayName} </div>            
            <div class = "c-item3">{month}월 {day}일 {year}년</div>
            <div class = "c-item4">{hours}시 {minutes}분 {seconds}초</div>
        </div>

        </div>
     );
}
 
export default ClockComp;