import ProductDisplay from "../Componemt/ProductDisplay";
import CommentInput from "../Componemt/CommentInput";
import Comment from "../Componemt/Comment";
import { ListGroup } from "react-bootstrap";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../DataContext/DataContext";

const ProductDetaile = () => {
    const data = useContext(DataContext);
    const {id} = useParams();
    const [comments, setComments] = useState(
            data.state.allComments.filter(
                (comment)=>(comment.productId == id)));



    // state.allComment 값이 바뀔때마다 업데이트 
    useEffect(()=>{
        setComments(data.state.allComments.filter((comment)=>(comment.productId==id)))
    }, [data.state.allComments]);

  // data의 state의 값을 바로 수정해서 사용
  const getProduct = () => { return data.state.productList.find((product)=>(product.productId == id)) }

  return (  
      <div>
          <ProductDisplay product={ getProduct() }/>
          <br></br>
          <hr />
          <CommentInput/>
          <ListGroup style={{textAlign : "left"}}>
              {comments.map((comment)=>( <Comment key={comment.commentId} comment={comment} />))}
          </ListGroup>

      </div>
      );
}

export default ProductDetaile;