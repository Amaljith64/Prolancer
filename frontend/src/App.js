import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import { ClientProvider } from './context/ClientContext'

import HomePage from './pages/Client/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import RegisterFreelancer from './pages/Client/RegisterFreelancer';
import JobPosting from './pages/Client/JobPosting';
import ServiceListing from './pages/Client/ServiceListing';
import JobListing from './pages/Freelancer/JobListing';
import SIngleJob from './pages/Freelancer/SIngleJob';
import FreelancerHome from './pages/Freelancer/FreelancerHome';
import FreelancerServicePost from './pages/Freelancer/FreelancerServicePost';
import Upcoming from './pages/Upcoming';
import Contact from './pages/Contact';
import SingleService from './pages/Client/SingleService';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <ClientProvider>
          <Routes>
          
          <Route element={<HomePage/>} path="/" exact />
          <Route element={<Upcoming/>} path="/upcomming"  />
          <Route element={<FreelancerHome/>} path="/freelancer"  />
          <Route element={<FreelancerServicePost/>} path="/post_service"  />
          <Route element={<ServiceListing/>} path="/list_service"  />
          <Route element={<SingleService/>} path="/single_service/:id"/>
          <Route element={<Contact/>} path="/contact"  />
          

          {/* <PrivateRoute element={<HomePage/>} path="/" exact/> */}
          <Route element={<LoginPage/>} path="/login"/> 
          <Route element={<RegisterFreelancer/>} path="/seller_register"/> 
          <Route element={<SignupPage/>} path="/signup"/> 
          <Route element={<Dashboard/>} path="/dashboard"/> 
          <Route element={<JobPosting/>} path="/post_job"/> 
          <Route element={<JobListing/>} path="/list_job"/> 
          <Route element={<SIngleJob/>} path="/view_job/:id"/> 
        </Routes>
        </ClientProvider>
        
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
