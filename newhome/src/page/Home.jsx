import { Col, Container, Row } from "react-bootstrap";
// 슬릭 라이브러리 추가
import Slider from "react-slick";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../Componemt/ProductCard";
import { useContext } from "react";
import DataContext from "../DataContext/DataContext";

const Home = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
    };
      const {state} = useContext(DataContext)
    return (
      <div>
        {console.log(state)}
        <Container>
          <Row>
            <Col className="px-5">
              <Slider {...settings}>
                { state.productList.map((product)=>(
                                  <div>
                                      <ProductCard key={product.productId} product={product}/>
                                  </div>
                              ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default Home;
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
          <FontAwesomeIcon 
              icon={faChevronRight}
              className={className}
              onClick={onClick}
              style={{color:"#0d6efd"}}
          />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
          <FontAwesomeIcon 
              icon={faChevronLeft}
              className={className}
              onClick={onClick}
              style={{color:"#0d6efd"}}
          />
    );
  }