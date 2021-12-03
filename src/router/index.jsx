import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contributors from '../pages/Contributors';

export default function RouterList() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/colaboradores" element={ <Contributors/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}