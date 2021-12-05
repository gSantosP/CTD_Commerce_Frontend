import {Container, CardGroup} from 'react-bootstrap'
import ProductCard from '../../components/ProductCard'
import ProductFilter from '../../components/ProductFilter/index.jsx'
import api from '../../services/api';
import { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Products(){

    const [products, setProducts] = useState([]);

    const findProducts = useCallback(async () => {
        try{
            const response = await api.get("/products")
            setProducts(response.data);
        }catch{
            Swal.fire({
                title: "Ops! ocorreu um erro.",
                text: "Parece que a conexão com o servidor falhou.",
                icon: "error"
            })
        }
    }, [setProducts])

    useEffect(  findProducts, [findProducts])

    return(
        <Container >
            <ProductFilter categoryArray/>
            <CardGroup className="list-unstyled">
                {products.map(({id, title, price, description, imageUrl, category})=>{
                    return (
                        <li className="grid-item" key={id} >
                        <ProductCard id={id} title={title}  description={description} image={imageUrl} categories={category.name} price={price} />
                        </li>
                    )
                })
            }</CardGroup>
            
        </Container>
    )
}