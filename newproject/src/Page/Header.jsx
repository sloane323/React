
import "./Css/Headercss.css";

import{ ReactComponent as Alricon } from "./img/alr.svg";
import{ ReactComponent as Menuicon } from "./img/meu.svg";

import React, { useState } from 'react';
import Modal from 'react-modal';


const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div id ="headerbig">
          
           <div id = "titlename"> <span className ="e">너와나의 </span> 
            <span className ="highlight">  특별한동행 </span>  </div>
            

          <div id = "icon-hd"> 

          <div id = "icon-hd1">
            <div className="modalbig"> 
            <button onClick={()=> setModalIsOpen(true)} >
             <Alricon  /></button> 
             <div className = "modalup"> <Modal className = "modal"  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
              <h1>알려드립니다</h1> 
             </Modal> </div> 
             </div>
             </div>

          <div id = "icon-hd2"><Menuicon  /></div>

          </div>
          </div>
    
      );
}


 
export default Header;