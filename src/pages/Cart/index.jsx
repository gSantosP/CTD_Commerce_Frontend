import "./style.scss"
import { Table, Container, Button } from "react-bootstrap";
import { useContext } from "react";
import trashIcon from "../../assets/svg/icons/trash.svg"
import { CartContext } from "../../context/CartContest";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from "react-router";

export default function Cart() {

    const { productsInCart, removeProduct, clearProducts } = useContext(CartContext);
    const navigate = useNavigate();

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
                                const { id, title, price, imageUrl, category } = product
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
                            })}
                        </tbody>
                    </Table>
                    <div className="cart-button-box d-flex align-itens-center justify-content-between">
                        <Button  className="bkg-none clear-cart" onClick={() => clearProducts()}>Limpar Carrinho</Button>
                        <Button variant="primary">Finalizar Compra</Button>
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