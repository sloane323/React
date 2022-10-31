import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useRef } from 'react';
import { useContext } from 'react';
import DataContext from '../DataContext/DataContext';


function ProfileUpdateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {action, state} = useContext(DataContext);

  const [file, setfile] = useState("");
  const imgshow = useRef();

  // 파일을 가져오는 함수 
  const onLoadFile = (e) => {
    // 이벤트 객체의 타겟의 file를 통해서 원하는 파일을 가져올수있다. 
   console.log (e.target.files[0]);
   console.log (imgshow)
   setfile(e.target.files[0])
   imgshow.current.style.backgroundSize="cover"
   imgshow.current.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`
  }

// 저장을 눌렀을때 state에 사진이 저장되고 모달창을 종료 
const updateProfile = () => {
    action.setUser({
        ...state.user, profile : URL.createObjectURL(file)
    })
    handleClose();
}

  return (
    <>
      <Button variant="secondary" onClick={handleShow} style={{textAlign:"left"}}  >
        프로필 사진 수정하기 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >프로필사진을 추가해주세요</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div ref={imgshow} style={{width:"150px", height:"150px", borderRadius:"50%", backgroundColor:"lightgrey" }}></div>
            {/** 사진파일을 받아올 input 태그를 가져옴  */}
            <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>추가할 이미지를 선택하세요</Form.Label>
            <Form.Control type="file" onChange={onLoadFile} />
            </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={updateProfile}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileUpdateModal ;