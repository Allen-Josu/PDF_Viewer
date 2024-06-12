import PDF from "./components/PDF"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./Home";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="student-declaration" element={<PDF />} />
      </Routes>

    </>
  )
}

export default App
