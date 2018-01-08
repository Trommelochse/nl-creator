import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import IconTextField from '../common/IconTextField.js';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Padded from '../common/Padded.js';
import SectionTitle from '../SectionTitle.js';

class NlcInputForm extends Component {
  render() {
    return (
      <div className="NlcInputForm">
        <SectionTitle>
          Enter the content of your Newsletter
        </SectionTitle>
        <Paper style={{marginBottom: 16}}>
          <Padded>
            <IconTextField
              floatingLabelText="Image URL"
              icon="fa-picture-o"
              fullWidth />
            <IconTextField
              floatingLabelText="Title"
              icon="fa-header"
              fullWidth />
            <IconTextField
              floatingLabelText="Content"
              icon="fa-align-justify"
              multiLine
              fullWidth
              rows={3} />
            <IconTextField
              floatingLabelText="CTA text"
              icon="fa-mouse-pointer"
              fullWidth />
            <IconTextField
              floatingLabelText="Linking to"
              icon="fa-link"
              fullWidth />
          </Padded>
          <Padded>
            <RaisedButton label="Create HTML" primary></RaisedButton>
            <FlatButton label="Clear" style={{float: 'right'}} secondary />
            <FlatButton label="Preview" style={{float: 'right'}} primary></FlatButton>
          </Padded>
        </Paper>
      </div>
    )
  }
}

export default NlcInputForm;
