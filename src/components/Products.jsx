import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/data', {
          signal: controller.signal,
        });
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <h1>Products</h1>
      {data.map((post) => {
        const { id, name, price, img } = post;
        return (
          <div className='card' key={id}>
            <h2>{name}</h2>
            <h1>{price}</h1>
            <img src={img} alt={name} />
          </div>
        );
      })}
    </>
  );
};

export default Products;
