import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contributors from '../pages/Contributors';
import Products from '../pages/Products';

export default function RouterList() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about_us" element={ <Contributors/> } />
        <Route path="/products" element={ <Products/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}