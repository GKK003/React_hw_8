import axios from "axios";

export async function Fetch(setData) {
  try {
    let products = await axios.get("https://dummyjson.com/quotes");

    setData(products.data);
  } catch (error) {
    console.log(error);
  }
}
