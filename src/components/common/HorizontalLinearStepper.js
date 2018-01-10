import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

class HorizontalLinearStepper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0
    }
  }

  render() {
    const {stepIndex} = this.props;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Enter your content</StepLabel>
          </Step>
          <Step>
            <StepLabel>Get your HTML!</StepLabel>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default HorizontalLinearStepper;
