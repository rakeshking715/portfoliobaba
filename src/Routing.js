import React, { useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/self/Home';
import Personal from './Components/Registration/Personal';
import Account from './Components/Registration/Account';
import Document from './Components/Registration/Document';
import Index from './Components/Registration/Index'
import LogIn from './Components/LogIn';
import Sidebar from './Components/Sidebar';
import { AppContext } from './Components/Context/AppContext';
import Navbar from './Components/Navbar';
import { AnimatePresence } from 'framer-motion';
import About from './Components/self/About';
import WorkExperience from './Components/self/Work Experience';
import Contact from './Components/self/Contact';
import Weather from './Components/Weather/Weather';

const Routing = () => {
  let ContextData = useContext(AppContext);
  let expand = ContextData.isOpen;
  return (
    <>
      <Router>
        <div className="row">
          <div className={expand ? 'col-2' : "col-1"}>
            <Sidebar />
          </div>
          <div className={expand ? "col-10" : "col-11"}>
          <Navbar/>
         <AnimatePresence> 
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/personal' element={<Personal />} />
              <Route exact path='/document' element={<Document />} />
              <Route exact path='/account' element={<Account />} />
              <Route exact path='/index' element={<Index />} />
              <Route exact path='/login' element={<LogIn />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/work' element={<WorkExperience />} />
              <Route exact path='/contact' element={<Contact/>} />
              <Route exact path='/weather' element={<Weather/>} />
            </Routes>
            </AnimatePresence>
          </div>
        </div>
      </Router>
    </>
  )
}

export default Routing