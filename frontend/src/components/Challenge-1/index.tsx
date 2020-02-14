import React, { Component } from "react";
import "./styles.css";

class Challenge1 extends Component {
  render() {
    return (
      <div className="c1-container">
        <label className="c1-label">Palíndromo</label>
        <div className="c1-sub-label">Escolha o intervalo:</div>

        <div className="c1-inputs-wrapper">
          <input className="c1-input" type="number" placeholder="Início" />
          <input className="c1-input" type="number" placeholder="Fim" />
        </div>

        <div className="c1-button">Imprimir</div>
      </div>
    );
  }
}

export default Challenge1;
