//함수형 컴포넌트 
import { useReducer } from "react";
import ReducerCountComp from "./ReducerCountComp";
import Memocomp from "./Memocomp";

function reducer (state, action) {
    //state안에 여러개의 값이 있을때, 이전값을 유지해주어야한다.
    // 이전값을 유지하기 위한 ...state를 추가 
    switch(action.type) {
        case 'increment' :
            return {...state, count : state.count+1};
        case 'decrement' : 
            return {...state, count : state.count-1};
        case 'zero' : 
            return {...state, count : 0};
        case 'changeInput' : 
            return {...state, input : action.payload}
    }
}

const ReducerComp = () => {

    const [state, dispatch] = useReducer(reducer, {count : 0})
    
    return (
        <div>
<h1>{state.count}</h1>
<button onClick={()=>{dispatch({type:'increment'})}}> +1 </button>
<button onClick={()=>{dispatch({type:'decrement'})}}> -1 </button>
{/* 아레에 버튼에 들어갈 action.type에 관한 내용을 reducer에 추가  */}
<button onClick={()=>{dispatch({type:'zero'})}}>0</button>

{/* 자식 컴포넌트에 props 값으로 state와 dispatch를 전달 할 수있다.  */}
<ReducerCountComp state={state} dispatch={dispatch} />


{/* 자식컴포넌트에 memocomp를 하나 만들고 state 에 input을 추가하고   */}
{/* reducer 를 작성하여 memocomp에서 작성한 글이 redcerComp에서 수정되어 나올수 있게 하세요    */}
<h1>{state.input}</h1>
<h2> reducerComp </h2>
{/* 먼저 reducerComp에서 실행해보기, E 객체의 값을 어떻게 가져갈지 생각하기 */}
<input type="text" onChange={(e)=>{
    //setState(e.target.value) >> dispatch에서 쓸수 있도록 
    dispatch({type:'changeInput', payload : e.target.value})
}} />

<Memocomp dispatch={dispatch}/>
        </div>
    );
}

export default ReducerComp;