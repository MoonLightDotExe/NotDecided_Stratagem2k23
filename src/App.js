import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import LogIn from './pages/auth/LogIn/LogIn';
import Auth from './pages/auth/Auth';
import Hospitals from './pages/client/home/Hospitals';
import SignUp from './pages/auth/SignUp/SignUp';
import NavBar from './components/NavBar';
import Emergency from './components/Emergency';

function App() {
  return (
    <>
      <Router> 
        <Routes> 
          <Route exact path='/' element={
            <Auth />
          }></Route>
          <Route path='/login' element={
            <LogIn />
          }></Route>
          <Route path='/signUp' element={
            <SignUp />
          }></Route>
          <Route path='/hospitals' element={
            <>
              <NavBar />
              <Hospitals />
            </>
          }> </Route>
          <Route path='/emergency' element={
            <>
              <NavBar />
              <Emergency />
            </>
          }> </Route>
    </Routes>
      </Router>
    </>
  );
}

export default App;
