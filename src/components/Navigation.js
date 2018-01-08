import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
  background: '#37474F',
  marginBottom: '1.5rem'
}

class Navigation extends Component {

  render() {
    return (
      <div className="Navigation">
        <AppBar title="NL Creator" showMenuIconButton={false} style={style}/>
      </div>
    )
  }
}

export default Navigation;
