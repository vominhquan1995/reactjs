import * as React from 'react'
import * as $ from 'jquery';

export default class extends React.Component<any, any> {

    /* 
    width mặc định để show iframe lúc đầu
    */
    private width_default = 255;

    /**
     * width tối thiểu show lượt thích
     */
    private width_like = 270;

    constructor(props) {
        super(props);
        this.state = {
            width: this.width_default,
            loaded: true
        }
    }

    componentDidMount() {
        /**
         * load size lúc đầu
         */
        this.changeSize();

        /* 
        nếu thay đổi size màn hình
        */
        $(window).resize(() => {
            this.changeSize();
        });
    }

    private changeSize() {
        /**kích thước theo cha
         */
        let tam = Math.round($('#fanpageFacebook').parent().width() || 0);

        /**
         * width<270 mất số lượt thích
         */
        if (tam < 270) {
            tam = this.width_like;
        }
        this.setState({
            width: tam
        });
    }

    private loadEvent() {
        this.setState({
            loaded: false
        })
    }

    render() {
        return (
            <iframe hidden={this.state.loaded ? true : false} onLoad={() => this.loadEvent()} id="fanpageFacebook" src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhutech.itcenter%2F&tabs=tabs&width=${this.state.width}&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=983138655120604`} width={this.state.width} height="200" style={{ border: 'none', overflow: 'hidden' }} scrolling="no"></iframe>
        )
    }

}