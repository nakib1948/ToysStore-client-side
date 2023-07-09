import React from 'react';
import Home from '../Pages/Home/Home';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            
        </div>
    );
};

export default Main;