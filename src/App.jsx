import Detail from "./pages/detail";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  return (
    <>

   <BrowserRouter>
        <Routes>
         
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/name/:name" element={<Detail/>}></Route>
 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
