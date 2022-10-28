//부모 컴포넌트가 되어서 값을 전달하는 context를 통해서 value 전달 
// value값에 state 와 dispatch를 전달 (객체형태) - useReducer 사용 

import { useReducer } from "react";
//NumContext를 통해서, num : 0 과 숫자 값이 2씩 증가 하는 함수를 만들어서 
// ContextChildrenComp4를 만들어 화면에 출력하고 증가하는 버튼을 사용하세요 
import { CountContext, NumContext } from "./ComtextParentComp2";
import ContextChildrenComp3 from "./ContextChildrenComp3";
import ContextChildrenComp4 from "./ContextChildrenComp4";
import { useState } from "react";

function reducer (state, action) {
switch (action.type){
    case "increment" :
        return {count : state.count+1};
    case "decrement" :
        return {count : state.count-1};
}
}

const ContextParentComp1 = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0});
    const [num, setNum] = useState(1)
    return ( 
        <div>
            <CountContext.Provider value={ {state:state, dispatch: dispatch} }>
                <ContextChildrenComp3 />

            </CountContext.Provider>

            <NumContext.Provider value ={{ num : num, setNum : setNum}}>
            <ContextChildrenComp4 />
            </NumContext.Provider>
        
        </div>
     );
}
 
export default ContextParentComp1;