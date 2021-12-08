import "./style.scss"
import { Table, Container, Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import trashIcon from "../../assets/svg/icons/trash.svg"
import { CartContext } from "../../context/CartContest";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from "react-router";
import arrowUp from "../../assets/svg/icons/Vector1.svg"
import arrowDown from "../../assets/svg/icons/arrow-down.svg"


export default function Cart() {

    const { productsInCart, removeProduct, clearProducts, saveProduct } = useContext(CartContext);

    //const [valorTotal , setValorTotal] = useState{1}
    const navigate = useNavigate();


    const addQuantity = (product) => {
        product.quantity = product.quantity + 1
        saveProduct(product)
    }

    const decreaseQuantity = (product) => {
        if (product.quantity > 1) {
            product.quantity = product.quantity - 1
            saveProduct(product)
        }
    }


    useEffect(() => {

    })

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>CTD-Commerce | Carrinho</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
            </HelmetProvider>
            <Container className="cart-content">
                {productsInCart.length ? (
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
                                {productsInCart.map((product) => {
                                    const { id, title, price, imageUrl, category, quantity } = product
                                    return (
                                        <tr key={id}>
                                            <td className="col-6 row-class">
                                                <div className="product-content-all">
                                                    <div className="product-content">
                                                        <div className="cart-img-holder">
                                                            <img src={imageUrl} alt={title}></img>
                                                        </div>
                                                        <div className="txt-holder">
                                                            <p className="cart-name">{title}</p>
                                                            <p>{category.name}</p>
                                                        </div>
                                                    </div>
                                                    <Button className="bkg-none">
                                                        <img src={trashIcon} onClick={() => removeProduct(product)} alt="trash-icon"></img>
                                                    </Button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-content-other">
                                                    {price.toFixed(2)}
                                                </div>
                                            </td>
                                            <td className="col-3" >
                                                <div className="product-content-other">
                                                    <div className="quanti-content">
                                                        <button className="quanti-btn-card bkg-none" onClick={() => decreaseQuantity(product)}>
                                                            <img className="icon-img" alt="icon-arrow-down" src={arrowDown}/>
                                                        </button>
                                                        <p className="quantity-text">{quantity}</p>
                                                        <button className="quanti-btn-card bkg-none" onClick={() => addQuantity(product)} >
                                                            <img className="icon-img" alt="icon-arrow-up" src={arrowUp}/>
                                                        </button>
                                                </div>
                                                </div>
                                            </td>
                                            <td >
                                                <div className="product-content-other">
                                                    {(price * quantity).toFixed(2)}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                        <div className="cart-footer-box  d-flex align-items-end justify-content-between">
                            <Button className="bkg-none clear-cart" onClick={() => clearProducts()}>Limpar Carrinho</Button>
                            <div className="cart-button-box">
                                <div>Valor Total: 
                                    <span className="price">
                                    R${productsInCart.reduce((acum, { price, quantity }) => {
                                            return acum + (price * quantity)
                                    }, 0).toFixed(2)}   
                                    </span>
                                </div>
                                <Button variant="primary">Finalizar Compra</Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="carrinho-placeholder d-flex flex-column align-items-center justify-content-center">
                        <h1>Ops! Parece que você não possui nenhum item no carrinho.</h1>
                        <Button onClick={() => navigate("/products")} className="send-to-back">Voltar para a pagina de produtos</Button>
                    </div>
                )}
            </Container>
        </>
    )
}