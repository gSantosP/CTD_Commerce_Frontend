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
        </Container>
)
}