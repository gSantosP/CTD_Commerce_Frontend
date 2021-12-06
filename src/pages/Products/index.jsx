import './style.scss';
import { Container, CardGroup } from 'react-bootstrap'
import ProductCard from '../../components/ProductCard'
import restClient from '../../services/restClient';
import { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Products() {

    const [products, setProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [categories, setCategories] = useState(null);

    const findCategoryes = useCallback(async () => {
        const response = await restClient.get("/category")
        setCategories(response.data);
    }, [])

    const findProducts = useCallback(async () => {
            let response;
            let data;
            if (currentCategory !== null) {
                response = await restClient.get(`/category/${currentCategory}`);
                data = response.data.products;
            } else {
                response = await restClient.get("/products")
                data = response.data;
            }
            setProducts(data);
    }, [setProducts, currentCategory])

    useEffect(() => {
        try{
            findCategoryes();
            findProducts();
        } catch {
            Swal.fire({
                title: "Ops! ocorreu um erro.",
                text: "Parece que a conexão com o servidor falhou.",
                icon: "error"
            })
        }
    }, [findCategoryes, findProducts])

    function handlerCategory(cat) {
        if (currentCategory === cat) {
            setCurrentCategory(null);
        } else {
            setCurrentCategory(cat)
        }
    }

    return (
        <Container className="products-content">
            {categories != null && 
                <div className="d-flex justify-content-center">
                    <ul className="list-unstyled px-2 py-2 category-group nav">
                    {categories.map(({id, name}) => {
                        return (
                            <li className="category-item" key={id}>
                                <button
                                    className={`category-btn ${currentCategory === id ? "active" : ""}`}
                                    onClick={() => handlerCategory(id)}>
                                    {name}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>}
            <CardGroup className="list-unstyled">
                {products.map(({ id, title, price, imageUrl }) => {
                    return (
                        <li className="grid-item" key={id} >
                            <ProductCard id={id}
                                title={title}
                                image={imageUrl}
                                price={price}
                            />
                        </li>
                    )
                })
                }</CardGroup>

        </Container>
    )
}