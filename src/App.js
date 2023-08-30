import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Layout from './components/common/layout';
// import AboutUs from './components/aboutus';
import NoPage from './components/nopage';
import ContactUs from './components/contactus';
// import Startups from './components/startups';
// import Services from './components/services';
import Learn from './components/learn';
import PythonBasicsLive from './components/learn/pythonBasicsLive';
import PythonAdvanceLive from './components/learn/pythonAdvanceLive';
import PythonCompleteLive from './components/learn/pythonCompleteLive';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            {/* <Route path="startups" element={<Startups/>} /> */}
            {/* <Route path="services" element={<Services/>} /> */}
            <Route path="learn" element={<Learn/>} />
            <Route path="learn-python-basics-live" element={<PythonBasicsLive/>} />
            <Route path="learn-python-advance-live" element={<PythonAdvanceLive/>} />
            <Route path="learn-python-complete-live" element={<PythonCompleteLive/>} />
            {/* <Route path="about" element={<AboutUs/>} /> */}
            <Route path="contact" element={<ContactUs/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;