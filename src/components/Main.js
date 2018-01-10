import React, {Component} from 'react';
import NlcInputForm from './nlc/NlcInputForm.js';
import NlcResults from './nlc/NlcResults.js';
import NlcPreviewPopup from './nlc/NlcPreviewPopup.js';
import HorizontalLinearStepper from './common/HorizontalLinearStepper.js';

const style = {
  gridColumn: 'span 8'
}

class Main extends Component {

  render() {
    const {stepIndex} = this.props;
    return (
      <div className="Main" style={style}>
        <HorizontalLinearStepper stepIndex={stepIndex} />
        {
          stepIndex === 0 ?
            <NlcInputForm {...this.props}/> :
            <NlcResults {...this.props}/>
        }
        <NlcPreviewPopup {...this.props}/>
      </div>
    )
  }
}

export default Main;
