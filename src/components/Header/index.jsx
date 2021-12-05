import './style.scss';
import React from "react"
import { ReactComponent as Logo } from "../../assets/svg/icons/Logo.svg"
import { ReactComponent as CartIcon } from "../../assets/svg/icons/cart-icon.svg"
import { ReactComponent as CoracaoIcom } from "../../assets/svg/icons/coracao-icom.svg"
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header id="default-header" className="py-3">
            <Container className="d-flex align-items-center justify-content-between">
                <Link to="/"><Logo className="logo"/></Link>
                <Nav>
                    <Nav.Item className="nav-item" ><Link to="/about_us">Sobre nos</Link></Nav.Item>
                    <Nav.Item className="nav-item" ><Link to="/products">Produtos</Link></Nav.Item>
                    <Nav.Item className="nav-item" ><Link to="/favorits"><CoracaoIcom/></Link></Nav.Item>
                    <Nav.Item className="nav-item" ><Link to="/carrinho"><CartIcon/></Link></Nav.Item>
                </Nav>
            </Container>
        </header>
    )
}