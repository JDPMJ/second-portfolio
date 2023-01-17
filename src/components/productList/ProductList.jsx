import React from "react";
import Product from "../product/Product";
import "./productList.css";
//import product from "../../img/product.png";
import calculatorApp from "../../img/calculator-app-presentation.png";
import taskSQLiteFlutterApp from "../../img/task-sqlite-flutter-app-presentation.png";

const projetcs = [
  {
    id: 1,
    img: calculatorApp,
    link: "https://github.com/JDPMJ/calculator-app"
  },
  {
    id: 2,
    img: taskSQLiteFlutterApp,
    link: "https://github.com/JDPMJ/task-sqlite-flutter-app"
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