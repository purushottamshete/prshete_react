import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Layout from './components/common/layout';
import AboutUs from './components/aboutus';
import NoPage from './components/nopage';
import ContactUs from './components/contactus';
import Startups from './components/startups';
import Services from './components/services';
import Learn from './components/learn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="startups" element={<Startups/>} />
            <Route path="services" element={<Services/>} />
            <Route path="learn" element={<Learn/>} />
            <Route path="aboutus" element={<AboutUs/>} />
            <Route path="contactus" element={<ContactUs/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;