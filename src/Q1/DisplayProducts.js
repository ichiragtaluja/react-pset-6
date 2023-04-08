import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function DisplayProducts() {
  const [productsData, setProductsData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const getProductsData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/products");
      if (response.status === 200) {
        setProductsData(response.data.products);
        // setDisplayData(response.data.products);
      }
    } catch (error) {}
  };
  const clickHandler = (name) => {
    const filteredList = productsData.filter(
      (product) => product.name === name
    );
    setDisplayData(filteredList);
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <>
      <h1>Question 1</h1>
      {productsData.map(({ name, price, desc, src }) => (
        <div>
          <button onClick={() => clickHandler(name)}>Show {name}</button>
        </div>
      ))}
      {displayData.map(({ name, price, inStock, desc, src }) => (
        <div>
          <img src={src} />
          <p>Name: {name}</p>
          <p>Price: {price}</p>
          <p>Description: {desc}</p>
        </div>
      ))}
    </>
  );
}
