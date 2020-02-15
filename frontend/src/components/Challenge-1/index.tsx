import React, { Component } from "react";
import "./styles.css";

import { getPalindromes } from "../../services/challenge1-service";

interface Challenge1Props {}
interface Challenge1State {
  init: string;
  end: string;
  palindromes: string[];
}

class Challenge1 extends Component<Challenge1Props, Challenge1State> {
  state = {
    init: "",
    end: "",
    palindromes: [] as string[]
  };

  handlePrint = () => {
    const { init, end } = this.state;
    getPalindromes(init, end).then(p => this.setState({ palindromes: p }));
  };

  render() {
    const { init, end, palindromes } = this.state;

    return (
      <div className="c1-container">
        <label className="c1-label">Palíndromo</label>
        <div className="c1-sub-label">Escolha o intervalo:</div>

        <div className="c1-inputs-wrapper">
          <input
            className="c1-input"
            type="number"
            placeholder="Início"
            value={init}
            onChange={e => this.setState({ init: e.currentTarget.value })}
          />
          <input
            className="c1-input"
            type="number"
            placeholder="Fim"
            value={end}
            onChange={e => this.setState({ end: e.currentTarget.value })}
          />
        </div>

        <div className="c1-button" onClick={() => this.handlePrint()}>
          Imprimir
        </div>

        <div className="c1-palindromes">
          {palindromes.map(p => (
            <span>{p + ", "}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default Challenge1;
