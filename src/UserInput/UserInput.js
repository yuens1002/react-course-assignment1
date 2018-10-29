import React from 'react'

const userInput = (props) => {
  return (
    <React.Fragment>
    <p className="my-input-title">Name Change</p>
    <input
    type="text"
    className="my-input"
    onChange={props.changeInput}
    value={props.inputText} />
    </React.Fragment>
  );
};

export default userInput
