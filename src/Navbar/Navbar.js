import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Free Firing Zone</h1>
        </nav>
    );
};
//arek ta func likhe const er baame export diye otake app theke import korleo kaj hbe na karon export default hishebe Navbar dewa tai sudhu defult tai app js e show hbe 
//now jodi navbar2 ke ui te dekhano lage tahole app.js e giye import {Navbar2} from ./Navbar/navbar
//evabe dite hbe tokhn navbar er ta baad diye navbar 2 er ta dekhabe 

export default Navbar;