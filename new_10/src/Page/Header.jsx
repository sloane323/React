
import "./Css/Headercss.css";

import { SlShare } from 'react-icons/sl'; 
import {SlOptions} from 'react-icons/sl';
import {SlClose} from 'react-icons/sl';

import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavTop = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: black;
    border: none;
  }
`;


const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleBar, setToggleBar] = useState(true)

  const toggleChange = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

    return (
        <div id ="headerbig"  >

           <div id = "titlename"> <span className ="e">너와나의 </span> 
            <span className ="highlight">  특별한동행 </span>  </div>
            

          <div id = "icon-hd"> 

             <div className="modalbig"> 
             <div className="modalpa">
            <button >
             <SlShare size="25" color="#89CFD3" /></button>
             </div>
             <div className="modalpa2">
            <button onClick={toggleChange} >
             { toggleBar ? <SlOptions size="25" color="#89CFD3" /> : <SlClose size="25" color="#89CFD3" /> }
             </button>
             </div>
             { toggleMenu &&
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
            inlineCollapsed={toggleBar}
            onClick={onMenuClick}
          >
            <Menu.Item key="subs">
              구독하기
            </Menu.Item>
            <Menu.Item key="product">
              상품 보기
            </Menu.Item>
            <Menu.Item key="cs">
              고객센터
            </Menu.Item>
            <Menu.Item key="signin">
              <Link to="/login">
              로그인
              </Link>
            </Menu.Item>
            <Menu.Item key="signup">
              <Link to="/signup">
              회원가입
              </Link>
            </Menu.Item>
          </Menu>
        }

          </div>

          </div> 
          
          
          
          </div>
      );
}


export default Header;