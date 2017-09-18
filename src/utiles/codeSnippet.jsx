// @flow

import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from 'material-ui/Button'
import teal from 'material-ui/colors/teal'

export default class CodeSnippet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      extended: false,
    }
  }
  render() {
    return (
      <div style={{ marginBottom: '10px', marginTop: '20px' }}>
        <div
          style={{ display: 'block', background: 'rgb(240, 240, 240)', padding: '5px', textAlign: 'right' }}
        >
          <Button
            onClick={() => this.setState({ extended: !this.state.extended })}
          >
            <svg fill={teal[500]} height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          </Button>
        </div>
        <div style={{ display: !this.state.extended && 'none', margin: 0 }}>
          <SyntaxHighlighter
            language="javascript"
            // style={solarizedDark}
          >
            {this.props.children}
          </SyntaxHighlighter>
        </div>

      </div>
    )
  }
}
