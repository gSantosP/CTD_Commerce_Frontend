import './style.scss';
import ContributorsCards from "../../components/ContributorsCards";
import { CardGroup, Container } from "react-bootstrap";
import MainTittle from '../../components/Tipografy/MainTittle';

import contributors from '../../temp/contributors';

export default function Contributors() {
    return (

        <Container id="contributors">
            <MainTittle>Colaboradores</MainTittle>
            <CardGroup className="cards-group list-unstyled">
                {contributors.map(({ img, name, linkedin, github }) => {
                    return (<li className="grid-item">
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
                <h2>Sobre o Projeto</h2>
                <div className="desc-projeto mx-5 py-md-2 mx-md-2 px-5 ">
                    <p>Camada frontend de uma aplicação fullstack construida utilizando React,
                        ReactBoostrap, JAVA/Spring e MySQL.
                        O projeto serviu como instrumento avaliativo do penúltimo bimestre do primeiro ano do curso
                        CTD Mercado Livre. O intuito do projeto foi integrar o conhecimento obtido no ensino das diferentes áreas atreladas ao desenvolvimento web.</p>
                </div>
            </div>
        </Container>


    )
}