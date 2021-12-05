// Pagina da descricao do produto (mais detalhes e botao de compra)
import { Container } from 'react-bootstrap'
import "./style.scss"
import products from '../../temp/products.jsx'
import { useParams } from 'react-router'


export default function Product(){

    const {productId} = useParams()
    
    return(

    //Pode apagar tudo e fazer do zero, não consegui progredir com a ideia - Arthur
    //Use products[productId -1] para se referir ao objeto no array apartir do id que vem na url
    //isso é temporário

        <Container>
            <div className="produto-box-holder row">
                <div className="two-box-holder col row ">
                    <div className="img-holder col ">
                        <img src={products[productId - 1].image}></img>

                    </div> 
                    <div className="desc-box-holder row">  
                    </div>
                </div>
            </div>
        </Container>
    )
}