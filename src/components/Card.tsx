import React from 'react';

interface Props  {
  children: React.ReactNode;
  style: React.CSSProperties;
}

const Card = (props: Props) => {
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
