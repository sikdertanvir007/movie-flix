import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Loading from '../routes/pages/Loading';

const HomeLayout = () => {
    const {state} =useNavigation();
    return (
        <div>
            <header><Navbar></Navbar></header>
            <main>
                {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} 
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;