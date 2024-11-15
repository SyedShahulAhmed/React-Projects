import React from "react";
import cry from "./assests/crying.png";
import sad from "./assests/sad.png";
import med from "./assests/med.png";
import surprise from "./assests/surprised.png";
import happy from "./assests/happy.png";
import constant from "./assests/panda.png";


const Emoji = ({ Rate, Hover }) => {
const emojis = [cry, sad, med, surprise, happy];

  const emojiToShow =
    Hover > 0 ? emojis[Hover - 1] : Rate > 0 ? emojis[Rate - 1] : constant;

  return (
    <div>
      <img src={emojiToShow} alt="emoji" className="h-[100px] w-[100px]" />
    </div>
  );
};
export default Emoji;
