import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const ChefLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;