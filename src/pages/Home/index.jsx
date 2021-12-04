import { Carousel } from "react-bootstrap";
import bannerImg1 from '../../assets/img/banner/banner-1.png'
import bannerImg2 from '../../assets/img/banner/banner-2.png'
import bannerImg3 from '../../assets/img/banner/banner-3.png'

export default function Home() {
    return (
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
    )
}