import { Card, Button } from "react-bootstrap";
import perfil from "../../assets/svg/perfil.svg"
import gitHub from "../../assets/svg/git-hub.svg"
import linkedin from "../../assets/svg/linkedin.svg"
import "./styles.scss"

export default function ContributorsCards({ img, name, sobrenome, linkdin, github }) {
    return (
        <Card className = "contribuitors-card">
            <Card.Img variant="top" src={perfil} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <Card.Title> {sobrenome} </Card.Title>
                <Button variant="primary" className="contribuitors-card-button" > <img src={ linkedin } alt="Logo-linkedin" /> Linkedin </Button>
                <br/>
                <Button variant="primary" className="contribuitors-card-button" > <img src={ gitHub } alt="Logo-git-hub" /> GitHub </Button>
            </Card.Body>
        </Card>
    )
}