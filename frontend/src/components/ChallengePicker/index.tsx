import React, { Component } from "react";
import "./styles.css";

import Challenge1 from "../Challenge-1";
import Challenge2 from "../Challenge-2";
import Challenge3 from "../Challenge-3";
import Challenge4 from "../Challenge-4";

interface ChallengePickerState {
  currentChallenge: number;
}

interface ChallengePickerProps {}

class ChallengePicker extends Component<
  ChallengePickerProps,
  ChallengePickerState
> {
  state = {
    currentChallenge: 1
  };

  renderChallenge = () => {
    const { currentChallenge } = this.state;

    switch (currentChallenge) {
      case 1:
        return <Challenge1 />;
      case 2:
        return <Challenge2 />;
      case 3:
        return <Challenge3 />;
      case 4:
        return <Challenge4 />;
      default:
        return <> </>;
    }
  };

  render() {
    return (
      <>
        <div className="cp-container">
          <div
            className="cp-card"
            onClick={() => this.setState({ currentChallenge: 1 })}
          >
            <span>Desafio</span>
            <span className="number">01</span>

            <label>Palíndromo</label>
          </div>
          <div
            className="cp-card"
            onClick={() => this.setState({ currentChallenge: 2 })}
          >
            <span>Desafio</span>
            <span className="number">02</span>

            <label>Caixa</label>
          </div>
          <div
            className="cp-card"
            onClick={() => this.setState({ currentChallenge: 3 })}
          >
            <span>Desafio</span>
            <span className="number">03</span>

            <label>Garagem</label>
          </div>
          <div
            className="cp-card"
            onClick={() => this.setState({ currentChallenge: 4 })}
          >
            <span>Desafio</span>
            <span className="number">04</span>

            <label>CEP</label>
          </div>
        </div>

        <div>{this.renderChallenge()}</div>
      </>
    );
  }
}

export default ChallengePicker;
