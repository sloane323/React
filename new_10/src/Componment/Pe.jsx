import { useState } from "react";

const Pe = () => {
    
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



    return ( 
<div>
     

            <div> <h1>사람 인원  {humNum} 명 </h1> <br></br>
            <button onClick={onClick} value={humNum} id="1"> 1 </button>
            <button onClick={onClick} value={humNum} id="2"> 2 </button>            
            <button onClick={onClick} value={humNum} id="3"> 3 </button>            
            <button onClick={onClick} value={humNum} id="4"> 4 </button>    
            <button onClick={onClick} value={humNum} id="5"> 5 </button>
            <br></br>
            {humNum ==='5' ? <div>
                <p> 강아지 </p>
             <button  onClick={onClick2} value={babyNum} id="1"> 1 </button> 
             <button  onClick={onClick2} value={babyNum} id="2"> 2 </button> 
             <button  onClick={onClick2} value={babyNum} id="3"> 3 </button> 
             <button  onClick={onClick2} value={babyNum} id="4"> 4 </button> 
             <button  onClick={onClick2} value={babyNum} id="5"> 5 </button> </div>

            : <p>  {humNum ==='4' ? <div>
                                <p> 강아지  </p>
            <button onClick={onClick2} value={babyNum} id="1" > 1 </button> 
            <button  onClick={onClick2} value={babyNum} id="2"> 2 </button> 
            <button onClick={onClick2} value={babyNum} id="3"> 3 </button> 
            <button onClick={onClick2} value={babyNum} id="4"> 4 </button>  </div>

           : <p>  {humNum ==='3' ? <div>
                            <p> 강아지  </p>
           <button  onClick={onClick2} value={babyNum} id="1"> 1 </button> 
           <button  onClick={onClick2} value={babyNum} id="2"> 2 </button> 
           <button  onClick={onClick2} value={babyNum} id="3"> 3 </button>  </div>

          : <p>  {humNum ==='2' ? <div>
                            <p> 강아지  </p>
        <button  onClick={onClick2} value={babyNum} id="1"> 1 </button> 
        <button  onClick={onClick2} value={babyNum} id="2">2 </button>   </div>

         : <p>  {humNum ==='1' ? <div>
                            <p> 강아지   </p>
        <button  onClick={onClick2} value={babyNum} id="1"> 1 </button>   </div>

        : <p> </p> }</p> }</p> }</p> } </p> }
            </div>
           
          
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        

</div>

    );
}
 
export default Pe;