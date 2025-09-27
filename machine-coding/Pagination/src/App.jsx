import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const PAGE_SIZE = 10;

const App = () => {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currPage + PAGE_SIZE
  const end = start + PAGE_SIZE

  console.log(noOfPages, 'no')

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");
    const data = await response.json();
    setProducts(data.products);
  };

  const handlePageChange = (n) => {
    setCurrPage(n)
  }

  return (
    <div>
      <h1>Pagination</h1>
      <div className="products">
        {products.length &&
          products.slice(start,end).map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.thumbnail}
                title={product.title}
              />
            );
          })}
      </div>
      <div className="pagination-container">
        <button disabled={currPage === 0} className="page-number" onClick={() => setCurrPage(currPage => currPage - 1)}><span >{'<-'}</span></button>
        {[
          ...Array(20)
            .keys()
            .map((n) => {
              return (
                <span className={"page-number " + (n === currPage) ? 'active': ' ' } key={n} onClick={() => handlePageChange(n)}>
                  {n}
                </span>
              );
            }),
        ]}
        <button disabled={currPage === noOfPages - 1} className="page-number" onClick={() => setCurrPage(currPage => currPage + 1)}><span >{'->'}</span></button>
      </div>
    </div>
  );
};

export default App;
