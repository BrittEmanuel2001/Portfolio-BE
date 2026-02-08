import { useState } from "react";
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import IntroLoader from './components/Hero/IntroLoader.jsx';

const Layout = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      {!loaded && <IntroLoader onComplete={() => setLoaded(true)} />}
      <Navbar isLoaded={loaded} />
      <div className='main-content'>
        {loaded && <Outlet />}
        {/* <Footer /> */}
        <ScrollRestoration />
      </div>
    </div>
  );
}

export default Layout;
