import logo from './logo.svg';
import Nav from './component/Nav'
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './component/Footer';
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivateComponent';
import Login from "./component/Login";
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from  './component/UpdateProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
     <Routes>
      <Route element={<PrivateComponent/>}>

      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<AddProduct/>}/>
      <Route path="/update/:id" element={<UpdateProduct/>}/>
      <Route path="/logout" element={<h1>Hello logout</h1>}/>
      <Route path="/profile" element={<h1>Hello profile</h1>}/>
      </Route>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>

     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
