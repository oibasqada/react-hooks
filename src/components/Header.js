import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Icon} from "/F-E/react/react03ls-hw/hooks/src/search-icon.svg";
import {useState} from "react";

const Header = () => {




    return (
        <header>
            <div className={'container'}>
                <div className="header-wrapper">
                    <h2>
                        <Link to={'/'}>Logo</Link>
                    </h2>
                    <div className="search">
                        <input className={'search-input'} type="search" placeholder={'Search for ...'}/>
                        <Icon className={'search-icon'}/>
                    </div>
                    <div className="links">
                        <Link className={'nav-link'} to={``}>Categories</Link>
                        <Link className={'nav-link'} to={``}>Ingredients</Link>
                        <Link className={'nav-link'} to={``}>About</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;