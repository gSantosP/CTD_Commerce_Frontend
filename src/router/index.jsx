import { BrowserRouter, Routes } from 'react-router-dom';
import Header from '../components/Header';
import ProductCard from "../components/ProductCard"
import ContribuitorsCard from "../components/ContribuitorsCards"

export default function RouterList() {
  return (
    <BrowserRouter>
      <Header />
      <ProductCard id={1} title="titulo" description="descricao" price={100.00} />
      <ContribuitorsCard name="Matheus" sobrenome="Silva" />
      <Routes>

      </Routes>
    </BrowserRouter>
  )
}