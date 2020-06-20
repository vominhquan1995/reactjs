import { Component } from 'react';
declare var window;

// const contentPromise = ContentService.getContent('footer');

export default class extends Component<any, any> {
  private html: string;
  private extractscript: any[];

  constructor(props) {
    super(props);
    this.html = '';
    this.extractscript = [];
    this.state = {
      html: '',
    };
  }

  componentWillMount() {
    let html = this.props.html;
    let extractscript = /<script[\s\S]*?>[\s\S]*?<\/script>/gi.exec(html) || [];
    for (let i = 0; i < extractscript.length; i++) {
      extractscript[i] = extractscript[i].replace('<script>', '');
      extractscript[i] = extractscript[i].replace('</script>', '');
      html = html.replace(extractscript[i], '');
    }

    this.extractscript = extractscript;
    this.html = html;
  }

  componentDidMount() {
    for (let i = 0; i < this.extractscript.length; i++) {
      window.eval(this.extractscript[i]);
    }
    // this.setState({ html: this.html });
  }

  render() {
    return (
      <div
        className="PageFooter"
        dangerouslySetInnerHTML={{ __html: this.html }}
      />
    );
  }
}
