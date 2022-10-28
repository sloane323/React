// useContext를 사용 및 확인을 위해 여러 개의 컴포넌트를 작성
// useContext의 특성 : 리액트는 부모의 값을 props을 통해 계속해서 아래로 내려주는
// 형식으로 사용 
// useContext를 사용하면 중간에 props 전해주는 것 없이 자손 컴포넌트에 값을 전해 줄수 있다. 

import React, { Component, useContext } from "react";

//usecontext를 통해서 공유할 값을 객체형태로 작성 
const themes = {
    light : {
        foreground : "#F2E088",
        background : "#6C548C"
    },
    dark : {
        foreground : "#8C451C",
        background : "#F2CB05"
    },
    blue : {
        foreground : "#01261C",
        background : "#04C4D9"
    },

};

// useContext 를 통해서 값을 공유하기위해 createContext 사용 
const ThemeContext = React.createContext(null);

const ContextCompAll = () => {
    return ( 
        <div>
            {/* createContext로 만든 컴포넌트로 값을 사용하는 컴포넌트를 감싼다.  */}
            <ThemeContext.Provider value={themes.light}>
            <Toolbar />
            </ThemeContext.Provider>
        </div>
     );
}
 
export default ContextCompAll;

// ComtextCompAll 에서 사용할 컴포넌트 
// 현재 컨포넌트에서만 사용 할 수 있다. 

// 함수형 컴포넌트 툴바 
// ContextCompAll  을 부모로 삼고, 2개의 자식을 갖는 컴포넌트 
const Toolbar = () => {
    return ( 
        <div>
            <ThemedButtonFunc />
            <ThemedButtonClass />
            <Gtptag />
        </div>
     );
}
 
// Toolbar 컴포넌트 안에 들어갈 컴포넌트  - useContext 를 통해서 
// 함수형 컴포넌트

const ThemedButtonFunc = () => {
            // useContext 를 통해서 조상의 값에 접근을 할 수있다. 
            // createContext로 만든 컴포넌트를 가져와서 값을 사용 
            const theme = useContext(ThemeContext);
    return ( 
        <div>
            <button style={{backgroundColor: theme.background, 
            color:theme.foreground}}> 직접넣어준 컬러값 입니다.</button>
        </div>
     );
}
 
// 클래스형컴포넌트로 context에 접근
class ThemedButtonClass extends Component {
    // 클래스로 값을 가져올때 static을 통해서 contextType 으로 가져온다
    static contextType = ThemeContext;
    render() { 
        return (
            <div>
                <button style={{ 
                    // contextType으로 접근하지 않고, context로 접근
                    backgroundColor: this.context.background,
                    color : this.context.foreground
                }}> 
                    클래스형 컴포넌트의 버튼입니다
                </button>
            </div>
        );
    }
}



const Gtptag = () => {
    // useContext 를 통해서 조상의 값에 접근을 할 수있다. 
    // createContext로 만든 컴포넌트를 가져와서 값을 사용 
    const theme = useContext(ThemeContext);
return ( 
<div>
    <p style={{backgroundColor: theme.background, 
    color:theme.foreground}}> 
    '오늘'이란 너무 평범한 날인 동시에 <br></br>
    과거와 미래를 잇는 가장 소중한 시간이다</p>
</div>
);
}
