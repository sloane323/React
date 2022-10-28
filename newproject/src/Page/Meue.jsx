import { Routes, Route, Link} from 'react-router-dom';

import{ ReactComponent as Infoicon } from "../Page/img/inf.svg";
import{ ReactComponent as Csiicon } from "../Page/img/csi.svg";
import{ ReactComponent as Bokicon } from "../Page/img/bok.svg";
import{ ReactComponent as Rivicon } from "../Page/img/rev.svg";
import{ ReactComponent as Homicon } from "../Page/img/home.svg";

import "./Css/Menu.css";



const Menu = () => {
    return ( 
        <div>
             <div  id ="menu-hd">

<div className="grid-it1">
    <div className="down1">
        <div id ="menu1" className='link-2'>    
            <Link to='/' > <Homicon /> </Link> </div> 
        <div id ="menu2"> <p>HOME</p></div> 
    </div>
</div>


<div className="grid-it2">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Info" > <Infoicon /> </Link> </div>
        <div id ="menu2">
        <p>행사안내</p> </div>
        </div> 
    </div>


<div className="grid-it3">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Course" > <Csiicon /></Link></div> 
        <div id ="menu2">
        <p>코스안내</p> </div>
        </div> 
    </div>


<div className="grid-it4">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Booking" > <Bokicon /></Link></div> 
        <div id ="menu2">
        <p>예약하기</p> </div>
        </div> 
</div>

<div className="grid-it5">
    <div className="down1">
        <div id ="menu1" className='link-2'>
        <Link to="/Review" >  <Rivicon /></Link></div> 
        <div id ="menu2">
        <p>후기작성</p> </div>
        </div> 
</div>


    </div> 
        </div>
     );
}
 
export default Menu;