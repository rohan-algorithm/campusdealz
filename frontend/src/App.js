import {React,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes ,useNavigate} from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Categories from './components/items/Categories';
import ItemList from './components/items/ItemList';
import ItemPage from './components/items/ItemPage';
import Sidebar from './components/common/Sidebar';
import AddItem from './components/items/AddItem';
import Register from './components/User/Register';
import Login from './components/User/Login';
import Layout from './components/common/Layout'

const PrivateRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('authToken');

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  return isAuth ? <Component /> : null;
};

function App() {
  return (

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<PrivateRoute component={ItemList} />} />
          {/* Add other routes that should use the layout */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/item/:id" element={<ItemPage />} />
        </Route>
      </Routes>

  );
}

export default App;
