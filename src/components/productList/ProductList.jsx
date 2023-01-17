import React from "react";
import Product from "../product/Product";
import "./productList.css";
import product from "../../img/product.png";

const projetcs = [
  {
    id: 1,
    img: "https://github.com/JDPMJ/calculator-app/blob/master/assets/calculator-app-img-1.jpg",
    link: "https://github.com/JDPMJ/calculator-app"
  },
  {
    id: 2,
    img: product,
    link: "https://www.google.com/"
  },
  {
    id: 3,
    img: product,
    link: "https://www.google.com/"
  },
  {
    id: 4,
    img: product,
    link: "https://www.google.com/"
  },
  {
    id: 5,
    img: product,
    link: "https://www.google.com/"
  },
  {
    id: 6,
    img: product,
    link: "https://www.google.com/"
  },
  {
    id: 7,
    img: product,
    link: "https://www.google.com/"
  },
  {
    id: 8,
    img: product,
    link: "https://www.google.com/"
  }
];

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Proyectos Realizados</h1>
        <p className="pl-description">
          A continuación algunos proyectos realizados
        </p>
      </div>
      <div className="pl-container">
        <div className="pl-list">
          { projetcs.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          )) }
        </div>
      </div>
    </div>
  );
};

export default ProductList;