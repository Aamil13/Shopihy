import Checksum from "./Component/Checkoutpage/Checksum" 
import Main from "./Component/Main/Main";
import {Routes,Route} from "react-router-dom"
import Data from "./Data";
import Thank from "./Component/ThankYou/Thank";


function App() {
  return (
    <div className="App">
      <Data/>
      <Routes>

     
      <Route path="/" element={<Main/>}/>
      <Route path="cart" element={<Checksum/>} />
      <Route path="/thank" element={<Thank/>} />
      </Routes>
    </div>
  );
}

export default App;
