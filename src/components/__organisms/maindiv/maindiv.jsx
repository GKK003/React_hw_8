import MainImg from "../../../assets/mainimg.png";
import MailBox from "../../../assets/mailimg.svg";
import { Text } from "../../__atoms/text/text";
import { Fetch } from "../../../fetch/fetch";
import { useEffect, useState } from "react";
import MainImgPhone from "../../../assets/mainforphone.png";
export function MainDiv() {
  const [data, setData] = useState([]);
  const [clickedBox, setClickedBox] = useState();

  useEffect(() => {
    Fetch(setData);
  }, []);

  return (
    <>
      <div className="main_div">
        <img src={MainImg} className="img" />
        <img src={MainImgPhone} className="img_phone" />

        <div className="second_div">
          <Text class="heading" text="Quotes" />
          <div
            className="box_div"
            style={{ height: clickedBox === 1 ? "70px" : "35px" }}
            onClick={() => {
              setClickedBox(1);
            }}
          >
            <Text
              class="author"
              text={data[0]?.author}
              style={{
                color: clickedBox === 1 ? "#1E1F36" : "#4b4c5f",
                fontWeight: clickedBox === 1 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 1 ? "block" : "none" }}
              text={data[0]?.quote}
            />
          </div>

          <div
            className="box_div"
            style={{ height: clickedBox === 2 ? "110px" : "35px" }}
            onClick={() => setClickedBox(2)}
          >
            <Text
              class="author"
              text={data[1]?.author}
              style={{
                color: clickedBox === 2 ? "#1E1F36" : "#4b4c5f",
                fontWeight: clickedBox === 2 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 2 ? "block" : "none" }}
              text={data[1]?.quote}
            />
          </div>

          <div
            className="box_div"
            style={{ height: clickedBox === 3 ? "85px" : "35px" }}
            onClick={() => setClickedBox(3)}
          >
            <Text
              class="author"
              text={data[2]?.author}
              style={{
                color: clickedBox === 3 ? "#1E1F36" : "#4b4c5f",
                fontWeight: clickedBox === 3 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 3 ? "block" : "none" }}
              text={data[2]?.quote}
            />
          </div>

          <div
            className="box_div"
            style={{ height: clickedBox === 4 ? "80px" : "35px" }}
            onClick={() => setClickedBox(4)}
          >
            <Text
              class="author"
              text={data[3]?.author}
              style={{
                color: clickedBox === 4 ? "#1E1F36" : "#4b4c5f",
                fontWeight: clickedBox === 4 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 4 ? "block" : "none" }}
              text={data[3]?.quote}
            />
          </div>

          <div
            className="box_div"
            style={{ height: clickedBox === 5 ? "85px" : "35px" }}
            onClick={() => setClickedBox(5)}
          >
            <Text
              class="author"
              text={data[4]?.author}
              style={{
                color: clickedBox === 5 ? "#1E1F36" : "#4b4c5f",
                fontWeight: clickedBox === 5 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 5 ? "block" : "none" }}
              text={data[4]?.quote}
            />
          </div>
        </div>
      </div>
    </>
  );
}
