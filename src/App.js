import { Routes, Route} from "react-router-dom";
import Home from './routes/Home/Home';
import Portfolio from './routes/Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
