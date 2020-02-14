import React, { Component } from "react";
import "./styles.css";

class Challenge2 extends Component {
  render() {
    return (
      <div className="c2-container">
        <label className="c2-label">Caixa</label>

        <input
          className="c2-input"
          type="number"
          placeholder="Valor da compra"
        />
        <input
          className="c2-input"
          type="number"
          placeholder="Valor entregue"
        />

        <div className="c2-button">Calcular</div>
      </div>
    );
  }
}

export default Challenge2;
