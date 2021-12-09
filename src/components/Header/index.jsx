import './style.scss';
import React, { useCallback, useContext, useState } from "react"
import { ReactComponent as Logo } from "../../assets/svg/icons/Logo.svg"
import { ReactComponent as CartIcon } from "../../assets/svg/icons/cart-icon.svg"
import { ReactComponent as CoracaoIcom } from "../../assets/svg/icons/coracao-icom.svg"
import { ReactComponent as MenuIcon } from "../../assets/svg/icons/menu-icon.svg"
import { ReactComponent as CloseIcon } from "../../assets/svg/icons/close-icon.svg"
import { Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContest";


export default function Header() {

    const { productsInCart } = useContext(CartContext);
    const [isVisible, setIsVisibli] = useState(false);
    const [currentPage, setCurrentPage] = useState((window.location.pathname).split("/")[1]);

    const handleCurrentPage =  useCallback(() => {
        const current = (window.location.pathname).split("/")[1]
        window.onload = setCurrentPage(current)
    }, [setCurrentPage])

    document.body.addEventListener("click", () => handleCurrentPage())

    return (
        <header id="default-header" className="py-3">
            <Container id="top" className="d-flex align-items-center justify-content-between">
                <Link to="/"><Logo className="logo" /></Link>
                <Nav className="navigate-bar">
                    <Nav.Item className="nav-item" >
                        <Link className={`${currentPage === "products" ? "current-page" : ""}`} to="/products">Produtos</Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item" >
                        <Link className={`${currentPage === "about_us" ? "current-page" : ""}`} to="/about_us">Sobre nos</Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item" >
                        <Link className={`${currentPage === "favorites" ? "current-page" : ""}`} to="/favorites"><CoracaoIcom /></Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item" >
                        <Link className={`${currentPage === "cart" ? "current-page" : ""}`} to="/cart" >
                            {productsInCart.length > 0 && (
                                <span className="cart-count">{productsInCart.length}</span>
                            )}
                            <CartIcon />
                        </Link>
                    </Nav.Item>
                </Nav>
                <Button onClick={() => setIsVisibli(!isVisible)} className="toggle-drop-down-menu">
                    {isVisible ? <CloseIcon/> : <MenuIcon/>}
                </Button>
                <ul className={`dropdown-menu dropdown-menu-macos mx-0 border-0 shadow ${isVisible && "is-visible"} `}>
                    <li><Link onClick={() => setIsVisibli(!isVisible)} className="dropdown-item" to="/products">Produtos</Link></li>
                    <li><Link onClick={() => setIsVisibli(!isVisible)} className="dropdown-item" to="/about_us">Sobre nos</Link></li>
                    <li><Link onClick={() => setIsVisibli(!isVisible)} className="dropdown-item" to="/cart">Carrinho <CartIcon /></Link></li>
                    </ul>
            </Container>
        </header>
    )
}