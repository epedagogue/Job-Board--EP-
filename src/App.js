import './App.css';
// import Landing from './Components/Landing'
import AppBaar from './Components/AppBaar';
// import Job from './Components/JobBoard/Job';
// import Footer from './Components/JobBoard/Footer';
// import HireUs from './Components/JobBoard/HireUs';
import { Routes, Route } from "react-router-dom";
import HireUs from './Components/JobBoard/HireUs'
import Support from './Components/JobBoard/Support';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<AppBaar />} />
        <Route exact path='/hireus' element={<HireUs />} />
        <Route exact path='/support' element={<Support />} />
      </Routes>
      {/* <Job></Job>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
