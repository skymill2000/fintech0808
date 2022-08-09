import React from "react";

const InputExample = () => {
  const handleChangeInput = (event) => {
    const { value } = event.target;
    console.log(value);
  };

  const handleClickButton = () => {
    console.log("button click");
  };
  return (
    <div>
      <input onChange={handleChangeInput}></input>
      <button onClick={handleClickButton}>입력</button>
    </div>
  );
};

export default InputExample;
