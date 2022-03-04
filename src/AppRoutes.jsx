import React, {useContext} from 'react'


import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import { AuthProvider, AuthContext } from "./contexts/auth";


const AppRoutes = () => {

    const Private = ({children}) => {
        const {authenticated} = useContext(AuthContext)
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<HomePage/>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes