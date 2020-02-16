import React, { Component } from "react";
import { saveVehicle } from "../../services/challenge3-service";
import "./styles.css";

interface Challenge3Props {}
interface Challenge3State {
  modelo: string;
  anoFabricacao: string;
  qtdPortas: number;
  marca: string;
  texto: string;
  tipoVeiculo: string;
}

export default class Challenge3 extends Component<
  Challenge3Props,
  Challenge3State
> {
  state = {
    modelo: "",
    anoFabricacao: "",
    qtdPortas: 0,
    marca: "",
    texto: "",
    tipoVeiculo: "Carro"
  };

  handleSave = () => {
    const {
      modelo,
      anoFabricacao,
      qtdPortas,
      marca,
      texto,
      tipoVeiculo
    } = this.state;

    saveVehicle(modelo, anoFabricacao, qtdPortas, marca, texto, tipoVeiculo);
  };

  render() {
    const {
      modelo,
      anoFabricacao,
      qtdPortas,
      marca,
      texto,
      tipoVeiculo
    } = this.state;

    return (
      <div className="c3-container">
        <label className="c1-label">Garagem</label>

        <div className="c3-checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={tipoVeiculo === "Carro" ? true : false}
              onClick={() => this.setState({ tipoVeiculo: "Carro" })}
            />
            Carro
          </label>
          <label>
            <input
              type="checkbox"
              checked={tipoVeiculo === "Moto" ? true : false}
              onClick={() => this.setState({ tipoVeiculo: "Moto" })}
            />
            Moto
          </label>
        </div>

        <input
          className="c3-input"
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={e => this.setState({ modelo: e.currentTarget.value })}
        />
        <input
          className="c3-input"
          type="text"
          placeholder="Ano de fabricação"
          value={anoFabricacao}
          onChange={e =>
            this.setState({ anoFabricacao: e.currentTarget.value })
          }
        />
        <input
          className="c3-input"
          type="number"
          placeholder="Quantidade de portas"
          value={qtdPortas || ""}
          onChange={e =>
            this.setState({ qtdPortas: Number(e.currentTarget.value) })
          }
        />
        <input
          className="c3-input"
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={e => this.setState({ marca: e.currentTarget.value })}
        />
        <input
          className="c3-input"
          type="text"
          placeholder="Dados"
          value={texto}
          onChange={e => this.setState({ texto: e.currentTarget.value })}
        />

        <div className="c3-button" onClick={() => this.handleSave()}>
          Gravar
        </div>
      </div>
    );
  }
}
