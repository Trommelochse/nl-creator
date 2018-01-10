import React from 'react';

const BrandSelector = props => {
  const {brand, onChangeBrand} = props;
  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
  const styleInner = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return(
    <div style={style}>
      <div style={styleInner}>
        <span
          onClick={() => onChangeBrand('be')}
          className={'brand-selector be' + (brand==='be' ? ' active' : '')}>BE</span>
      </div>
      <div style={styleInner}>
        <span
          onClick={() => onChangeBrand('nb')}
          className={'brand-selector nb' + (brand==='nb' ? ' active' : '')}>NB</span>
      </div>
      <div style={styleInner}>
        <span
          onClick={() => onChangeBrand('bs')}
          className={'brand-selector bs' + (brand==='bs' ? ' active' : '')}>BS</span>
      </div>
    </div>
  )
}

export default BrandSelector;
