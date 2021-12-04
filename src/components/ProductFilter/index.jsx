import { Dropdown } from 'react-bootstrap'
import categories from '../../temp/categories.js'
import { useState } from 'react'
import { useNavigate, useParams } from "react-router";
import './styles.scss'


export default function ProductFilter(categoryArray){
    const [option, setOption] = useState('Todos')

    const {categoryParam} = useParams();
    const navigate = useNavigate();

   
    return(
        <Dropdown>
                <Dropdown.Toggle className="filtro-produto" id="dropdown-basic">
                    {categoryParam === undefined ? "Todos Produtos" : option}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className="filtro-item" onClick={() => navigate("/products")}>Todos Produtos</Dropdown.Item>
                    {
                        categories.map(({ id, name }) => {
                            return (
                                <li key={id} onClick={() => navigate(`/products/${name}`)}>
                                    <Dropdown.Item className="filtro-item" key={id} onClick={() => setOption(name)}>{name}</Dropdown.Item>
                                </li>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
    )
}