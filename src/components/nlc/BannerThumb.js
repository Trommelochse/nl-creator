import React from 'react';

const BannerThumb = props => {
  const style = {
    cursor: 'pointer'
  }
  const imageStyle = {
    width: '100%',
    height: 'auto',
  }
  return (
    <div
      className="BannerThumb"
      style={style}
      onClick={props.onClick}
      value={props.src}
      >
      <img
        src={props.src}
        style={imageStyle}
        alt="Newsletter Banner"/>
    </div>
  )
}

export default BannerThumb;
