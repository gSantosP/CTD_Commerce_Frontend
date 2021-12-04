import './style.scss';
import ContributorsCards from "../../components/ContributorsCards";
import {CardGroup, Container} from "react-bootstrap";
import MainTittle from '../../components/Tipografy/MainTittle';

import contributors from '../../temp/contributors';

export default function Contributors(){
    return (
        
        <Container id="contributors">
            <MainTittle>Colaboradores</MainTittle>
            <CardGroup className="cards-group list-unstyled">
                {contributors.map(({img, name, linkedin, github}) => {
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
            <h2>Sobre o Projeto</h2>
            <p>Camada frontend de uma aplicação fullstack construida utilizando React,<br/>
                 Boostrap, ReactBoostrap, JAVA, API Spring MVC, Mysql.<br/>
                 O projeto serviu como instrumento avaliativo do curso
                 CTD Mercado Livre</p>
        </Container>

        
)
}