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
        <div>
            <img className="bg-home" src="assets/img/funny.gif" alt="home" />
        </div>
      </Layout>
    )
  }
}
