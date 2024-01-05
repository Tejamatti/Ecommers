// // ProductList.js
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import productsData from './products.json';

// const ProductsWrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
// `;

// const ProductCard = styled.div`
//   border: 1px solid #ddd;
//   padding: 15px;
//   text-align: center;

//   img {
//     max-width: 100%;
//     height: auto;
//   }

//   p {
//     margin: 10px 0;
//     font-size: 16px;
//   }
// `;

// const ProductList = () => {
//   const [originalProducts, setOriginalProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const products = productsData.products;
//     setOriginalProducts(products);
//     setFilteredProducts(products);
//   }, []);

//   useEffect(() => {
//     // Filter products based on the search term
//     const filtered = originalProducts.filter(
//       (product) =>
//         product.name &&
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchTerm, originalProducts]);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Featured Products</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <button onClick={() => setSearchTerm('')}>Clear</button>
//       </div>
//       <ProductsWrapper>
//         {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id}>
//               <img src={product.image} alt={product.name} />
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//               {/* Add more details as needed */}
//             </ProductCard>
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </ProductsWrapper>
//     </div>
//   );
// };

// export default ProductList;




import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import productsData from './products.json';

const ProductsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    margin: 10px 0;
    font-size: 16px;
  }
`;

const ProductList = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  useEffect(() => {
    // Filter products based on the search term
    const filtered = products.filter((product) =>
      product && product.name && searchTerm &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div>
      <h2>Featured Products</h2>
      <ProductsWrapper>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              {/* Add more details as needed */}
            </ProductCard>
          ))
        ) : (
          <p>No products found</p>
        )}
      </ProductsWrapper>
    </div>
  );
};

export default ProductList;