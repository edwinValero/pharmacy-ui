import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CreateProduct } from './components/product/createProduct';
import ProductTableNavigate from './pages/products';
import { CreateReception } from './components/reception/createReception';
import ReceptionTableNavigate from './components/receptionTableNavigate';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route path="/pharmacy-ui" element={<Layout />}>
        <Route
          path="createProduct"
          element={<CreateProduct></CreateProduct>}
        ></Route>
        <Route
          path="products"
          element={<ProductTableNavigate></ProductTableNavigate>}
        ></Route>
        <Route
          path="createReception"
          element={<CreateReception></CreateReception>}
        ></Route>
        <Route
          path="receptions"
          element={<ReceptionTableNavigate></ReceptionTableNavigate>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
