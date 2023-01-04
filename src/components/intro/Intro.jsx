import React from "react";
import "./intro.css";
import user from "../../img/user.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-bg-font"></div>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hola, mi nombre es</h2>
          <h1 className="i-name">Daniel</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Graphics designer</div>
              <div className="i-title-item">Editor</div>
              <div className="i-title-item">Mobile developer</div>
            </div>
          </div>
          <p className="i-description">
            Poseo ciertas habilidades respecto al desarrollo de aplicaciones
            web, de escritorio y móviles, con alcances variados dependiendo de la
            complejidad de un proyecto en cuestión.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={user} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;