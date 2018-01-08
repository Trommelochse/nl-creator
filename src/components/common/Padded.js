import React from 'react';
export default (props) => {
  const style = {
    padding: props.padding || '16px 24px'
  }
  console.log(style);
  return (
    <div className="padded" style={style}>
      {props.children}
    </div>
  )
}
