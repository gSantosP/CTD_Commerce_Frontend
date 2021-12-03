import './style.scss';
import ContributorsCards from "../../components/ContributorsCards";
import {CardGroup, Container} from "react-bootstrap";
import MainTittle from '../../components/Tipografy/MainTittle';

export default function Contributors(){
    return (
        <Container id="contributors">
            <MainTittle>Colaboradores</MainTittle>
            <CardGroup className="cards-group">
                <ContributorsCards/>
                <ContributorsCards/>
                <ContributorsCards/>
                <ContributorsCards/>
                <ContributorsCards/>
                <ContributorsCards/>
            </CardGroup>
        </Container>
)
}