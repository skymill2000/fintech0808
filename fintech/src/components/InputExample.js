import React from "react";

const InputExample = () => {
  let userInput = "입력 받기전";

  const handleChangeInput = (event) => {
    const { value } = event.target;
    console.log(value);
    userInput = value;
    console.log(userInput);
  };

  const handleClickButton = () => {
    console.log("button click");
  };

  return (
    <div>
      <p>{userInput}</p>
      <input onChange={handleChangeInput}></input>
      <button onClick={handleClickButton}>입력</button>
    </div>
  );
};

export default InputExample;
