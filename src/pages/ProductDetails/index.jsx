import "./style.scss"
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import restClient from '../../services/restClient';
import { useCallback, useState, useEffect, useContext} from "react"
import Swal from "sweetalert2"; 
import SecTittle from "../../components/Tipografy/SecTittle";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CartContext } from "../../context/CartContest";

export default function ProductDetails() {

    const navigate = useNavigate();
    const { productId } = useParams()
    const [product, setProduct] = useState({});
    const { addProduct, productsInCart } = useContext(CartContext);
    const [cartIncludes, setCartIncludes] = useState(false);

    useEffect(() => {
        productsInCart.forEach( p => {
            setCartIncludes(p.id === product.id);
        });
    }, [productsInCart, product])

    const getProduct = useCallback( async () => {
        const response = await restClient.get(`/products/${productId}`)
        const product = response.data;
        setProduct(product);
        
    }, [setProduct, productId]);

    useEffect(() => {
        try{
            getProduct();
        } catch {
            Swal.fire({
                title: "Ops! ocorreu um erro.",
                text: "Parece que a conexão com o servidor falhou.",
                icon: "error"
            })
        }
    }, [getProduct ])

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>CTD-Commerce | {`${product.title}`}</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
            </HelmetProvider>
            <Container id="product-datails-content">
                <Row xs={1} sm={2} className="d-flex flex-wrap">
                    <Col>
                        <img src={product.imageUrl} alt={`${product.title}`}></img>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-start">
                        <SecTittle> {product.title} </SecTittle>
                        <Card.Text>
                            <p className="description">{product.description}</p>
                            <p className="details freight">Frete gratis nas compras acima de R$50,00</p>
                            <p className="price">{`R$ ${product.price}`}</p>
                            <p className="details">Parcele em até <strong>12X sem juros</strong> </p>
                        </Card.Text>
                        {cartIncludes ? (
                            <Button className="finalize" variant="primary" onClick={() => navigate('/cart')}>
                                Finalizar Pedido
                            </Button>
                        ) : (
                            <Button variant="primary" onClick={() => addProduct(product)}>
                                Adicionar ao carrinho
                            </Button>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}