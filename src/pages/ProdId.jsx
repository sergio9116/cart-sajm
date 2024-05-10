import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ProdInfo from '../components/prodId/ProdInfo';
import './styles/prodId.css';
import ProdSlider from '../components/prodId/ProdSlider';
import ProdSimilar from '../components/prodId/ProdSimilar';

const ProdId = () => {

  const [product, getProduct] = useFetch();

  const params = useParams();

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${params.id}`;
    getProduct(url);
  }, [params.id]);

  return (
    <section className='prodid'>
      <ProdSlider
        product={product}
      />
      <ProdInfo
        product={product}
      />
      <ProdSimilar
        product={product}
      />
    </section>
  )
}

export default ProdId;