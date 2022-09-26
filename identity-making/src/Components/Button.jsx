import { useState } from "react";

function Button(props) {
  const { text } = props;

  const style = {
    height: "30px",
    width: "77px",
    borderRadius: "4px",
    color: "white",
    backgroundColor: "black"
  };

  const [follow, setFollow] = useState("Follow");
  const follwHandler = () => {
    setFollow("Following..");
    // setFollow("dfaf");
  };

  return (
    <button style={style} onClick={follwHandler}>
      {follow}
    </button>
  );
}

export default Button;

// console.log(Button({text: "Click Me"}));
