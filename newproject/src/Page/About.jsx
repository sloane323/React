import React from 'react';
import "./Css/Aboutcss.css";

const About = () => {

      
    return ( 
        <div className="aboutmain">

            <div className= "imgbanner"> 

            <div className="mainbanner_01" >
                <div className='maintitle2'>
              <p><span > 입양 반려견과 함께 <br></br></span> </p>
              <p><span>시티투어버스 타고 부산 관광 <br></br> </span> </p>
              <p><span>펫팸족 pet+family을 위한   <br></br></span> </p>
              <p><span>반려견과 함께 부산을 여행하고 싶은 사람들을 위한 특별한 여행<br></br></span></p>  
              </div>
            </div>

            <div> 	
                <div><h1>Title </h1> </div>

            <div className= "imgbanne4">
            반려견(유기견)을 입양해 키우는 사람들을 위한 <br></br>
            특별한 여행 ‘너와 나의 특별한 동행’
            </div>

                <img className="mainbanner1" alt="main2" src="./image/img2.jpg" width= '500px'/>
                <img className="mainbanner1" alt="main2" src="./image/img21.jpg" width= '500px'/>
                <img className="mainbanner1" alt="main2" src="./image/img3.jpg"width= '500px' />
                <img className="mainbanner1" alt="main2" src="./image/img31.jpg"width= '500px' />
            </div>    


            <div className="imgbanne5_01" style={{background:'url(./image/sample2.jpg)' , backgroundAttachment:'fixed' , backgroundrepeat:'round'  }} >
                <div className= "imgbanne5">
                #사지마세요_입양하세요_잃어버리지도마세요 <br></br>
                #부산시_반려동물_복지문화센터<br></br>
                #051_853_1335 <br></br>
            </div></div>

        

            <div className = "imground">
            <div> 내용넣기  </div> 
            </div>
            </div>
        </div>
     );
    }
 
export default About;