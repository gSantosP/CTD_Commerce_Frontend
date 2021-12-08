import "./style.scss"
import { Container, Col, Row, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import restClient from '../../services/restClient';
import { useCallback, useState, useEffect, useContext } from "react"
import Swal from "sweetalert2";
import SecTittle from "../../components/Tipografy/SecTittle";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CartContext } from "../../context/CartContest";
import arrowUp from "../../assets/svg/icons/Vector1.svg"
import arrowDown from "../../assets/svg/icons/arrow-down.svg"

export default function ProductDetails() {

    const navigate = useNavigate();
    const { productId } = useParams()
    const [product, setProduct] = useState({});
    const { saveProduct, productsInCart } = useContext(CartContext);
    const [cartIncludes, setCartIncludes] = useState(false);
    const [quantCounter, setQuantCounter] = useState(1)

    useEffect(() => {
        productsInCart.forEach(p => {
            setCartIncludes(p.id === product.id);
        });
    }, [productsInCart, product])

    

    const getProduct = useCallback(async () => {
        const response = await restClient.get(`/products/${productId}`)
        const product = response.data;
        setProduct(product);

    }, [setProduct, productId]);

    const handleSaveProduct = () =>{
        product.quantity = quantCounter
        saveProduct(product)
    }


    const addQuantity = () => {
            setQuantCounter(quantCounter+1)
    }

    const decreaseQuantity = () => {
        if (quantCounter > 1) {
            setQuantCounter(quantCounter-1)
        }
    }


    useEffect(() => {
        try {
            getProduct();
        } catch {
            Swal.fire({
                title: "Ops! ocorreu um erro.",
                text: "Parece que a conexão com o servidor falhou.",
                icon: "error"
            })
        }
    }, [getProduct])

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
                        <img className="product-picture" src={product.imageUrl} alt={`${product.title}`}></img>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-start">
                        <SecTittle> {product.title} </SecTittle>
                        <div>
                            <span className="description">{product.description}</span> <br />
                            <span className="freight"> Frete grátis nas compras acima de R$50,00</span> <br />
                            {!cartIncludes && (
                                <div className="quanti-box">
                                    <span className="quantity-selector">Quantidade:</span>
                                    <div className="quanti-items-holder">
                                        <button className="quantity-btn bkg-none" onClick={() => decreaseQuantity()}><img className="icon-img" alt="arrow-icon-down" src={arrowDown}></img></button>
                                        <span className="quantity-number">{quantCounter}</span>
                                        <button className="quantity-btn bkg-none" onClick={() => addQuantity()}><img className="icon-img" alt="arrow-icon-up" src={arrowUp}></img></button>
                                    </div>
                                </div>
                            )}
                            <span className="price"> {`R$ ${product.price && product.price.toFixed(2)}`}</span> <br />
                            <span className="details"> Parcele em até <strong>12X sem juros</strong> </span> <br />
                        </div>
                        {cartIncludes ? (
                            <Button className="finalize" variant="primary" onClick={() => navigate('/cart')}>
                                Finalizar Pedido
                            </Button>
                        ) : (
                            <Button variant="primary" onClick={() => handleSaveProduct()}>
                                Adicionar ao carrinho
                            </Button>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}