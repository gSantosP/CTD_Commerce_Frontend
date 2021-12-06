import './style.scss';
import { Container, CardGroup } from 'react-bootstrap'
import ProductCard from '../../components/ProductCard'
import api from '../../services/api';
import { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Products() {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);

    const findProducts = useCallback(async () => {
        try {
            let urlPath = "/products";
            let response;
            let data;
            if (category !== null) {
                urlPath = `/category/${category}`;
                response = await api.get(urlPath);
                data = response.data.products;
            } else {
                response = await api.get(urlPath)
                data = response.data;
            }
            setProducts(data);
        } catch {
            Swal.fire({
                title: "Ops! ocorreu um erro.",
                text: "Parece que a conexão com o servidor falhou.",
                icon: "error"
            })
        }
    }, [setProducts, category])

    function handlerCategory(cat) {
        if (category === cat) {
            setCategory(null);
        } else {
            setCategory(cat)
        }
    }

    useEffect(findProducts, [findProducts])

    return (
        <Container className="products-content">
            <div className="d-flex justify-content-center">
                <div className="d-flex px-2 py-2 category-filter-group">
                    <button
                        className={`category-btn ${category === 1 ? "active" : ""}`}
                        onClick={() => handlerCategory(1)}>
                        Eletrônico
                    </button>
                    <button
                        className={`category-btn ${category === 4 ? "active" : ""}`}
                        onClick={() => handlerCategory(4)}>
                        Roupas Femininas
                    </button>
                    <button
                        className={`category-btn ${category === 3 ? "active" : ""}`}
                        onClick={() => handlerCategory(3)}>
                        Roupas Masculinas
                    </button>
                    <button
                        className={`category-btn ${category === 2 ? "active" : ""}`}
                        onClick={() => handlerCategory(2)}>
                        Joalheria
                    </button>
                </div>
            </div>
            <CardGroup className="list-unstyled">
                {products.map(({ id, title, price, description, imageUrl, category }) => {
                    return (
                        <li className="grid-item" key={id} >
                            <ProductCard id={id} title={title} image={imageUrl} price={price} />
                        </li>
                    )
                })
                }</CardGroup>

        </Container>
    )
}