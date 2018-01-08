import React, {Component} from 'react';
import SiteWidth from './SiteWidth.js';
import Navigation from './Navigation.js';
import Main from './Main.js';
import Aside from './Aside.js';

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: '1rem 2rem',
}

class Layout extends Component {

  render() {
    return (
      <div className="Layout">
        <Navigation title="NL Creator" />
        <SiteWidth>
          <div style={gridStyle}>
            <Main />
            <Aside />
          </div>
        </SiteWidth>
      </div>
    )
  }
}

export default Layout;
