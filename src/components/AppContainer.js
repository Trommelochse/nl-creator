import React, {Component} from 'react';
import SiteWidth from './SiteWidth.js';
import Navigation from './Navigation.js';
import Main from './Main.js';
import Aside from './Aside.js';

import * as htmlTemplates from './nlc/lib/templates.js';
import * as localStorage from './nlc//lib/localStorage.js'

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: '1rem 2rem',
}

class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      brand: 'be',
      stepIndex: 0,
      imgSrc: '',
      headline: '',
      body: '',
      ctaText: '',
      hyperlink: '',
      showsPreview: false,
      resultString: '',
      previousImages: []
    }
    this.clearState = Object.assign({}, this.state);

    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeImgSrc = this.onChangeImgSrc.bind(this);
    this.onChangeHeadline = this.onChangeHeadline.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeCtaText = this.onChangeCtaText.bind(this);
    this.onChangeHyperlink = this.onChangeHyperlink.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.onShowResult = this.onShowResult.bind(this);
    this.onShowInputForm = this.onShowInputForm.bind(this);
    this.onClearForm = this.onClearForm.bind(this);
    this.onOpenPreview = this.onOpenPreview.bind(this);
    this.onClosePreview = this.onClosePreview.bind(this);
  }

  componentDidMount() {
    this.setState({previousImages: localStorage.getImages()})
  }

  onChangeBrand(brand) {
    this.setState({brand})
  }
  onChangeImgSrc(ev) {
    this.setState({imgSrc: ev.target.value})
  }
  onChangeHeadline(ev) {
    this.setState({headline: ev.target.value})
  }
  onChangeBody(ev) {
    this.setState({body: ev.target.value})
  }
  onChangeCtaText(ev) {
    this.setState({ctaText: ev.target.value})
  }
  onChangeHyperlink(ev) {
    this.setState({hyperlink: ev.target.value})
  }
  onOpenPreview() {
    this.calculateResult();
    this.setState({showsPreview: true })
  }
  onClosePreview() {
    this.setState({showsPreview: false })
  }
  calculateResult() {
    const {
      brand,
      imgSrc,
      hyperlink,
      headline,
      body,
      ctaText
    } = this.state;
    const bodyConverted = body.split('\n').join('<br>');
    this.setState({
      resultString: htmlTemplates[brand].create(imgSrc,hyperlink,headline,bodyConverted,ctaText)
    });
  }

  onShowResult() {
    this.calculateResult();
    this.setState({stepIndex: 1})
  }
  onShowInputForm() {
    this.setState({stepIndex: 0})
  }
  onClearForm() {
    console.log(this.clearState);
    this.clearState.brand = this.state.brand;
    this.setState(this.clearState)
  }

  render() {
    return (
      <div className="AppContainer">
        <Navigation title="NL Creator" brand={this.state.brand} />
        <SiteWidth>
          <div style={gridStyle}>
            <Main
              onChangeImgSrc={this.onChangeImgSrc}
              onChangeHeadline={this.onChangeHeadline}
              onChangeBody={this.onChangeBody}
              onChangeCtaText={this.onChangeCtaText}
              onChangeHyperlink={this.onChangeHyperlink}
              onShowResult={this.onShowResult}
              onShowInputForm={this.onShowInputForm}
              onClearForm={this.onClearForm}
              onOpenPreview={this.onOpenPreview}
              onClosePreview={this.onClosePreview}
              {...this.state}
              />
            <Aside
              onChangeBrand={this.onChangeBrand}
              {...this.state}
              />
          </div>
        </SiteWidth>
      </div>
    )
  }
}

export default AppContainer;
