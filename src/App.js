import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import LogIn from './pages/auth/LogIn/LogIn';
import Auth from './pages/auth/Auth';
import Home from './pages/client/home/Home';
import SignUp from './pages/auth/SignUp/SignUp';

function App() {
  return (
    <>
      <Router> 
        <Routes> 
          <Route exact path='/' element={
            <Auth></Auth>
          }></Route>
          <Route path='/login' element={
            <LogIn></LogIn>
          }></Route>
          <Route path='/signUp' element={
            <SignUp> </SignUp>
          }></Route>
          <Route path='/home' element={
            <Home></Home>
          }> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
