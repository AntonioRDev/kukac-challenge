import axios from "axios";
import { Passeio } from "../models/Passeio";
import { Moto } from "../models/Moto";

export const saveVehicle = async (
  modelo: string,
  anoFabricacao: string,
  qtdPortas: number,
  marca: string,
  texto: string,
  tipoVeiculo: string
) => {
  if (tipoVeiculo === "Carro") {
    const vehicle: Passeio = new Passeio(
      modelo,
      anoFabricacao,
      qtdPortas,
      marca,
      texto
    );

    try {
      const response = await axios.post(
        `http://localhost:3333/challenges/saveVehicle`,
        vehicle
      );
      console.log(response);
    } catch (error) {
      console.log("saveVehicle error", error);
    }
  } else {
    const vehicle: Moto = new Moto();

    try {
      const response = await axios.post(
        `http://localhost:3333/challenges/saveVehicle`,
        vehicle
      );
      console.log(response);
    } catch (error) {
      console.log("saveVehicle error", error);
    }
  }
};
