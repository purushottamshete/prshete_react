import Header from './header';
import Footer from './footer';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
      <>
        <CssBaseline />
        <Header />

        
        <Outlet />
        

        <Footer />

      </>
    );
  }
  
export default Layout