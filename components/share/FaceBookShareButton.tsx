import * as React from 'react'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share'

const FSB = ShareButtons.FacebookShareButton
const { FacebookShareCount } = ShareCounts
const FacebookIcon = generateShareIcon('facebook')

export default class extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    let { shareUrl, iconSize, style } = this.props
    return (
      <div style={{ display: 'inline' }}>
        <FSB url={shareUrl} style={{ display: 'inline' }}>
          <a href=""><i className="fa fa-facebook"></i> <strong className="hidden-xs-down">Share on Facebook</strong></a>
        </FSB>
        {/* <FacebookShareCount url={shareUrl} className="share-count">
            {count => count}
          </FacebookShareCount> */}
      </div>
    )
  }
}
