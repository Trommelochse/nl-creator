import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Padded from '../common/Padded.js';

import Clipboard from 'clipboard';

class NlcResults extends Component {

  constructor(props) {
    super(props);
    this.state = {copied: false}
  }

  componentWillMount() {
    this.clipboard = new Clipboard('#btn-copy');
    this.clipboard.on('success', () => {
      setTimeout(() => {
        this.setState({copied: false})
      }, 2750);
      this.setState({copied: true})
    })
  }

  render() {
    const {onShowInputForm, onOpenPreview} = this.props;
    return (
      <div className="NlcResults">
        <Paper style={{marginBottom: 16}}>
          <Padded>
            <pre id="result-string" className="nlc">
              { this.props.resultString }
            </pre>
          </Padded>
          <Padded>
            <RaisedButton
              data-clipboard-target="#result-string"
              id="btn-copy"
              label={this.state.copied ? 'Copied' : 'Copy to Clipboard'}
              primary></RaisedButton>
            <FlatButton
              label="Back"
              style={{float: 'right'}}
              onClick = {onShowInputForm}
              secondary
              />
            <FlatButton
              label="Preview"
              style={{float: 'right'}}
              primary
              onClick={onOpenPreview}
              />
          </Padded>
        </Paper>
      </div>
    )
  }
}

export default NlcResults;
