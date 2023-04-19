import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AboutMe from './AboutMe'
import ContactMe from './components/ContactMe';
import TopNav from './components/TopNav';
import './App.css'
import Projects from './Projects';

const App = () => {
    return (
        <>
            <TopNav />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/hobbies" element={<ContactMe />} />
                </Routes>
            </BrowserRouter>
            <ContactMe />
        </>
    );
};

export default App
