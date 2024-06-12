import { PDFViewer } from "@react-pdf/renderer"
import PDF from "./components/PDF"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


function App() {

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "101vh" }}>
        <PDF />
      </PDFViewer >
    </>
  )
}

export default App
