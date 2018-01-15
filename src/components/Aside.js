import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Padded from './common/Padded.js';
import BannerThumb from './nlc/BannerThumb.js';
import BrandSelector from './nlc/BrandSelector.js';

const AsideSection = props => {

  const brandStyles = {
    be: {
      background: '#2D2D2D',
      color: '#fff'
    },
    nb: {
      background: '#DFE6ED',
      color: '#006EB4'
    },
    bs : {
      background: '#222326',
      color: '#CC0000',
    }
  }

  const getStyle = brand => {
    const style = {
      transition: 'all 450ms ease'
    }
    return Object.assign(style, brandStyles[brand])
  }

  return (
    <div className="AsideSection">
      <Paper style={{marginBottom: 16}} zDepth={1}>
        <Padded padding={12} style={getStyle(props.brand)}>
          <span>{props.title}</span>
        </Padded>
        <Divider />
        <Padded>
          {props.children}
        </Padded>
      </Paper>
    </div>
  )
}

class Aside extends Component {

  render() {
    const {brand, onChangeBrand, previousImages} = this.props;
    const style = {
      gridColumn: 'span 4',
      height: 200
    };
    const radioButtonStyle = {
      marginBottom: 8
    }
    return (
      <aside className="Aside" style={style}>
        <AsideSection brand={brand} title="Brand">
          <BrandSelector brand={brand} onChangeBrand={onChangeBrand} />
        </AsideSection>
        <AsideSection brand={brand} title="Previous Banners">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '8px'}}>
            { previousImages.map( src => {
              return (
                <BannerThumb
                  onClick={this.props.onChangeImgSrc}
                  key={src}
                  src={src}/>
              )
            } )}
          </div>
        </AsideSection>
        <AsideSection brand={brand} title="Terms and Conditions">
          <RadioButtonGroup
            name="termsType"
            valueSelected={this.props.termsType}
            onChange={this.props.onChangeTermsType}
            >
            <RadioButton
              label="None"
              value="none"
              style={radioButtonStyle}
              />
            <RadioButton
              label="Single Line"
              value="single"
              style={radioButtonStyle}
              />
          </RadioButtonGroup>
        </AsideSection>
      </aside>
    )
  }
}

export default Aside;
