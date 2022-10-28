import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import DataContext from '../DataContext/DataContext';

function BasicExample() {
    const [name, setName] = useState("");
    const {action} = useContext(DataContext);
    const navigate = useNavigate();

    const loginUser = ()=> {
      action.setUser(  {name: name, profile : null, likelist : [] }) ;
      navigate('/');
    }

  return (
    <Form className='m-5' onSubmit={loginUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name / ID {name} </Form.Label>
        <Form.Control type="id" placeholder="User Name / ID" 
        onChange={(e)=>{setName(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>시크릿코드 비미이이이일번호</Form.Label>
        <Form.Control type="password" placeholder="비밀번호 486" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
              </Form.Group>
      <Button variant="primary" type="submit" >
        로그인
      </Button>
    </Form>
  );
}

export default BasicExample;