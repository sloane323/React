import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ProductDisplay = (props) => {
    const {product} = props;
    const [index,setIndex] = useState(0)
    return (
    <div>
        {console.log(product)}
<Container>
    <Row>
        <Col>
        <div>
            <img src={require(`../image/${product.productPicture[index]}`)} alt="" width="500px" height="500px"></img>
        </div></Col>
        <Col>
        <div>
        <h1>{product.productName}</h1>
            <p>{product.productDetail}</p>
            <p>색상설명</p>
            <div> {
                // productcolor에 있는 color로 값을 백그라운드로 사용 
                product.productColor.map((color, i)=>(
                    <div className="m-2" style={{ display:"inline-block", 
                                  width: "30px", height:"30px", 
                                  backgroundColor: color,
                                  border : "3px solid lightgrey"
                                }}
                      onMouseEnter={()=>{setIndex(i)}}
                      ></div>
                  )) 
                }
              </div>
            <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
             구매하기 
             </Button>
             <Button variant="secondary" size="lg">
             장바구니
             </Button>
             <Button variant="secondary" size="lg">
             찜
             </Button>
    </div>
   
        </div></Col>
    </Row>
</Container>
    </div> );
}
 
export default ProductDisplay;