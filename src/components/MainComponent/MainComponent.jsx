import React from 'react';
import Sidebar from '../sideNav/SideBar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import LoginForm from '../RegistrationLoginPage/LoginForm';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from '../RegistrationLoginPage/RegistrationForm';
import Navbar from '../sideNav/Navbar';
import ProtectedRoute from '../../ProtectedRoutes/ProtectedRoutes';
import GlobalNews from '../../pages/GlobalNews/GlobalNews';
import AppleNews from '../../pages/AppleNews/AppleNews';
import TeslaNewsA from '../../pages/TeslaNewsA/TeslaNewsA';

const MainComponent = () => {
    return (
        <>
            <Navbar />
            <div className="flex h-screen mt-[6.1rem]">
                <Sidebar />
                <div className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route element={<ProtectedRoute />}>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/globalNews' element={<GlobalNews />} />
                            <Route path='/appleNews' element={<AppleNews />} />
                            <Route path='/teslaNewsA' element={<TeslaNewsA />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/registrationForm' element={<RegistrationForm />} />
            <Route path='*' element={<MainComponent />} />
        </Routes>
    );
}

export default AppRoutes;
