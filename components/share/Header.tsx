import { Component } from 'react'

import Banner from './Banner'
import Menu from './Menu'

// const bannerContentPromies = ContentService.getContent('banner');
// const menuContentPromies = ContentService.getContent('menu');

export default class extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      menuContent: '',
      bannerContent: '',
    }
  }
  render() {
    return (
      <div className="Header">
        <div id="header" className="header">
          <Banner html={this.props.bannerContent} />
          <Menu html={this.props.menuContent} />
        </div>
      </div>
    )
  }
}
