
import './App.css';
// import Simple from './Comp/Simple';
import UseState from './Comp/UseState';
import Data from './Comp/Data';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div>
     
      <Router>
        <Routes>
          <Route path="/" element={<Data/>}/>
          <Route path="/about/:cca2" element={<UseState/>}/>
          
        </Routes>
      </Router>
      
      {/* <Simple/> */}
    </div>
  );
}

export default App;
