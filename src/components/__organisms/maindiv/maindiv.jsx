import MainImg from "../../../assets/mainimg.png";
import MailBox from "../../../assets/mailimg.svg";
import { Text } from "../../__atoms/text/text";
import { Fetch } from "../../../fetch/fetch";
import { useEffect, useState } from "react";
export function MainDiv() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState("none");
  const [height, setHeight] = useState();

  useEffect(() => {
    Fetch(setData);
  }, []);

  return (
    <>
      <div className="main_div">
        <div className="img_box">
          <img src={MainImg} />
          <img className="mail_img" src={MailBox} />
        </div>
        <div className="second_div">
          <Text class="heading" text="Quotes" />
          {data.slice(0, 5).map((quotes) => (
            <div
              className="box_div"
              style={{
                height: height,
              }}
              key={quotes.id}
              onClick={() => {
                setChange("block");
                setHeight("50px");
              }}
            >
              <Text class="question" text={quotes.author} />
              <Text
                class="answer"
                style={{
                  display: change,
                }}
                text={quotes.quote}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
