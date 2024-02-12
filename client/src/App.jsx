import './App.css';
import { Outlet } from 'react-router-dom';
import MyFooter from './components/MyFooter';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
