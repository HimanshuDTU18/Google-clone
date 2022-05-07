import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";
import SearchPage from "./Components/SearchPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
           <Route path="/search" element={<SearchPage/>}/> 
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
