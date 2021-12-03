import './style.scss';
import { Container, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer id="default-footer">
            <Container className="py-5">
                <Nav className="d-flex justify-content-center my-2">
                    <NavItem><Link className="mx-3" to="/products">Produtos</Link></NavItem>
                    <NavItem><Link className="mx-3" to="/products">Sobre nos</Link></NavItem>
                </Nav>
                <p className="py-2">© Todos os direitos reservados</p>
            </Container>
        </footer>
    )
}