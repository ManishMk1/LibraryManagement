import './index.css'; 
import Login from './Login/Login';
import Signup from './Login/Signup'
import UserLogin from './Login/UserLogin'
import AdminLogin from './Login/AdminLogin'
import LoginPortal from './Login/LoginPortal';
import Todo from '../Todo/Todo';
import UserDashboard from './Login/UserDashboard';
import AdminDashboard from './Login/AdminDashboard';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');

   
    return token ? true : false;
  }

  
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/" />;  
    }else{
     
      return children;
    }
   
  };

  return (
    <BrowserRouter>
      <Routes>
       
        <Route path='/' element={<LoginPortal />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/dashboard" element={<UserDashboard/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
      
        <Route path="/dashboard" element={<ProtectedRoute><Todo /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
