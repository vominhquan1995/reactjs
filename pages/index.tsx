import { Component } from 'react'
import Layout from '../components/share/Layout'
export default class extends Component<any, any> {
  aos: any;
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init({
      duration: 800,
      easing: 'slide',
      once: false
    });
  }

  static async getInitialProps() {
    const layoutProps = await Layout.getInitialProps();
    return {
      title: 'Trang chủ',
      layoutProps
    }
  }
  render() {
    return (
      <Layout title={this.props.title} {...this.props.layoutProps}>
        <div className="site-wrap text-black">
          <div className="intro-section " id="home-section">
            <div className="container">
              <div className="full">
                <img src="assets/img/bg.gif" alt="home" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
