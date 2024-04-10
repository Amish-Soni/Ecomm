import * as React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const products = [
    {
      discount: "-40%",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1abf80c5c4c9988ff3756f34265f3e884a090b104af9eb5edd854d58494d5e?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
      name: "HAVIT HV-G92 Gamepad",
      thumbnails: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
      ],
      discountedPrice: "$120",
      originalPrice: "$160",
      ratingImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
      rating: 4.5,
      ratingCount: 88,
    },
    // Add more product objects as needed
  ];

  return (
    <article className="product-card">
      <div className="product-image-container">
        <div className="discount-badge">{product.discount}</div>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-thumbnails">
          {product.thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="product-thumbnail"
            />
          ))}
        </div>
      </div>
      <h2 className="product-name">{product.name}</h2>
      <div className="product-prices">
        <span className="discounted-price">{product.discountedPrice}</span>
        <span className="original-price">{product.originalPrice}</span>
      </div>
      <div className="product-rating">
        <img
          src={product.ratingImage}
          alt={`${product.rating} star rating`}
          className="rating-image"
        />
        <span className="rating-count">({product.ratingCount})</span>
      </div>
    </article>
  );
}

// function MyComponent() {
//   const products = [
//     {
//       discount: "-40%",
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1abf80c5c4c9988ff3756f34265f3e884a090b104af9eb5edd854d58494d5e?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
//       name: "HAVIT HV-G92 Gamepad",
//       thumbnails: [
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
//       ],
//       discountedPrice: "$120",
//       originalPrice: "$160",
//       ratingImage:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?apiKey=7a360ec08d6f4e77a8db74468c201ae2&",
//       rating: 4.5,
//       ratingCount: 88,
//     },
//     // Add more product objects as needed
//   ];

//   return (
//     <>
//       {products.map((product, index) => (
//         <ProductCard key={index} product={product} />
//       ))}
//     </>
//   );
// }
export default ProductCard;
