import axios from "axios";
import { ChangeResponse } from "../interfaces/ChangeResponse";

export const calculateChange = async (
  buyValue: string,
  deliveredValue: string
) => {
  try {
    const response = await axios.get(
      `http://localhost:3333/challenges/getChange/${buyValue}/${deliveredValue}`
    );

    const changeResponse: ChangeResponse = response.data;
    return changeResponse;
  } catch (error) {
    console.log("calculateChange error", error);
    return {} as ChangeResponse;
  }
};
