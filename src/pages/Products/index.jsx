import {Container, CardGroup} from 'react-bootstrap'
import products from '../../temp/products.jsx'
import ProductCard from '../../components/ProductCard'
import ProductFilter from '../../components/ProductFilter/index.jsx'
import { useParams, useNavigate } from 'react-router'
import { useEffect, useState} from 'react'
import apiCall from '../../apiCall/index.js'
export default function Products(){

    const {categoryParam} = useParams();
    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);

    const navigate = useNavigate();

    


    useEffect(()=>{
       //setCategorias(apiCall("/categorias"))
        //let callResponse;

        //if(categoryParam === undefined)
        //    callResponse = apiCall("all")
        //else
        //    callResponse = apiCall(`produtos/${categoryParam}`)

        //if(callResponse.status)
           // navigate("*")
        //else
           // setProdutos(callResponse)


    },[categoryParam,navigate])
    


    return(
        <Container >
            <ProductFilter categoryArray/>
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