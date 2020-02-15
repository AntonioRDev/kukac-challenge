import axios from "axios";

export const getPalindromes = async (init: string, end: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3333/challenges/getPalindromes/${init}/${end}`
    );

    const palindromes: Array<string> = response.data;
    return palindromes;
  } catch (error) {
    console.log("getPalindromes error", error);
    return [];
  }
};
