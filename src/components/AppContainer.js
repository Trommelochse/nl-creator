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
      brand: localStorage.getBrand(),
      stepIndex: 0,
      imgSrc: '',
      headline: '',
      body: '',
      ctaText: '',
      hyperlink: '',
      showsPreview: false,
      resultString: '',
      previousImages: [],
      termsType: 'none',
      sublineText: '',
      sublineLink: '',
    }
    this.clearState = {
      ...this.state,
      brand: localStorage.getBrand(),
      previousImages: localStorage.getImages()
    };

    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeImgSrc = this.onChangeImgSrc.bind(this);
    this.onChangeHeadline = this.onChangeHeadline.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeCtaText = this.onChangeCtaText.bind(this);
    this.onChangeHyperlink = this.onChangeHyperlink.bind(this);
    this.onChangeTermsType = this.onChangeTermsType.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
    this.onShowResult = this.onShowResult.bind(this);
    this.onShowInputForm = this.onShowInputForm.bind(this);
    this.onClearForm = this.onClearForm.bind(this);
    this.onOpenPreview = this.onOpenPreview.bind(this);
    this.onClosePreview = this.onClosePreview.bind(this);
    this.onChangeSublineText = this.onChangeSublineText.bind(this);
    this.onChangeSublineLink = this.onChangeSublineLink.bind(this);
  }

  componentDidMount() {
    this.setState({previousImages: localStorage.getImages()})
  }
  onChangeBrand(brand) {
    const resultString = this.calculateResult(brand);
    localStorage.setBrand(brand);
    this.setState({brand, resultString})
  }
  onChangeImgSrc(ev) {
    this.setState({imgSrc: ev.target.value || ev.target.src})
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
    const resultString = this.calculateResult();
    this.setState({resultString, showsPreview: true })
  }
  onClosePreview() {
    this.setState({showsPreview: false })
  }
  onChangeTermsType(ev) {
    this.setState({termsType: ev.target.value})
  }
  calculateResult(brandArg) {
    const {
      brand,
      imgSrc,
      hyperlink,
      headline,
      body,
      ctaText,
      termsType,
      sublineText,
      sublineLink
    } = this.state;
    const bodyConverted = body.split('\n').join('<br>');
    const template = htmlTemplates[brandArg || brand];
    const terms = termsType === 'single' ?
      template.createSimpleTerms(sublineText, sublineLink) : undefined;
    return template.create(
      imgSrc,
      hyperlink,
      headline,
      bodyConverted,
      ctaText,
      terms
    )
  }

  onShowResult() {
    const {imgSrc} = this.state;
    const resultString = this.calculateResult();
    if (imgSrc.match(/http(s)?:\/\/(.)*\.(jpg|jpeg|png|gif)/)) {
      localStorage.addImage(imgSrc);
    }
    this.setState({
      resultString,
      stepIndex: 1,
      previousImages: localStorage.getImages()
    })
  }
  onShowInputForm() {
    this.setState({stepIndex: 0})
  }
  onClearForm() {
    this.clearState.brand = this.state.brand;
    this.clearState.previousImages = localStorage.getImages();
    this.setState(this.clearState)
  }
  onChangeSublineText(ev) {
    this.setState({sublineText: ev.target.value});
  }
  onChangeSublineLink(ev) {
    this.setState({sublineLink: ev.target.value});
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
              onChangeSublineText={this.onChangeSublineText}
              onChangeSublineLink={this.onChangeSublineLink}
              {...this.state}
              />
            <Aside
              onChangeBrand={this.onChangeBrand}
              onChangeImgSrc={this.onChangeImgSrc}
              onChangeTermsType={this.onChangeTermsType}
              {...this.state}
              />
          </div>
        </SiteWidth>
      </div>
    )
  }
}

export default AppContainer;
