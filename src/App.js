import Main from "./Main";
import Hiperveza from "./components/hiperveza";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'; 
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
     <Router>
       <Routes>
         <Route path="/" element={<Main/>}></Route>
         <Route path="/Hiperveza" element={<Hiperveza/>}></Route>
       </Routes>
     </Router>
     <Footer></Footer>
    </div>
  );
}

export default App;