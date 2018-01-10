import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class NlcPreviewPopup extends Component {

  render() {

    const {
      showsPreview,
      onClosePreview,
      resultString
    } = this.props;

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={onClosePreview}
      />
    ];

    return (
      <div >
        <Dialog
          style={{overflowX: 'hidden'}}
          title="Preview"
          actions={actions}
          open={showsPreview}
          onRequestClose={onClosePreview}
        >
          <iframe title="nl-preview" srcdoc={resultString} style={{
              width: '95%',
              height: 500,
              margin: '0 2.5%',
              boxSizing: 'border-box',
              border: '1px solid #c1c1c1'
            }}>
          </iframe>
        </Dialog>
      </div>
    );
  }
}
