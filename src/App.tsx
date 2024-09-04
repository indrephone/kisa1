import { Routes, Route } from 'react-router-dom';
import MainOutlet from './components/outlets/MainOutlet';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Shop from './components/pages/Shop';

const App = () => {
  return (
    <>
     <Routes>
       <Route path="login" element={<Login />} />
       <Route path="register" element={<Register />} />
       <Route element={<MainOutlet />}>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="shop" element={<Shop />} /> 
       </Route>  
     </Routes>
    </>
  );
}

export default App;
