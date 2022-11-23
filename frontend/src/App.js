import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import RegisterFreelancer from './pages/RegisterFreelancer';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
          
          <Route element={<HomePage/>} path="/" exact />

          {/* <PrivateRoute element={<HomePage/>} path="/" exact/> */}
          <Route element={<LoginPage/>} path="/login"/> 
          <Route element={<RegisterFreelancer/>} path="/seller_register"/> 
          <Route element={<SignupPage/>} path="/signup"/> 
          <Route element={<Dashboard/>} path="/dashboard"/> 
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
