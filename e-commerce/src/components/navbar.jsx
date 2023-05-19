import React from 'react';

const NavbarMenu = () => {
    const categories = ['Home', 'About', 'Services', 'Contact'];

    const createNavBarItem = (category, index) => (
        // Category will be used as the name of the item
        // Index will be used by react (todavía no aprendimos cómo)
        <li className="nav-item" key={index}>
            <a className="nav-link" href="#">{category}</a>
        </li>
    );

    return (
        <ul className="navbar-nav">
            {categories.map(createNavBarItem)}
        </ul>
    );
};

const NavBarShopName = () => {
    return (
        <a className="navbar-brand" href="#">PororóShop</a>
    );
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavBarShopName />
            <div className="collapse navbar-collapse" id="navbarNav">
                <NavbarMenu />
            </div>
        </nav>
    );
};

export default Navbar;
