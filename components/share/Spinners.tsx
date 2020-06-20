import * as React from 'react';
import { RingLoader } from 'react-spinners';


export default class extends React.Component<any,
    any> {


    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }
    componentDidUpdate(prevProps, prevState) {
        // this.state = prevProps;
        // this.setState({ loading: prevProps.loading })
    }

    renderLoadingPlaceHolder() {
        return <div className="timeline-item">
            <div className="animated-background">
                <div className="background-masker header-top"></div>
                <div className="background-masker header-left"></div>
                <div className="background-masker header-right"></div>
                <div className="background-masker header-bottom"></div>
                <div className="background-masker subheader-left"></div>
                <div className="background-masker subheader-right"></div>
                <div className="background-masker subheader-bottom"></div>
                <div className="background-masker content-top"></div>
                <div className="background-masker content-first-end"></div>
                <div className="background-masker content-second-line"></div>
                <div className="background-masker content-second-end"></div>
                <div className="background-masker content-third-line"></div>
                <div className="background-masker content-third-end"></div>
            </div>
            <div className="animated-background">
                <div className="background-masker header-top"></div>
                <div className="background-masker header-left"></div>
                <div className="background-masker header-right"></div>
                <div className="background-masker header-bottom"></div>
                <div className="background-masker subheader-left"></div>
                <div className="background-masker subheader-right"></div>
                <div className="background-masker subheader-bottom"></div>
                <div className="background-masker content-top"></div>
                <div className="background-masker content-first-end"></div>
                <div className="background-masker content-second-line"></div>
                <div className="background-masker content-second-end"></div>
                <div className="background-masker content-third-line"></div>
                <div className="background-masker content-third-end"></div>
            </div>
            <div className="animated-background">
                <div className="background-masker header-top"></div>
                <div className="background-masker header-left"></div>
                <div className="background-masker header-right"></div>
                <div className="background-masker header-bottom"></div>
                <div className="background-masker subheader-left"></div>
                <div className="background-masker subheader-right"></div>
                <div className="background-masker subheader-bottom"></div>
                <div className="background-masker content-top"></div>
                <div className="background-masker content-first-end"></div>
                <div className="background-masker content-second-line"></div>
                <div className="background-masker content-second-end"></div>
                <div className="background-masker content-third-line"></div>
                <div className="background-masker content-third-end"></div>
            </div>
            <div className="animated-background">
                <div className="background-masker header-top"></div>
                <div className="background-masker header-left"></div>
                <div className="background-masker header-right"></div>
                <div className="background-masker header-bottom"></div>
                <div className="background-masker subheader-left"></div>
                <div className="background-masker subheader-right"></div>
                <div className="background-masker subheader-bottom"></div>
                <div className="background-masker content-top"></div>
                <div className="background-masker content-first-end"></div>
                <div className="background-masker content-second-line"></div>
                <div className="background-masker content-second-end"></div>
                <div className="background-masker content-third-line"></div>
                <div className="background-masker content-third-end"></div>
            </div>
        </div>

    }

    renderLoading() {
        return <div className="w-full text-center">
            <button className="btn btn-warning disabled  btn-lg" style={{color:"#fff"}}>
                <i className="fa fa-refresh fa-spin"></i> {this.props.message || 'Loading...'}</button>
        </div>

    }

    render() {
        return (
            <div>
                {

                    this.props.loading ?
                        this.props.type === 'placeholde' ? this.renderLoadingPlaceHolder() : this.renderLoading()
                        : null
                }
            </div>
        )

    }
}
