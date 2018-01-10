import React from 'react';

const BannerThumb = props => {
  const style = {
    marginBottom: 8
  }
  const imageStyle = {
    width: '100%',
    height: 'auto',
  }
  return (
    <div style={style}>
      <img
        src={props.src}
        style={imageStyle}
        alt="Newsletter Banner"/>
    </div>
  )
}

export default BannerThumb;
