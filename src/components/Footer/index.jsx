import './style.scss';
import { Container, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import sendToTop from '../../util/sendToTop';

export default function Footer(){
    return (
        <footer id="default-footer">
            <Container className="py-5">
                <Nav className="d-flex justify-content-center my-2">
                    <NavItem onClick={() => sendToTop()}><Link className="mx-3" to="/products">Produtos</Link></NavItem>
                    <NavItem onClick={() => sendToTop()}><Link className="mx-3" to="/about_us">Sobre nos</Link></NavItem>
                </Nav>
                <p className="py-2">© Todos os direitos reservados</p>
            </Container>
        </footer>
    )
}