import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const TopBar = () => {
    return (
        <div>
            <section className="m-10" style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link to="/"> <h6>Blogs</h6> </Link>
            <span>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
            </span>
            <Header></Header>
            </section>
        </div>
    );
};

export default TopBar;