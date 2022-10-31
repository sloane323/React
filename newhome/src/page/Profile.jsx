import { useContext,state } from "react";
import { Container ,Row , Col} from "react-bootstrap";
import DataContext from "../DataContext/DataContext";
import ProfileUpdateModal from "../Componemt/ProfileUpdateModal";




const Profile = () => {
    const {state} = useContext(DataContext);
    return ( 
        <div>
          <Container>
            <Row>
                <Col> {/** 프로필 사진과 수정할 모달창  */}
                { state.user.profile ? 
						<div style={{
								width:"150px", 
								height :"150px",
                                borderRadius:"50%",
								backgroundImage: `url(${state.user.profile})`,
							 	backgroundSize:"cover" ,
                                textAlign:"center"}
							}></div>
						: 
						<div style={{width:"150px", height :"150px", backgroundColor:"lightgray", borderRadius:"50%"}}> 
                        이미지가 없습니다 </div>}
						<ProfileUpdateModal />
					</Col>
              
                <Col>{/** 이름과 찜목록 */}
                <h2>{state.user.name}</h2>
                <hr></hr>
                <h3>찜목록</h3>

                <ul>
					{ state.user.likelist.map((like)=> (<li>{like.productName}</li>))}
				</ul>

                </Col>
            </Row>
          </Container>
        </div>
     );
}
 
export default Profile;