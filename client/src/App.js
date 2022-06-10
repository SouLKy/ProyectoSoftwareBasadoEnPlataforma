import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/Login" exact element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
