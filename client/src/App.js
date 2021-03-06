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
import Register from './pages/Register';
import {UserContextProvider} from './Context/UserContext'
import Test from './pages/Test';
import NewBankAccount from './pages/NewBankAccount';

function App() {
  return (
    <UserContextProvider>
    <Router>
      <Navbar />
      <Routes>

          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/Login" exact element={<Login/>}></Route>
          <Route path="/Account" exact element={<Lobby/>}></Route>
          <Route path="/Contact" exact element={<Contact/>}></Route>
          <Route path="/Information" exact element={<Account/>}></Route>
          <Route path="/Upload" exact element={<Upload/>}></Route>
          <Route path="/Register" exact element={<Register/>}></Route>
          <Route path="/:rest/*" exact element={<Error/>}></Route>
          <Route path="/Test" exact element={<Test/>}></Route>
          <Route path="/newAccount" exact element={<NewBankAccount/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </UserContextProvider>
  );
}

export default App;
