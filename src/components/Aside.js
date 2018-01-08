import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Padded from './common/Padded.js';

const AsideSection = props => {
  return (
    <div className="AsideSection">
      <Padded>
        <span style={{fontWeight: 300}}>{props.title}</span>
      </Padded>
      <Divider />
      <Paper style={{marginBottom: 16}}>
      <Padded>
        {props.children}
      </Padded>
      </Paper>
    </div>
  )
}

const BrandSelector = props => {
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
        <span class="brand-selector be">BE</span>
      </div>
      <div style={styleInner}>
        <span class="brand-selector nb active">NB</span>
      </div>
      <div style={styleInner}>
        <span class="brand-selector bs">BS</span>
      </div>
    </div>
  )
}

class Aside extends Component {

  render() {
    const style = {
      gridColumn: 'span 4',
      height: 200
    };
    return (
      <aside className="Aside" style={style}>
        <AsideSection title="Brand">
          <BrandSelector />
        </AsideSection>
        <AsideSection title="Previous Banners">
          <ul>
            <li>eins</li>
            <li>zwei</li>
            <li>dreis</li>
          </ul>
        </AsideSection>
      </aside>
    )
  }
}

export default Aside;
