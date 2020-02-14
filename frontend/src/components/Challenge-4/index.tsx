import React, { Component } from "react";
import "./styles.css";

export default class Challenge4 extends Component {
  render() {
    return (
      <div className="c4-container">
        <label className="c4-label">CEP</label>
        <div className="c4-sub-label">Digite os CEP's:</div>

        <input className="c4-input" type="text" placeholder="CEP 1" />
        <input className="c4-input" type="text" placeholder="CEP 2" />
        <input className="c4-input" type="text" placeholder="CEP 3" />
        <input className="c4-input" type="text" placeholder="CEP 4" />
        <input className="c4-input" type="text" placeholder="CEP 5" />

        <div className="c4-button">Buscar</div>
      </div>
    );
  }
}
