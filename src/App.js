import logo from './dogvideo.mp4';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import Aside from "./Components/Aside";
import About from "./Components/About";
import Header from "./Components/Header";
import NavSideBar from "./Components/NavSideBar";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <NavSideBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Index />} />
            <Route path="/pets/new" element={<New />} />
            <Route path="/pets/:id" element={<Show />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Aside />
        <About />
      </Router>
      <header className="App-header">
        <div className="Logo-container">
            <h1 className='landingPageHeadline'>THE<br/>ARTEMIS<br/>PROJECT</h1>
            <video className='landingPageVideo' autoPlay loop muted>
            <source src={logo} type='video/mp4'/></video>
        </div>
      </header>
    </div>
  );
}

export default App;

// import logo from './artemis.jpg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="Logo-container">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p className="Paragraph">
//           Inspired by the fierce and protective spirit of the Greek goddess Artemis, The Artemis Project embodies the essence of this mighty huntress in a modern context. Just as Artemis was known for her unparalleled ability to track and find elusive prey, our app channels her unwavering dedication into helping you locate your lost companion. <br></br><br></br>Much like Artemis' watchful gaze over the wilderness, The Artemis Project casts its digital net far and wide, harnessing the power of modern technology to connect those in search of their furry friends. With every search, every share, and every heartwarming reunion, we honor Artemis' legacy by bringing her guiding light to the modern age, reimagined as a beacon of hope for those seeking to reunite with their beloved pets.
//           </p>
//         </div>
//         <a
//           className="Custom-link"
//           href="http://localhost:3001/pets" 
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Enter The Artemis Project Here
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;