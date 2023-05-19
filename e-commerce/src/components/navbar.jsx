import React from 'react';

const NavbarMenu = () => {
    const categories = ['Categorías', 'Tiendas oficiales', 'Tu tienda', 'Ayuda'];

    const createNavBarItem = (category, index) => (
        // Category will be used as the name of the item
        // Index will be used by react (todavía no aprendimos cómo)
        <li className="nav-item" key={index}>
            <a className="nav-link" href="#">{category}</a>
        </li>
    );

    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {categories.map(createNavBarItem)}
            </ul>
        </div>

    );
};

const NavBarShopName = () => {
    return (
        <a className="navbar-brand" href="#">PororóShop</a>
    );
}

const SmallScreenMenuButton = () => {
    // This button will "magically appear" when shrinking the window size. Shows the menu items when clicked
    // (No lo pude hacer andar. Le hago click y no aparece el menú. Probé en chrome y firefox)
    return (
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    )
};
const Navbar = () => {
    // A responsive navbar that shows a list of items in big screens but a button that shows the menu options when clicked in small screens
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavBarShopName />
            <SmallScreenMenuButton />
            <NavbarMenu />
        </nav>
    );
};

export default Navbar;
