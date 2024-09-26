import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

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
    return <>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    </>

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
const filterProduct=(cat)=>{
const updatedList=data.filter((x)=>x.category===cat);
setFilter(updatedList);
}
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>{
            setFilter(data)
          }}>ALL</button>
          <button className="btn btn-outline-dark me-2"onClick={()=>{
            filterProduct("LV")
          }}>
            LOUIS VUITTON</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{
            filterProduct("GUCCI")
          }}>GUCCI</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{
            filterProduct("FENDI")
          }}>FENDI</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{
            filterProduct("YSL")
          }}>YSL</button>
           <button className="btn btn-outline-dark me-2" onClick={()=>{
            filterProduct("CH")
          }}>Channel</button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img src={product.image} className='card-img-top h-[250px]' height='250px' alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.name.substring(0,12)}...</h5>
                  <p className="card-text lead fw-bold">
                    ${product.price}
                  </p>
                  <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>
                  Buy Now
                  </NavLink>
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
