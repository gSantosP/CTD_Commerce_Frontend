import "./style.scss"
import { CartContext } from "../../context/CartContest";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router";
import arrowUp from "../../assets/svg/icons/Vector1.svg";
import arrowDown from "../../assets/svg/icons/arrow-down.svg";
import Swal from "sweetalert2";


export default function CartMobile() {

    const { productsInCart, removeProduct, clearProducts, saveProduct } = useContext(CartContext);
    const origin = window.location.origin
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

    const toThank = () => {
        Swal.fire({
            icon: "success",
            title: 'Obrigado por prestigiar nosso projeto! Esperamos que tenha gostado.',
            background: "#EEEEEE"
        })
    }

    return (
        <Container className="mobile-container" fluid>
            <div className="mobile-cards-holder ">
                <div className="mobile-main-title"><h3>Seu Carrinho</h3></div>
                {productsInCart.map((product, index) => {
                    const { id, title, price, imageUrl, quantity } = product;
                    return (
                        <div className="mobile-card " key={id}>
                            <div className="mobile-cart-content">
                                <div className="mobile-img-holder">
                                    <img src={`${origin}/${imageUrl}`} alt={title} />
                                </div>
                                <div className="mobile-content-box">
                                    <div className="mobile-title">
                                        <p>{title}</p>
                                    </div>
                                    <div className="middle-box">
                                        <div className="middle-box-main">Quantidade:
                                            <div className="middle-box-items">
                                                <button className="bkg-none" onClick={() => decreaseQuantity(product)}> <img src={arrowDown} alt="seta para abaixo" /> </button>
                                                {quantity}
                                                <button className="bkg-none" onClick={() => addQuantity(product)}>  <img src={arrowUp} alt="seta para cima" /> </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="final-value-holder">
                                            <p className="final-value-text">Total:
                                                <span className="final-value-number"> R${(price * quantity).toFixed(2)}</span>
                                            </p>
                                        </div>
                                        {window.innerWidth > 582 && (<span className="field-separator">
                                            /
                                        </span>
                                        )
                                        }
                                        <p className="unity-price">Preço por unidade: R${price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-cart-footer">
                                <button className="bkg-none mobile-remove-btn" onClick={() => removeProduct(product)}>Remover Produto</button>
                                <button className="bkg-none" onClick={() => navigate(`/product-details/${id}`)}>Ver página</button>
                            </div>
                        </div>

                    )
                }
                )
                }

                <div className="mobile-holder-footer">
                    <button className="clear-cart-btn bkg-none" onClick={() => clearProducts()}>Limpar Carrinho</button>
                    <div className="value-btn-box">
                        <div>Valor Total:
                            <span className="price">
                                R${productsInCart.reduce((acum, { price, quantity }) => {
                                    return acum + (price * quantity)
                                }, 0).toFixed(2)}
                            </span>
                        </div>
                        <button onClick={() => toThank()} variant="primary">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </Container>
    )

}