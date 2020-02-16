import { Veiculo } from "../interfaces/Veiculo";

export class Passeio implements Veiculo {
  modelo: string;
  anoFabricacao: string;
  qtdPortas: number;
  marca: string;
  texto: string;

  constructor(
    modelo: string,
    anoFabricacao: string,
    qtdPortas: number,
    marca: string,
    texto: string
  ) {
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.qtdPortas = qtdPortas;
    this.marca = marca;
    this.texto = texto;
  }
}
