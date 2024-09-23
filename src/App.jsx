import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from "./pages/landingPage";
import Dashboard from './pages/dashboard/dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Group from './pages/dashboard/group';
import Workspace from './pages/dashboard/workspace';
import Grades from './pages/dashboard/grades';
import Activity from './pages/dashboard/activity';
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/home" element={<Dashboard />}>
          <Route path="your_activity" element={<Activity />} />
          <Route path='groups' element={<Group />}></Route>
          <Route path='workspace' element={<Workspace />}></Route>
          <Route path='grades' element={<Grades />}></Route> 
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
