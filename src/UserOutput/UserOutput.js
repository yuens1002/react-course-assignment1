import React from 'react';

const userOutput = (props) => {
  const {children, userName} = props;
  return (
    <div className="my-output">
      <p>{userName}</p>
      <p>{children}</p>
    </div>
  );
};

export default userOutput;
