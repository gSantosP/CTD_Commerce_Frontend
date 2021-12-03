import {Container} from 'react-bootstrap'
import products from '../../temp/products.jsx'
import ProductCard from '../../components/ProductCard'
export default function Products(){
    return(
        <Container>
            {
            products.map(({id, title, price, description, image, categories})=>{
                return (
                    <li key={id} >
                    <ProductCard id={id} title={title}  description={description} image={image} categories={categories} price={price} />
                    </li>
                )
            })
            }
        </Container>
    )
}