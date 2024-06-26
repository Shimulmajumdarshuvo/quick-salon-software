
import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom/dist';
import Register from './Pages/Contact/Register';
import Login from './Pages/Contact/Login';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <div >
      {/* <Home></Home> */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
