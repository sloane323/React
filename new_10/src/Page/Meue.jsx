import { Routes, Route, Link} from 'react-router-dom';

import { BiInfoCircle } from "react-icons/bi";
import { BiHomeHeart } from "react-icons/bi";
import { BiDoorOpen } from "react-icons/bi";
import { BiBookmarkHeart } from "react-icons/bi";
import { BiConversation } from "react-icons/bi";

import "./Css/Menu.css";



const Menu = () => {
    return ( 
        <div>
             <div  id ="menu-hd">

<div className="grid-it1">
    <div className="down1">
        <div id ="menu1" className='link-2'>    
            <Link to='/' > <BiHomeHeart  size="35" color="#89CFD3"  />  </Link> </div> 
        <div id ="menu2"> <p>HOME</p></div> 
    </div>
</div>


<div className="grid-it2">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Info" >   <BiInfoCircle  size="35" color="#89CFD3"  /> </Link> </div>
        <div id ="menu2">
        <p>행사안내</p> </div>
        </div> 
    </div>


<div className="grid-it3">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Course" > <BiDoorOpen  size="35" color="#89CFD3"  /></Link></div> 
        <div id ="menu2">
        <p>코스안내</p> </div>
        </div> 
    </div>


<div className="grid-it4">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Booking" > <BiBookmarkHeart  size="35" color="#89CFD3"  />   </Link></div> 
        <div id ="menu2">
        <p>예약하기</p> </div>
        </div> 
</div>

<div className="grid-it5">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Review" > <BiConversation  size="35" color="#89CFD3"  /> </Link></div> 
        <div id ="menu2">
        <p>후기작성</p> </div>
        </div> 
</div>


    </div> 
        </div>
     );
}
 
export default Menu;