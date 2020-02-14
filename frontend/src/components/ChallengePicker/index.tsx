import React, { Component } from "react";
import "./styles.css";

interface ChallengePickerState {}
interface ChallengePickerProps {}

class ChallengePicker extends Component<
  ChallengePickerProps,
  ChallengePickerState
> {
  state = {};

  render() {
    return (
      <div className="cp-container">
        <div className="card">
          <span>Desafio</span>
          <span className="number">01</span>

          <label>Palíndromo</label>
        </div>
        <div className="card">
          <span>Desafio</span>
          <span className="number">02</span>

          <label>Caixa</label>
        </div>
        <div className="card">
          <span>Desafio</span>
          <span className="number">03</span>

          <label>Garagem</label>
        </div>
        <div className="card">
          <span>Desafio</span>
          <span className="number">04</span>

          <label>CEP</label>
        </div>
      </div>
    );
  }
}

export default ChallengePicker;
