import {Container, CardGroup} from 'react-bootstrap'
import products from '../../temp/products.jsx'
import ProductCard from '../../components/ProductCard'
import ProductFilter from '../../components/ProductFilter/index.jsx'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import apiCall from '../../apiCall/index.js'
export default function Products(){

    const {categoryParam} = useParams();
    

    useEffect(()=>{


        //if(categoryParam === undefined)
        //     apiCall("all")
        //else
        //    apiCall(`categorias/${categoryParam}`)

    },[categoryParam])


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