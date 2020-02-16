import axios from "axios";

export const getCeps = async (
  cep1: string,
  cep2: string,
  cep3: string,
  cep4: string,
  cep5: string
) => {
  try {
    const response = await axios.get(
      `http://localhost:3333/challenges/getCeps/${cep1}/${cep2}/${cep3}/${cep4}/${cep5}`
    );

    const ceps: any[] = response.data;
    return ceps;
  } catch (error) {
    console.log("getCeps error", error);
    return [];
  }
};
