import React from 'react'
import ReactDOM from 'react-dom/client'
import TopNav from './components/TopNav'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import { Container } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TopNav />
    <AboutMe />
    <ContactMe />
  </React.StrictMode>,
)
