
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './HeadComp/Header.jsx'
import { Home } from './Pages/Home.jsx';
import { Footer } from './FooterComp/Footer.jsx';
import { StudyTour } from "./Pages/StudyTour.jsx";


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/study-tour" element={<StudyTour />} />
      </Routes>
<Footer />
    </BrowserRouter>
  );
}

export default App
