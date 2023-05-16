import { Route, Routes, HashRouter, BrowserRouter } from 'react-router-dom'
import AboutMe from './AboutMe'
import ContactMe from './components/ContactMe';
import Hobbies from './Hobbies';
import TopNav from './components/TopNav';
import './App.css'
import Projects from './Projects';

const App = () => {
    return (
        <HashRouter basename="/">
            <TopNav />
            <Routes>
                <Route path="/" element={
                    <>
                        <AboutMe />
                        <ContactMe />
                    </>} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
            
        </HashRouter>
    );
};

export default App
