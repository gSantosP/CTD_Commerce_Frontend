import "./styles.scss";
import { Carousel, Container } from "react-bootstrap";
import bannerImg1 from '../../assets/img/banner/banner-1.png'
import bannerImg2 from '../../assets/img/banner/banner-2.png'
import bannerImg3 from '../../assets/img/banner/banner-3.png'
import { CardGroup } from 'react-bootstrap'
import ProductCard from '../../components/ProductCard'

export default function Home() {
    return (
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
                            <li className="grid-item" key={1} >
                                <ProductCard id={1} title={"title"} description={"description"} image={"https://i.imgur.com/00LE2ky.jpeg"} categories={"asdsa"} price={"dasdsa"} />
                            </li>
                            <li className="grid-item" key={2} >
                                <ProductCard id={2} title={"shuahsua"} description={"asdasd"} image={"https://i.imgur.com/00LE2ky.jpeg"} categories={"asdsad"} price={"asdas"} />
                            </li>
                            <li className="grid-item" key={3} >
                                <ProductCard id={3} title={"tchubaruba"} description={"asdasdasd"} image={"https://i.imgur.com/00LE2ky.jpeg"} categories={"asdasd"} price={"adsd"} />
                            </li>
                        </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardGroup className="list-unstyled">
                            <li className="grid-item" key={1} >
                                <ProductCard id={1} title={"title"} description={"description"} image={"https://i.imgur.com/00LE2ky.jpeg"} categories={"asdsa"} price={"dasdsa"} />
                            </li>
                            <li className="grid-item" key={2} >
                                <ProductCard id={2} title={"shuahsua"} description={"asdasd"} image={"https://i.imgur.com/00LE2ky.jpeg"} categories={"asdsad"} price={"asdas"} />
                            </li>
                            <li className="grid-item" key={3} >
                                <ProductCard id={3} title={"tchubaruba"} description={"asdasdasd"} image={"https://i.imgur.com/00LE2ky.jpeg"} categories={"asdasd"} price={"adsd"} />
                            </li>
                        </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardGroup className="list-unstyled">
                            <li className="grid-item" key={1} >
                                <ProductCard id={1} title={"title"} description={"description"} image={"https://i.imgur.com/00LE2ky.jpeg"} categories={"asdsa"} price={"dasdsa"} />
                            </li>
                            <li className="grid-item" key={2} >
                                <ProductCard id={2} title={"shuahsua"} description={"asdasd"} image={"https://i.imgur.com/00LE2ky.jpeg"} categories={"asdsad"} price={"asdas"} />
                            </li>
                            <li className="grid-item" key={3} >
                                <ProductCard id={3} title={"tchubaruba"} description={"asdasdasd"} image={"https://i.imgur.com/00LE2ky.jpeg"} categories={"asdasd"} price={"adsd"} />
                            </li>
                        </CardGroup>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}