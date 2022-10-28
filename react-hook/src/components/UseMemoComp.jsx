//함수형 컴포넌트
import { useMemo, useState } from "react";


const UseMemoComp = () => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);

    // useMemo 함수의 return 된 값을 계속 사용한다.
    //[] 두번째 인자 : 두번째 들어온 이자값이 바뀌었을때,함수를 실행 
    // state, props 값 

    // Return 값이 있는 함수 : return 의 {} 에서 내용을 출력 할 수있다. 
    // 함수는 update 할때마다 랜더하여 사용한다. 
    const doubleCount = () => {
        console.log("doubleCount")
        return count*2
    };

    const memoNum =useMemo (() => {
        console.log("memoNum");
        return num*3
    },[num])

    // useMemo를 통해서, 작성한 함수가 특정값에만 실행되어  return 된다. 
    // 그 값이 아닐 경우 함수는 실행되지 않는다 (이미 return 값을 그대로 사용 )
    const memoCount = useMemo( () => doubleCount() , [count])

    return (
        <div>
            {/* {} 를 통해서 함수의 결과값을 출력 할 수 있다.  : 함수 () */}
            {/* useMemo를 통해서 사용해 줄때 , () 없이 적어준다  */}

            <h1> { memoCount } /  {memoNum}</h1>
            {/*useMemo를 통해서 MemoNum을 만드세요 : 3배로  */}
            <h2>{count} / {num}</h2>
       
            <button onClick={()=>{setCount(count+1)}}>count+1</button>
            <button onClick={()=>{setNum(num+1)}}>setNum+1</button>
            <button onClick={()=>{setNum(num*3)}}>num*3</button>
        </div>
      );
}
 
export default UseMemoComp;