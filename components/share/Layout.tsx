import * as React from 'react'
import Head from 'next/head'
import { loadImage } from '../../util/image';
function generateMetaTag(metaTags) {
  let metaTagArray: any = []
  metaTags.forEach((metaTag, index) => {
    let props = {}
    if (metaTag.name) props['name'] = metaTag.name
    if (metaTag.httpEquiv) props['httpEquiv'] = metaTag.httpEquiv
    if (metaTag.charset) props['charSet'] = metaTag.charset
    if (metaTag.property) props['property'] = metaTag.property
    if (metaTag.content) props['content'] = metaTag.content
    metaTagArray.push(<meta key={index} {...props} />)
  })

  return metaTagArray
}
export default class extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  static async getInitialProps() {
    return {
      metaTags: []
    }
  }

  render() {
    let metaTags: any[] = generateMetaTag(this.props.metaTags)
    let head = (
      <Head>
        {metaTags}
        <title>ReactJS</title>
      </Head>
    )

    return (
      <React.Fragment>
        {head}
        {this.props.children}
      </React.Fragment>
    )
  }
}
