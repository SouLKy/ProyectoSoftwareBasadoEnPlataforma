import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer';
import Error from "./pages/Error"
import Contact from './pages/Contact';
import Account from './pages/Account'
import Lobby from './pages/Lobby'
import Upload from './pages/Upload';
import {UserContextProvider} from './Context/UserContext'

function App() {
  return (
    <UserContextProvider>
    <Router>
      <Navbar />
      <Routes>

          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/Login" exact element={<Login/>}></Route>
          <Route path="/Lobby" exact element={<Lobby/>}></Route>
          <Route path="/Contact" exact element={<Contact/>}></Route>
          <Route path="/Information" exact element={<Account/>}></Route>
          <Route path="/Upload" exact element={<Upload/>}></Route>
          <Route path="/:rest/*" exact element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </UserContextProvider>
  );
}

export default App;
