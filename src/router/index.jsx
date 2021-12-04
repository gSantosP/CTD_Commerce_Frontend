import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contributors from '../pages/Contributors';
import Home from '../pages/Home';
import Products from '../pages/Products';

export default function RouterList() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about_us" element={ <Contributors/> } />
          <Route path="/products" element={ <Products/> } />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}