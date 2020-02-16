import React, { Component } from "react";
import { getCeps } from "../../services/challenge3-service";
import "./styles.css";
import BackArrow from "../../images/back.svg";
import _ from "lodash";

interface Challenge4Props {}
interface Challenge4State {
  cep1: string;
  cep2: string;
  cep3: string;
  cep4: string;
  cep5: string;
  ceps: any[];
  resultPage: boolean;
}

export default class Challenge4 extends Component<
  Challenge4Props,
  Challenge4State
> {
  state = {
    cep1: "",
    cep2: "",
    cep3: "",
    cep4: "",
    cep5: "",
    ceps: [] as any[],
    resultPage: false
  };

  handleSearch = async () => {
    const { cep1, cep2, cep3, cep4, cep5 } = this.state;

    await getCeps(cep1, cep2, cep3, cep4, cep5)
      .then(res => this.setState({ ceps: res as any[] }))
      .catch(r => this.setState({ ceps: r as any[] }));

    this.setState({ resultPage: true });
  };

  render() {
    const { cep1, cep2, cep3, cep4, cep5, ceps, resultPage } = this.state;

    return (
      <div className="c4-container">
        {resultPage ? (
          <div>
            <div>
              <img
                className="cursor-pointer"
                src={BackArrow}
                alt="Voltar"
                height={38}
                onClick={() => this.setState({ resultPage: false })}
              />
            </div>

            <div className="c4-cep-result-container">
              {ceps.map(resultCep => {
                if (_.size(resultCep) === 1) {
                  return (
                    <div className="c4-cep-result">
                      <label>CEP Inválido</label>
                    </div>
                  );
                }

                return (
                  <div className="c4-cep-result">
                    <label>{resultCep.cep}</label>
                    <label>Rua: {resultCep.logradouro}</label>
                    <label>Bairro: {resultCep.bairro}</label>
                    <label>Cidade: {resultCep.localidade}</label>
                    <label>Estado: {resultCep.uf}</label>
                    <label>IBGE: {resultCep.ibge}</label>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <>
            <label className="c4-label">CEP</label>
            <div className="c4-sub-label">Digite os CEP's:</div>

            <input
              className="c4-input"
              type="text"
              placeholder="CEP 1"
              value={cep1}
              onChange={e => this.setState({ cep1: e.currentTarget.value })}
            />
            <input
              className="c4-input"
              type="text"
              placeholder="CEP 2"
              value={cep2}
              onChange={e => this.setState({ cep2: e.currentTarget.value })}
            />
            <input
              className="c4-input"
              type="text"
              placeholder="CEP 3"
              value={cep3}
              onChange={e => this.setState({ cep3: e.currentTarget.value })}
            />
            <input
              className="c4-input"
              type="text"
              placeholder="CEP 4"
              value={cep4}
              onChange={e => this.setState({ cep4: e.currentTarget.value })}
            />
            <input
              className="c4-input"
              type="text"
              placeholder="CEP 5"
              value={cep5}
              onChange={e => this.setState({ cep5: e.currentTarget.value })}
            />

            <div className="c4-button" onClick={() => this.handleSearch()}>
              Buscar
            </div>
          </>
        )}
      </div>
    );
  }
}
