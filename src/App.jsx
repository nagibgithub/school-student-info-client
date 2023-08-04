import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './contents/NavBar';

const App = () => {

  return (
    <>
    <NavBar></NavBar>
    <Outlet></Outlet>
    </>

  );
};

export default App;