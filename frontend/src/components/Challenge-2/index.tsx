import React, { Component } from "react";
import "./styles.css";
import { ChangeResponse } from "../../interfaces/ChangeResponse";
import { calculateChange } from "../../services/challenge2-service";
import Nota100 from "../../images/nota100.jpg";
import Nota10 from "../../images/nota10.png";
import Nota1 from "../../images/nota1.jpg";
import _ from "lodash";

interface Challenge2Props {}
interface Challenge2State {
  buyValue: string;
  deliveredValue: string;
  changeResponse: ChangeResponse;
}

class Challenge2 extends Component<Challenge2Props, Challenge2State> {
  state = {
    buyValue: "",
    deliveredValue: "",
    changeResponse: {} as ChangeResponse
  };

  handleCalculate = () => {
    const { buyValue, deliveredValue } = this.state;

    if (Number(buyValue) < Number(deliveredValue)) {
      calculateChange(buyValue, deliveredValue)
        .then(res => this.setState({ changeResponse: res }))
        .catch(err => this.setState({ changeResponse: err }));
    }
  };

  render() {
    const { buyValue, deliveredValue, changeResponse } = this.state;

    return (
      <div className="c2-container">
        <label className="c2-label">Caixa</label>

        <input
          className="c2-input"
          type="number"
          placeholder="Valor da compra"
          value={buyValue}
          onChange={e => this.setState({ buyValue: e.currentTarget.value })}
        />
        <input
          className="c2-input"
          type="number"
          placeholder="Valor entregue"
          value={deliveredValue}
          onChange={e =>
            this.setState({ deliveredValue: e.currentTarget.value })
          }
        />

        <div className="c2-button" onClick={() => this.handleCalculate()}>
          Calcular
        </div>

        {_.size(changeResponse) > 0 && (
          <div className="c2-cr-container">
            <div className="c2-cr-header">
              <label>
                Valor da compra:{" "}
                <span className="c2-cr-value">R$ {buyValue}</span>
              </label>
              <label>
                Valor do troco:{" "}
                <span className="c2-cr-value">R$ {changeResponse.change}</span>
              </label>
              <label>
                Número mínimo de notas:{" "}
                <span className="c2-cr-value">{changeResponse.minNotes}</span>
              </label>
            </div>

            <div className="c2-cr-body">
              <div className="c2-cr-note-container">
                <label>{changeResponse.counter100} nota(s) de:</label>
                <img src={Nota100} alt="Nota de R$100" height={100} />
              </div>
              <div className="c2-cr-note-container">
                <label>{changeResponse.counter10} nota(s) de:</label>
                <img src={Nota10} alt="Nota de R$10" height={100} />
              </div>
              <div className="c2-cr-note-container">
                <label>{changeResponse.counter1} nota(s) de:</label>
                <img src={Nota1} alt="Nota de R$1" height={100} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Challenge2;
