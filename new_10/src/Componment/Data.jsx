// Context 대한 내용은 공식 홈페이지 참조
// Context를 사용해서, value값도 현재 파일에서 지정하고 내보내기

import { useState } from "react";
import { createContext } from "react";

// 내보낸 DataContext에 value을 넣어줘서 사용
const DataContext = createContext();

// 미리 Provider를 작성하여 value값을 가진 컴포넌트를 내보냄.
const DataProvider = ({children}) => {
    
    // 댓글정보
    const [allComments, setAllComments] = useState([
        {
            commentId : 1,
            name : "green",
            text : "너무 좋아용"
        },
        {
            commentId : 2,
            name : "blue",
            text : "너무좋아요"
        },
        
    ])
    // useState를 사용하지 않은 변수는 리액트 업데이트를 일으키지 않는다. 
    let [commentCount, setCommentCount] = useState(3); 

    // 사용할 value 값을 state와 action 분리해서 넣어둠
    const value = {
        state : {user, productList, allComments, commentCount},
        action : {setUser, setProductList, setAllComments,setCommentCount}
    
    };
    // DataProvider를 사용할때 DataContext.Provider를 사용할수 있도록함
    // 이때 children은 Provider을 쓸때 데이터를 공용을 쓰는 컴포넌트들
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

// consumer 작성
// DataContext의 값을 가져와서 DataConsumer으로 사용
const { Consumer : DataConsumer } = DataContext;

// 컴포넌트로 사용하기위해 export > .Provider 대신 사용할 컴포넌트 : App 전체를 감쌈
export { DataConsumer, DataProvider}
// 값을 사용하기위해 가져오는 컨텍스트 export > 각컴포넌트에서 useContext로 가져올 것
export default DataContext;