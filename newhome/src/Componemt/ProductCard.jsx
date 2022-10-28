import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faHeart as activeHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as disactiveHeart} from '@fortawesome/free-regular-svg-icons'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DataContext from '../DataContext/DataContext';

import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard(props)  {
    const {product} = props;
    const data = useContext(DataContext);
    const [likeCheck, setLikCheck] = useState(false)
    const navigate = useNavigate();

    // 로그아웃 되었을때 전부 likecheck 를 false로 만들기 
    // data.state.user의 값을 확인해서 없데이트 
    useEffect(()=>{
        if (!data.state.user ) {
            setLikCheck(false)
        }
    }, [data.state.user])

    // 버튼을 클릭했을때 로그인이 되어있다면 유저의 likelist에 추가하기 
    // 토글 기능 {한번 누르면 추가, 선택된 상황에서 누르면 해제 

    const toggleLike = () => {
        if (!data.state.user) {
            return; // 함수를 끝냄 
        }
        // like가 선택 되어 있는지를 확인 
        // data.state.user.likelist [?]. > 배열안에 상품의 아이디가 있다면 선택된것을 알수있다. 
        // find 조건이 참일때 하나의 값을 반환 없을때는 undefind
        // 값이 있다면 값을 제거 (filter) 값이 없다면 값을 추가 (concat) 

        const likes = data.state.user.likelist;
        // likelist의 like 중에서 아이디가 같은것이 있다면 참 
        if (likes.find((like)=>(like.productId == product.productId))){
      
            // 같은 값이 있다면 제거 ( 삭제 )
            const newLikeList = likes.filter((like)=>(like.productId != product.productId));
           // user의 값이 객체이므로 이전값이 사라지지 않게  ... data.state.user를 통해 저장 
            data.action.setUser({
                ...data.state.user,
                likelist : newLikeList 
            } )

            setLikCheck(false);

        } else {
            // 값이 없을때, likelist를 추가하는 내용 
            // like(객체) 를 만들어서 물건 id 와 물건 이름 추가 
            const like = {productId : product.productId, productName : product.productName};
            // like가 추가된 새로운 배열 생성 
            const newLikeList = likes.concat(like);
            data.action.setUser({
                ...data.state.user,
                likelist : newLikeList
            } );     setLikCheck(true);
        } 

    };

    return ( <div>
        <Card Style={{ width:'13rem'}}>
            <Card.Img       
            onClick={()=>{navigate("/product/"+product.productId)}}
      variant="top" src={require(`../image/${product.productPicture[0]}`)} />
            <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                {/** 로그인이 되어있다면 버튼을 클릭했을때 유저의 Likelist에 추가하기  */}
                <Button variant="outline-primary" onClick={ toggleLike }>
                    <FontAwesomeIcon icon={likeCheck ? activeHeart : disactiveHeart} />
                </Button>
            </Card.Body>
        </Card>
           </div>
     );
}
 
export default ProductCard;