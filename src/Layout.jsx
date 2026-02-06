import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <div className='main-content'>
        <Outlet />
        {/* <Footer /> */}
        <ScrollRestoration />
      </div>
    </div>
  );
}

export default Layout;
