import "./styles.scss";
import { useState, useCallback, useEffect } from "react";
import restClient from '../../services/restClient';
import { Carousel, Container } from "react-bootstrap";
import bannerImg1 from '../../assets/img/banner/banner-1.png';
import bannerImg2 from '../../assets/img/banner/banner-2.png';
import bannerImg3 from '../../assets/img/banner/banner-3.png';
import { CardGroup } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard';
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Home() {

    const [firstProducts, setFirstProducts] = useState([]);
    const [lastProducts, setLastProducts] = useState([]);

    const findProducts = useCallback(async () => {
        try {
            let response = await restClient.get("/products/page/0/limit/3");
            setFirstProducts(response.data.content);

            response = await restClient.get("/products/page/1/limit/3");
            setLastProducts(response.data.content);
        } catch {
            Swal.fire({
                title: "Ops! ocorreu um erro.",
                text: "Parece que a conexão com o servidor falhou.",
                icon: "error"
            })
        }
    }, [setFirstProducts, setLastProducts])

    useEffect(findProducts, [findProducts])


    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>CTD-Commerce | Home</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
            </HelmetProvider>
            <div className="home-page-content">
                <div className="banner">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={bannerImg1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={bannerImg2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={bannerImg3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Container className="carousel-products">
                    <Carousel>
                        <Carousel.Item>
                            <CardGroup className="list-unstyled">
                                {firstProducts.map(({ id, title, imageUrl, price }) => {
                                    return <li className="grid-item" key={id} >
                                        <ProductCard
                                            id={id}
                                            title={title}
                                            image={imageUrl}
                                            price={price} />
                                    </li>
                                })}
                            </CardGroup>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardGroup className="list-unstyled">
                                {lastProducts.map(({ id, title, imageUrl, price }) => {
                                    return <li className="grid-item" key={id} >
                                        <ProductCard
                                            id={id}
                                            title={title}
                                            image={imageUrl}
                                            price={price}
                                        />
                                    </li>
                                })}
                            </CardGroup>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        </>
    )
}