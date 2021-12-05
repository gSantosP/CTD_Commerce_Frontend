import { Card, Button } from "react-bootstrap";
import {useNavigate} from "react-router";

// import batata from "../../assets/img/batata-doce-rosada.jpg"
import "./styles.scss"
//corrgir pra img
export default function ProductCard({ id, title, price, image }) {

    const navigate = useNavigate();

    return (
        <Card className = "product-card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>{`R$ ${price}`}</Card.Text>
                <Button variant="primary" onClick={()=> navigate(`/products/productPage/${id}`)}> Comprar </Button>
            </Card.Body>
        </Card>
    )
}