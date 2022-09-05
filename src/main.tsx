import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'

import theme from './theme'

import AccountDetails from './components/AccountDetails'
import Navbar from './components/Navbar'

// localStorage.setItem('chakra-ui-color-mode', 'dark')

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<App />}></Route>
                    <Route path='/account' element={<AccountDetails />}></Route>
                </Routes>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
)
