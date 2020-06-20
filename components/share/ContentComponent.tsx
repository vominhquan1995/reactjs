import * as React from 'react';
export default class extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
            loading: false
        }
    }

    componentDidMount() {
    }

    render() {
        return (this.props._key) ? (
            this.state.loading && this.state.content ? (
                <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
            ) : null) : <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
    }
}