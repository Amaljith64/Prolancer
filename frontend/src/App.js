import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import { ClientProvider } from './context/ClientContext'

import HomePage from './pages/Client/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Freelancer/Dashboard';
import RegisterFreelancer from './pages/Client/RegisterFreelancer';
import JobPosting from './pages/Client/JobPosting';
import ServiceListing from './pages/Client/ServiceListing';
import JobListing from './pages/Freelancer/JobListing';
import SIngleJob from './pages/Freelancer/SIngleJob';
import FreelancerHome from './pages/Freelancer/FreelancerHome';
import FreelancerServicePost from './pages/Freelancer/FreelancerServicePost';
import Upcoming from './pages/Upcoming';
import Contact from './pages/Contact';
import TestFile from './pages/TestFile';
import SingleService from './pages/Client/SingleService';
import JobManaging from './pages/Client/JobManaging';
import Bidders from './pages/Client/Bidders';
import AdminHome from './pages/Admin/AdminHome';
import AllPosts from './pages/Admin/AllPosts';
import AllUsers from './pages/Admin/AllUsers';
import { Profile } from './pages/Profile';
import UserProfile from './pages/UserProfile';
import FreelancerProfile from './pages/Client/FreelancerProfile';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Reviews } from './pages/Freelancer/Reviews';
import MyBids from './pages/Freelancer/MyBids';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import FailedPage from './pages/FailedPage';
import ScrollToTop from './components/ScrollToTop';
import FreelancerRequest from './pages/Admin/FreelancerRequest';
import Header from './components/Header';




function App() {
  return (
    <GoogleOAuthProvider clientId="343457976454-bvvnulla58ojkknd3l9jtb5kd10aq8ns.apps.googleusercontent.com">
    <PayPalScriptProvider
    options={{ "client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID }} >
    <div className="App">
      <Router>
        <ScrollToTop/>
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
          <Route element={<Profile/>} path="/profile/:id"  />
          <Route element={<UserProfile/>} path="/userprofile"  />
          <Route element={<AllUsers/>} path="/allusers"  />
          
          

          {/* <PrivateRoute element={<HomePage/>} path="/" exact/> */}
          <Route element={<LoginPage/>} path="/login"/> 
          <Route element={<RegisterFreelancer/>} path="/seller_register"/> 
          <Route element={<SignupPage/>} path="/signup"/> 
          <Route element={<Dashboard/>} path="/dashboard"/> 
          <Route element={<Reviews/>} path="/myreviews"/> 
          <Route element={<MyBids/>} path="/mybids"/> 

          <Route element={<JobPosting/>} path="/post_job"/> 
          <Route element={<JobManaging/>} path="/manage_job"/> 
          <Route element={<Bidders/>} path="/bidders/:id"/> 
          
          <Route element={<JobListing/>} path="/list_job"/> 
          <Route element={<SIngleJob/>} path="/view_job/:id"/> 


          <Route element={<AdminHome/>} path="/admin"/> 
          <Route element={<AllPosts/>} path="/allpost"/> 
          <Route element={<FreelancerProfile/>} path="/freelancerprofile"/> 
          <Route element={<FreelancerRequest/>} path="/freelancerrequest"/> 


          <Route element={<TestFile/>} path="/testfile"/> 
          <Route element={<Checkout/>} path="/checkout/:price"/>
          <Route element={<Success/>} path="/success"/>
          <Route element={<FailedPage/>} path="/cancelled"/>



          
        </Routes>
  
        </ClientProvider>
        
        </AuthProvider>
      </Router>
    </div>
    </PayPalScriptProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
