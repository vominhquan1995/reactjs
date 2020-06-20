import * as React from 'react'
// import gtmParts from 'react-google-tag-manager'

export interface Props {
  dataLayerName?: string
  scriptId?: string
  additionalEvents?: any
  previewVariables?: boolean
}

export interface State {}

// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCLF58F"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->

// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-MCLF58F');</script>
// <!-- End Google Tag Manager -->

export default class GoogleTagManager extends React.Component<Props, State> {
  gtmId = 'GTM-MCLF58F'

  constructor(props) {
    super(props)
  }

  // static defaultProps = {
  //   dataLayerName: 'dataLayer',
  //   scriptId: 'react-google-tag-manager-gtm',
  //   additionalEvents: {},
  //   previewVariables: false,
  // }
  //
  // componentDidMount() {
  //   const dataLayerName: any = this.props.dataLayerName
  //   const scriptId: any = this.props.scriptId
  //
  //   if (!window[dataLayerName]) {
  //     const gtmScriptNode: any = document.getElementById(scriptId)
  //
  //     eval(gtmScriptNode.textContent)
  //   }
  // }

  render() {
    // const gtm = gtmParts({
    //   id: this.gtmId,
    //   dataLayerName: this.props.dataLayerName,
    //   additionalEvents: this.props.additionalEvents,
    //   previewVariables: this.props.previewVariables,
    // })
    //
    // return (
    //   <div>
    //     <div>{gtm.noScriptAsReact()}</div>
    //     <div id={this.props.scriptId || 'react-google-tag-manager-gtm'}>
    //       {gtm.scriptAsReact()}
    //     </div>
    //   </div>
    // )
    return (
      <React.Fragment>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MCLF58F');`,
          }}
        />

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCLF58F"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </React.Fragment>
    )
  }
}
