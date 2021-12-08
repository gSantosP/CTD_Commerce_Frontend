import "./style.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import NotFoundIlustration from '../../assets/svg/ilustrations/exception-ilustration.svg'
import MainTittle from "../../components/Tipografy/MainTittle"
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function NotFound() {

    const [count, setCount] = useState(5);

    const navigate = useNavigate();

    useEffect(() => {
        let time;
        if (count > 1) {
            time = setInterval(() => setCount(count - 1), 1000)
        }
        return () => clearInterval(time);
    }, [count])


    setTimeout(() => navigate("/"), 5000);


    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Not Found</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
            </HelmetProvider>
            <div id="not-found-content" className="d-flex align-items-center flex-column">
                <img src={NotFoundIlustration} alt="not found ilustration" />
                <MainTittle>Ops! Não encontramos o que você está procurando.</MainTittle>
                <p>Você será redirecionado em</p>
                <br />
                <spam>{count}</spam>
            </div>
        </>
    )
}