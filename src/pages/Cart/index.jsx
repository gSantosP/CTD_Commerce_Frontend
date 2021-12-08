import "./style.scss"
import { Table, Container, Button } from "react-bootstrap";
import { useEffect, useContext } from "react";
import trashIcon from "../../assets/svg/icons/trash.svg"
import { CartContext } from "../../context/CartContest";

export default function Cart() {

    const { products, removeProduct, clearProducts } = useContext(CartContext)

    useEffect(() => {
        console.log(products)
    }, [products])

    return (

        <Container>
            {
                products.length ?

                    <div className="carrinho-holder">
                        <h3>Seu Carrinho</h3>

                        <Table bordered responsive className="tabela-cart">
                            <thead>
                                <tr>
                                    <th >Produto</th>
                                    <th>Preço</th>
                                    <th >Quantidade</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(({ id, title, price, imageUrl, category }) => {
                                        return (
                                            <tr>
                                                <td className="col-6 row-class">
                                                    <div className="product-content-all">
                                                        <div className="product-content">
                                                            <div className="cart-img-holder">
                                                                <img src={imageUrl}></img>
                                                            </div>
                                                            <div className="txt-holder">
                                                                <p className="cart-name">{title}</p>
                                                                <p>{category.name}</p>
                                                            </div>
                                                        </div>
                                                        <div className="trash-holder"  >
                                                            <img src={trashIcon} onClick={()=> removeProduct()}></img>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td >
                                                    <div className="product-content-other">
                                                        {price}
                                                    </div>    
                                                      </td>
                                                        
                                                <td className="col-3" >
                                                    <div className="product-content-other">
                                                    <div className="quanti-content">
                                                        <p>1</p>
                                                        <div className="arrow-holder">

                                                        </div>
                                                    </div>
                                                    </div>
                                                </td>
                                                <td >
                                                <div className="product-content-other">
                                                    {price}
                                                </div>    
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>

                    
                    <div className="cart-button-box">
                    <p onClick={()=> clearProducts()}>Limpar Carrinho</p>        
                    <Button variant="primary">Efetuar Compra</Button>
                    </div>             
                    </div>
                   

                    :

                    <div className="carrinho-placeholder">
                        <h1>Ops! Parece que você não possui nenhum item no carrinho.</h1>
                        <p>Ir para Produtos</p>
                    </div>

            }
        </Container>
    )
}