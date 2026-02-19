import MainImg from "../../../assets/mainimg.png";
import MailBox from "../../../assets/mailimg.svg";
import { Text } from "../../__atoms/text/text";
import { Fetch } from "../../../fetch/fetch";
import { useEffect, useState } from "react";
export function MainDiv() {
  const [data, setData] = useState([]);

  (useEffect(() => {
    Fetch(setData);
  }),
    []);
  return (
    <>
      <ul>
        {data.map((el, key) => {
          return <li key={key}>{el.title}</li>;
        })}
      </ul>

      <div className="main_div">
        <div className="img_box">
          <img src={MainImg} />
          <img className="mail_img" src={MailBox} />
        </div>
        <div className="second_div">
          <Text class="heading" text="Products" />

          <div className="box_div">
            <Text class="question" text="" />
            <Text class="answer" text="" />
          </div>

          <div className="box_div">
            <Text class="question" text="" />
            <Text class="answer" text="" />
          </div>

          <div className="box_div">
            <Text class="question" text="" />
            <Text class="answer" text="" />
          </div>

          <div className="box_div">
            <Text class="question" text="" />
            <Text class="answer" text="" />
          </div>
          <div className="box_div">
            <Text class="question" text="" />
            <Text class="answer" text="" />
          </div>
        </div>
      </div>
    </>
  );
}
