import MainImg from "../../../assets/mainimg.png";
import MailBox from "../../../assets/mailimg.svg";
import { Text } from "../../__atoms/text/text";
import { Fetch } from "../../../fetch/fetch";
import { useEffect, useState } from "react";
import MainImgPhone from "../../../assets/mainforphone.png";
import Arrow from "../../../assets/arrow.png";
export function MainDiv() {
  const [data, setData] = useState([]);
  const [clickedBox, setClickedBox] = useState();
  const [rotate, setRotate] = useState();

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
                fontWeight: clickedBox === 1 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 1 ? "block" : "none" }}
              text={data[0]?.quote}
            />

            <img
              src={Arrow}
              style={{
                position: "absolute",
                top: "10px",
                right: "0%",
                transform:
                  clickedBox === 1 ? "rotate(180deg)" : "rotate(360deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>

          <div
            className="box_div"
            style={{ height: clickedBox === 2 ? "110px" : "35px" }}
            onClick={() => {
              setClickedBox(2);
            }}
          >
            <Text
              class="author"
              text={data[1]?.author}
              style={{
                fontWeight: clickedBox === 2 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 2 ? "block" : "none" }}
              text={data[1]?.quote}
            />
            <img
              src={Arrow}
              style={{
                position: "absolute",
                top: "10px",
                right: "0%",
                transform:
                  clickedBox === 2 ? "rotate(180deg)" : "rotate(360deg)",
                transition: "transform 0.3s ease",
              }}
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
                fontWeight: clickedBox === 3 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 3 ? "block" : "none" }}
              text={data[2]?.quote}
            />

            <img
              src={Arrow}
              style={{
                position: "absolute",
                top: "10px",
                right: "0%",
                transform:
                  clickedBox === 3 ? "rotate(180deg)" : "rotate(360deg)",
                transition: "transform 0.3s ease",
              }}
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
                fontWeight: clickedBox === 4 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 4 ? "block" : "none" }}
              text={data[3]?.quote}
            />

            <img
              src={Arrow}
              style={{
                position: "absolute",
                top: "10px",
                right: "0%",
                transform:
                  clickedBox === 4 ? "rotate(180deg)" : "rotate(360deg)",
                transition: "transform 0.3s ease",
              }}
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
                fontWeight: clickedBox === 5 ? "700" : "400",
              }}
            />
            <Text
              class="quote"
              style={{ display: clickedBox === 5 ? "block" : "none" }}
              text={data[4]?.quote}
            />

            <img
              src={Arrow}
              style={{
                position: "absolute",
                top: "10px",
                right: "0%",
                transform:
                  clickedBox === 5 ? "rotate(180deg)" : "rotate(360deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
