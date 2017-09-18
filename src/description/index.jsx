// @flow

import React from 'react'
import Typography from 'material-ui/Typography'
import SyntaxHighlighter from 'react-syntax-highlighter'

const Description = () => (
  <div>
    <Typography type="display3" style={{ paddingTop: '30px' }}>
      Install
    </Typography>

    <SyntaxHighlighter language="javascript" className="col-xs-12 col-lg-3"> yarn add react-stylish-gallery</SyntaxHighlighter>
    <Typography type="subheading" style={{ paddingLeft: '30px' }}>
      Or
    </Typography>
    <SyntaxHighlighter language="javascript" className="col-xs-12 col-lg-3">npm i -S react-stylish-gallery</SyntaxHighlighter>

    <Typography type="display3" style={{ paddingTop: '30px' }}>
      Demos
    </Typography>
  </div>
)

export default Description
