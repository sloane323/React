
import { Outlet } from 'react-router-dom';
import Program from './Program';
import {Link} from 'react-router-dom';

const Course = () => {
    return ( 
        <div>

        <div> 

            <h3> 프로그램 안내 </h3>

            </div>
            <h1>레드라인 특별코스 </h1>
        <p>
      <Link to='./Program1' >01 부산역</Link> | 
      <Link to='./Program2' >02 부산항대교</Link> | 
      <Link to='./Program3' >03 광안리 해수욕장</Link> | 
      <Link to='./Program4' > 04 점심 & 수의사 강의</Link>  | 
      <Link to='./Program5' >05 해운대</Link> 
      <Outlet />
        </p>

      
          


            

        </div>
                    
     );
}
 
export default Course;