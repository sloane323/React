import { useState } from "react";
import { useCallback } from "react";

//함수형 컴포넌트
const CallBackComp = () => {
    const [name,setName] = useState("");
    const [count,setCount] = useState(1);
    //useCallback : 함수를 기록해서 계속쓰는 hook 
    // 두번째 인자  [] : 두번째인자의 값이 바뀔때만, 함수를 새로 생성해서 사용 

    // 익명함수의 특징 : 한번만 쓰고 사라진다 
    // function(){}, const 함수이름 = () => {} 
    // : 함수 이름을 통해 여러번 꺼내 쓸 수 있다. 

const changeName = useCallback(()=>{setName("홀홀리")}, [] )
const onchange = useCallback((e)=>{
    console.log(count)
    setName(e.target.value)
    setCount(count+1)
    },[count])

    return ( 
        <div>
         <input type="text" onChange={onchange} />
         <button onClick = {changeName} > 이름: {name}</button>
         <br></br><br></br><br></br>
        </div>
     );
}
 
export default CallBackComp;