import React from "react";
import "./about.css";
import empresa from "../../img/empresa.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={empresa} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre Mi</h1>
        <p className="a-sub">
          Habilidades
        </p>
        <p className="a-description">
          Se podría decir, que poseo cierta experiencia en cuanto al manejo de tecnologías
          para el desarrollo de proyectos variados con alcance multiplataforma considerando el uso
          de tecnologías como react, react native, flutter, java entre otros. Asimismo, poseo
          algunos conocimientos en el manejo de software y hardware a un nivel intermedio dependiendo
          de los requerimientos en cuestión, tomando en cuenta aparatados como la construcción de
          ordenadores o la configuración e instalación de programas.
          <br />
          <br />
          Por otra parte, también poseo ciertas habilidades en ámbitos como diseño gráfico y la
          edición de contenido multimedia tomando en cuenta apartados como la redacción de contenido,
          la generación de ilustraciones gráficas o la edición de audio y video.
        </p>
        {/* <div className="a-award">
          <img src={trofeo} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              International Desing
            </h4>
            <p className="a-award-description">
              Descripción del reconocimiento
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;