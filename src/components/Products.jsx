import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
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
        setFilter(response.data);
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

  // const Loading = () => {
  //   return (
  //     <>
  //       Loading...
  //     </>
  //   );
  // };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">ALL</button>
          <button className="btn btn-outline-dark me-2">LOUIS VUITTON</button>
          <button className="btn btn-outline-dark me-2">GUCCI</button>
          <button className="btn btn-outline-dark me-2">FENDI</button>
          <button className="btn btn-outline-dark me-2">YSL</button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img src={product.image} className='card-img-top h-[250px]' height='250px' alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.name.substring(0,12)}</h5>
                  <p className="card-text">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className='container my-5 py-5   '>
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center mb-5 pb-5'>Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? " " : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
