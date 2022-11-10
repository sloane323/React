
import { Outlet } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./Css/Line.css";
import Line from '../Componment/Line';

const Course = () => {
    return ( 
        <div>

        <div>
          <h3> 프로그램 안내 </h3>
              < Line /> <br></br>
        </div>

        <div id = "Linecenter">
      <div id = "bigLine"> 
      <div className="smLine-1" > 1. 부산역 출발지 환승 	</div> 

 
      <div className="smLine" > → </div> 
      <div className="smLine" > 2. 부산대교 / 부산항대교</div> 
      <div className="smLine" > → </div>
      <div className="smLine" > 3. UN기념공원 </div>
      <div className="smLine" > → </div>
      <div className="smLine" > 4. 용호만유람선 터미널 환승</div>  

      <div className="smLine2" >↓</div>

      <div className="smLine3">7. 동백섬</div> 
      <div className="smLine4" >←</div>
      <div className="smLine5" >6. 마린시티(수영만요트경기장)</div>	
      <div className="smLine6" >←</div>
      <div className="smLine7" >5. 광안리해수욕장</div>

      <div className="smLine8" >↓</div>


      <div className="smLine9" >8. 해운대해수욕장환승</div>
      <div className="smLine10" > → </div>
      <div className="smLine11" >9. 센텀시티(영화의전당)</div>
      <div className="smLine12" > → </div>
      <div className="smLine13" >10. 시립미술관.벡스코 / 광안대교</div>

      <div className="smLine14" >↓</div>
      

      <div className="smLine15" >10. 평화공원환승 </div>
      <div className="smLine16" >←</div>
      <div className="smLine17" >11. 부산항대교 </div>
      <div className="smLine18" >←</div>
      <div className="smLine19" >12. 광복로 </div>
      <div className="smLine20" >←</div>
       </div>
       </div>





       <div>
        <h3>레드라인 특별코스 </h3> <br></br>
        <Link to='./Program1' style={{ textDecoration: 'none' }} > 01 부산역  |   </Link> 
        <Link to='./Program2' style={{ textDecoration: 'none' }} > 02 부산항대교  |   </Link> 
        <Link to='./Program3' style={{ textDecoration: 'none' }} > 03 광안리 해수욕장  |   </Link> 
        <Link to='./Program4' style={{ textDecoration: 'none' }} > 04 설채현 수의사 강의  |   </Link> 
        <Link to='./Program5' style={{ textDecoration: 'none' }} > 05 센텀시티(영화의전당)</Link> 
        <Outlet />

      </div>


<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div> 
                    
     );
}
 
export default Course;