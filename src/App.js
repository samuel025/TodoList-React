import Navbar from './Navbar';
import Create from './Create';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar />
        <Routes>
             
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
            
        </Routes>
   
      </BrowserRouter>
    </div>
    
  );
}
export default App;



