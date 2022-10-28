const Memocomp = (props) => {
    const {dispatch} = props
    return ( 
        <div>
            <h1> MemoComp </h1>
           <input type="text" onChange={(e)=>{
    //setState(e.target.value) >> dispatch에서 쓸수 있도록 
             dispatch({type:'changeInput', 
             payload : e.target.value})
            }} /> 

        </div>
      );


}
 
export default Memocomp;