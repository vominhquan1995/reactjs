import * as React from 'react'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share'

const TSB = ShareButtons.TwitterShareButton
const TwitterIcon = generateShareIcon('twitter')

export default class extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    let { shareUrl, iconSize, style, title } = this.props

    return (
      <div className="TwitterShareButton" style={style}>
        <div>
          <TSB url={shareUrl} title={title} className="share-button">
            <a className="btn u-btn-twitter g-font-size-12 rounded g-px-20--sm g-py-10" href="">
              <i className="fa fa-twitter g-mr-5--sm"></i> <span className="hidden-xs-down">Tweet on Twitter</span>
            </a>
          </TSB>
        </div>

        <style>
          {`
            .network {
              vertical-align: top;
              display: inline-block;
              margin-right: 30px;
              text-align: center;
            }

            .share-count {
              margin-top: 3px;
              font-size: 12px;
            }

            .share-button {
              cursor: pointer;
            }

            .share-button:hover:not(:active) {
              opacity: 0.75;
            }
            `}
        </style>
      </div>
    )
  }
}
