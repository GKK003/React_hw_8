import axios from "axios";

export async function Fetch(setData) {
  try {
    let quotes = await axios.get("https://dummyjson.com/quotes");

    setData(quotes.data.quotes);
  } catch (error) {
    console.log(error);
  }
}
