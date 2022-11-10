import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BookModal = (props) => {
 const {name} = props;
 const {humNum}  = props; 
 const {babyNum} = props; 
 const {timecheck}  = props; 
 const {shotcheck} = props; 


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
        <div><br></br>
       <Button onClick={handleShow}>
       예약하기
       </Button>


     <Modal className='modal-booking'
     show={show} onHide={handleClose}>

        <Modal.Body> 
        <h2>  {name} 님, 안녕하세요 </h2> 
        <p>
        예약이 완료 되었습니다. <br></br>

        사람 : {humNum}명과 강아지 : {babyNum} 마리가   <br></br>
        {timecheck}, {shotcheck} 에 함께하는 시티투어에 <br></br>
        예약되었습니다.</p>

       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>  
        </div>
     );
}
 
export default BookModal;