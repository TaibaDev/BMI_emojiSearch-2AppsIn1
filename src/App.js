import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Emoji from './emojiSearch';
import DigitalWatch from './components/digitalWatch';
import BMI from './components/BMI';
import Counter from './components/counter'
import Upload from './components/imageCompression';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Upload/>
      <Routes>
        <Route path="/" element={<DigitalWatch/>}/>
        <Route path="/bmi-calc" element={<BMI/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/emoji" element={<Emoji/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
