import * as React from 'react'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share'

const GSB = ShareButtons.GooglePlusShareButton
const { GooglePlusShareCount } = ShareCounts
const GooglePlusIcon = generateShareIcon('google')

export default class extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    let { shareUrl, iconSize, style } = this.props

    return (
      <div className="GooglePlusShareButton" style={style}>
        <div className="network">
          <GSB url={shareUrl} className="share-button">
            <GooglePlusIcon size={iconSize} round />
          </GSB>
          <GooglePlusShareCount url={shareUrl} className="share-count">
            {count => count}
          </GooglePlusShareCount>
        </div>
      </div>
    )
  }
}
