import React, { Component } from 'react';
import marked from 'marked';

class OutputDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedText: props.displayedText
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            displayedText: nextProps.displayedText
        });
    }

    getMarkdownText() {
        var rawMarkup = marked(this.state.displayedText, {sanitize: true});
        return { __html: rawMarkup };
    }

  render() {

    return (
        <div dangerouslySetInnerHTML={this.getMarkdownText()} />
    );
  }
}

export default OutputDisplay;