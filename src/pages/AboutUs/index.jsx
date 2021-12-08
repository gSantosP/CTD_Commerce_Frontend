import './style.scss';
import ContributorsCards from "../../components/ContributorsCards";
import { CardGroup, Container } from "react-bootstrap";
import MainTittle from '../../components/Tipografy/MainTittle';
import contributors from '../../assets/data/contributors';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SecTittle from '../../components/Tipografy/SecTittle';

export default function AboutUs() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>CTD-Commerce | Sobre nós</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
            </HelmetProvider>
            <Container id="contributors">
                <MainTittle>Colaboradores</MainTittle>
                <CardGroup className="cards-group list-unstyled">
                    {contributors.map(({ img, name, linkedin, github }, index) => {
                        return (
                            <li key={index} className="grid-item">
                                <ContributorsCards
                                    img={img}
                                    name={name}
                                    linkdinUrl={linkedin}
                                    githubUrl={github}
                                />
                            </li>)
                    })}
                </CardGroup>
                <div className="section-sobre my-5">
                    <SecTittle>Sobre o Projeto</SecTittle>
                    <div className="project-description mx-2 mx-lg-5 px-lg-5 px-2 ">
                        <p>
                            Camada frontend de uma aplicação fullstack construida utilizando React,
                            ReactBoostrap, JAVA/Spring e MySQL.
                            O projeto serviu como instrumento avaliativo do penúltimo bimestre do primeiro ano do curso
                            CTD Mercado Livre. O intuito do projeto foi integrar o conhecimento obtido no ensino das diferentes áreas atreladas ao desenvolvimento web.
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}