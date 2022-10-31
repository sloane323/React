
import "./Css/Headercss.css";

import { Link} from 'react-router-dom';
import{ ReactComponent as Alricon } from "./img/alr.svg";
import{ ReactComponent as Menuicon } from "./img/meu.svg";

import React, { useState } from 'react';
import Modal from 'react-modal';
import {useEffect} from 'react';

const Header = () => {
 
  const [modalIsOpen, setModalIsOpen] = useState(false);


  

  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen); // on,off 개념 boolean
}


  

    return (
        <div id ="headerbig">

           <div id = "titlename"> <span className ="e">너와나의 </span> 
            <span className ="highlight">  특별한동행 </span>  </div>
            

          <div id = "icon-hd"> 

          <div id = "icon-hd1">
             <div className="modalbig"> <div className="modalpa">
            <button onClick={()=> setModalIsOpen(true)} >
             <Alricon  /></button>  </div>
             <div className = "modalup"> <Modal className = "modal"  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
              <p>읽지 않은 메시지가 있습니다</p> 
             </Modal> </div> 
             </div>
             </div>

          <div id = "icon-mu" >
          <div id = "icon-hd2"  onClick={()=>toggleMenu()} ><Menuicon  /></div>
          <div id = "sd-hd2">
                      <ul className={isOpen ? "show-menu" : "hide-menu"}> <div>
                        <li className="muli"><Link to='/' style={{ textDecoration: "none" , color :"white" , fontSize: "20px"}}>
                         <span>HOME</span> </Link> </li>
                        <li><Link to="/Info" style={{ textDecoration: "none" , color :"white" , fontSize: "20px"}}>
                         <span>행사안내</span> </Link>  </li>
                        <li><Link to="/Course" style={{ textDecoration: "none" , color :"white" , fontSize: "20px"}}>
                         <span>코스안내</span></Link> </li>
                        <li><Link to="/Booking"  style={{ textDecoration: "none" , color :"white" , fontSize: "20px"}}>
                         <span>예약하기</span> </Link></li>
                        <li><Link to="/Review"  style={{ textDecoration: "none" , color :"white" , fontSize: "20px"}}>
                         <span>후기작성</span> </Link></li>
          </div></ul>
        </div>
          
          </div>
          
          </div>



          </div>
    
      );
}


export default Header;