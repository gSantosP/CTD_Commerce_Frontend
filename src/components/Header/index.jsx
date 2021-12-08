import './style.scss';
import React, { useContext } from "react"
import { ReactComponent as Logo } from "../../assets/svg/icons/Logo.svg"
import { ReactComponent as CartIcon } from "../../assets/svg/icons/cart-icon.svg"
import { ReactComponent as CoracaoIcom } from "../../assets/svg/icons/coracao-icom.svg"
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContest";

export default function Header(){
    
    const { productsInCart } = useContext(CartContext);
    
    return (
        <header id="default-header" className="py-3">
            <Container className="d-flex align-items-center justify-content-between">
                <Link to="/"><Logo className="logo"/></Link>
                <Nav>
                    <Nav.Item className="nav-item" ><Link to="/products">Produtos</Link></Nav.Item>
                    <Nav.Item className="nav-item" ><Link to="/about_us">Sobre nos</Link></Nav.Item>
                    <Nav.Item className="nav-item" ><Link to="/favorites"><CoracaoIcom/></Link></Nav.Item>
                    <Nav.Item className="nav-item" >
                        <Link to="/cart">
                            {productsInCart.length > 0 && (
                                <span className="d-flex justify-content-center">{productsInCart.length}</span>
                            )}
                            <CartIcon/>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </header>
    )
}