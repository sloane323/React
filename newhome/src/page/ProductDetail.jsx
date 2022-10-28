import ProductDisplay from "../Componemt/ProductDisplay";
import CommentInput from "../Componemt/CommentInput";
import Comment from "../Componemt/Comment";
import { ListGroup } from "react-bootstrap";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../DataContext/DataContext";

const ProductDetail = () => {
    const data = useContext(DataContext);
    const [comments, setComment ] = useState([]);

    const {id} = useParams();

    // 마운트 하자마자 값을 들고와서 출력함
    useEffect(()=>{

    });

  // data의 state의 값을 바로 수정해서 사용
  const getProduct = () => { return data.state.productList.find((product)=>(product.productId == id)) }

    return (
    <div>
        {console.log(id)}
       <ProductDisplay product={data.state.productList.find((product)=>(product.productId == id))}/>
       <br></br>
       <hr /> 
       <CommentInput />
       <br></br>
       <ListGroup style={{textAlign : "left"}}>
        <Comment />
        {
            data.state.allComments.filter((comment)=>(comment.productId==id)).map((comment)=>(<comment />))
        }
       </ListGroup>
    
    </div> );
}
 
export default ProductDetail;