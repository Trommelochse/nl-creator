import React, {Component} from 'react';
import NlcInputForm from './nlc/NlcInputForm.js'

const style = {
  gridColumn: 'span 8'
}

class Main extends Component {

  render() {
    return (
      <div className="Main" style={style}>
        <NlcInputForm />
      </div>
    )
  }
}

export default Main;
