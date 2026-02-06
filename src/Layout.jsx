import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <div style={{ marginLeft: '120px', width: 'calc(100% - 120px)' }}>
        <Outlet />
        {/* <Footer /> */}
        <ScrollRestoration />
      </div>
    </div>
  );
}

export default Layout;
