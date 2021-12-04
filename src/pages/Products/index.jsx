import {Container, CardGroup} from 'react-bootstrap'
import products from '../../temp/products.jsx'
import ProductCard from '../../components/ProductCard'
export default function Products(){
    return(
        <Container >

            <CardGroup className="list-unstyled">{
                products.map(({id, title, price, description, image, categories})=>{
                    return (
                        <li className="grid-item" key={id} >
                        <ProductCard id={id} title={title}  description={description} image={image} categories={categories} price={price} />
                        </li>
                    )
                })
            }</CardGroup>
            
        </Container>
    )
}