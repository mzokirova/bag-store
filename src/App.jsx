import './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Feature from './pages/Feature/Feature'
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Error from './pages/Error/Error';
import SingleProduct from './components/Products/SingleProduct';
import Category from './components/Category/Category';


function App() {

  return (
    <>
      <Layout>
        
      <Routes>
          <Route index element={<Home/>} />
          <Route path='/feature' element={<Feature/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/category' element={<Category />} />
          <Route path='/category/:productId' element={ <SingleProduct/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='*' element={<Error/> } />     
      </Routes>
      </Layout>
    </>
  )
}

export default App;
