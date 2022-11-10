import './App.css';
import { Routes, Route} from 'react-router-dom';
import Footer from './Page/Footer';

import Info from './Page/Info';
import Header from './Page/Header';
import Course from './Page/Course';
import Program1 from './Page/Program1';
import Program2 from './Page/Program2';
import Program3 from './Page/Program3';
import Program4 from './Page/Program4';
import Program5 from './Page/Program5';
import Booking from './Page/Booking';
import Review from './Page/Review';
import About from './Page/About';
import Menu from './Page/Meue';





function App() {
  return (
    <div className="App">
        <Header />
        <Menu />

    <div>
          <Routes> 
          <Route path='/' element={<About />}> </Route>
          <Route path='/info' element={<Info />}> </Route>
          <Route path='/course' element={<Course />}>   
           <Route path='program1' element={<Program1 />} /> 
           <Route path='program2' element={<Program2 />} />
           <Route path='program3' element={<Program3 />} />
           <Route path='program4' element={<Program4 />} />
           <Route path='program5' element={<Program5 />} />
       </Route>
      <Route path='/booking' element={<Booking />}> </Route>
      <Route path='/review' element={<Review />}> </Route>
      </Routes> 
    </div> 

     <div> <Footer /> </div>

    </div>

    
  );
}

export default App;
