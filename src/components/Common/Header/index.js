import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown } from 'antd';
import { funcs, navMenu } from '../../../data';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <>
            <div className="nav-menu">
                {navMenu.map((item) => (
                    <Link key={item.key} to={item.path}>
                        {item.label}
                    </Link>
                ))}
            </div>

            <img src="https://creativelayers.net/themes/jobhunt-html/images/resource/logo8.png" alt="my-logo" />

            <div className="nav-menu">
                {funcs.map((item) => (
                    <Link key={item.key} to={item.path}>
                        {item.label}
                    </Link>
                ))}
            </div>
        </>
    );
};

Header.propTypes = {};

export default Header;
