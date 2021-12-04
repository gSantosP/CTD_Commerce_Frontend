import { Card, Button } from "react-bootstrap";
// import batata from "../../assets/img/batata-doce-rosada.jpg"
import "./styles.scss"
//corrgir pra img
export default function ProductCard({ id, title, description, categories, price, image }) {
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
                <Button variant="primary" > Gastar dinheiro </Button>
            </Card.Body>
        </Card>
    )
}