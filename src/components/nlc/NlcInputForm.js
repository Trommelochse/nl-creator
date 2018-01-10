import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import IconTextField from '../common/IconTextField.js';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Padded from '../common/Padded.js';

class NlcInputForm extends Component {

  render() {
    const {
      imgSrc,
      headline,
      body,
      ctaText,
      hyperlink,
      onChangeImgSrc,
      onChangeHeadline,
      onChangeBody,
      onChangeCtaText,
      onChangeHyperlink,
      onShowResult,
      onClearForm,
      onOpenPreview
    } = this.props;
    return (
      <div className="NlcInputForm">
        <Paper style={{marginBottom: 16}}>
          <Padded>
            <IconTextField
              floatingLabelText="Image URL"
              icon="fa-picture-o"
              onChange={onChangeImgSrc}
              value={imgSrc}
              fullWidth
              />
            <IconTextField
              floatingLabelText="Headline"
              icon="fa-header"
              onChange={onChangeHeadline}
              value={headline}
              fullWidth
              />
            <IconTextField
              floatingLabelText="Content"
              icon="fa-align-justify"
              onChange={onChangeBody}
              value={body}
              multiLine
              fullWidth
              rows={3}
              />
            <IconTextField
              floatingLabelText="CTA text"
              icon="fa-mouse-pointer"
              onChange={onChangeCtaText}
              value={ctaText}
              fullWidth
              />
            <IconTextField
              floatingLabelText="Linking to"
              icon="fa-link"
              onChange={onChangeHyperlink}
              value={hyperlink}
              fullWidth
              />
          </Padded>
          <Padded>
            <RaisedButton
              label="Create HTML"
              primary
              onClick={onShowResult}
              />
            <FlatButton
              label="Clear"
              style={{float: 'right'}}
              secondary
              onClick={onClearForm}
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

export default NlcInputForm;
