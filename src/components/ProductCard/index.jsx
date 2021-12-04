import { Card, Button } from "react-bootstrap";
import {useNavigate} from "react-router";

// import batata from "../../assets/img/batata-doce-rosada.jpg"
import "./styles.scss"
//corrgir pra img
export default function ProductCard({ id, title, description, categories, price, image }) {

    const navigate = useNavigate();

    return (
        <Card className = "product-card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>
                    <span>{description}</span>
                    <br/>
                    <span className="price">{`R$ ${price}`}</span> 
                </Card.Text>
                <Button variant="primary" onClick={()=> navigate(`/products/productPage/${id}`)}> Comprar </Button>
            </Card.Body>
        </Card>
    )
}