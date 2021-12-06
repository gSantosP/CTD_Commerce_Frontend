import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound'
import AboutUs from '../pages/AboutUs';

export default function RouterList() {
  return (
    <BrowserRouter>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about_us" element={ <AboutUs/> } />
          <Route path="/products" element={ <Products/> } />
          <Route path="/products/:categoryParam" element={ <Products/> } />
          <Route path="/products/productPage/:productId" element={ <ProductDetails/> } />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}