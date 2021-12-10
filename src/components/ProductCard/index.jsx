import "./styles.scss"
import { Card, Button } from "react-bootstrap";
import {useNavigate} from "react-router";
import sendToTop from "../../util/sendToTop";

export default function ProductCard({ id, title, price, image }) {

    const origin = window.location.origin

    const navigate = useNavigate();

    return (
        <Card className = "product-card">
            <div className="img-container">
                <Card.Img variant="top" src={`${origin}/${image}`} />
            </div>
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>{`R$ ${price && price.toFixed(2)}`}</Card.Text>
                <Button variant="primary" onClick={()=> {navigate(`/product-details/${id}`); sendToTop()}}> Comprar </Button>
            </Card.Body>
        </Card>
    )
}