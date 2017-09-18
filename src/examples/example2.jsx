// @flow

import React from 'react'
import Typography from 'material-ui/Typography'
import { Gallery, Image } from 'react-stylish-gallery'
import SyntaxHighlighter from 'react-syntax-highlighter'


import CodeSnippet from '../utiles/codeSnippet'
import images from '../images'

export default () => (
  <div style={{ padding: '10px 20px 10px 20px', marginTop: '40px' }}>
    <Typography type="display1">
      Example 2
    </Typography>
    <Typography type="body1" style={{ marginBottom: '20px'}}>
      <code style={{ background: 'rgb(240, 240, 240)', padding: '3px' }}>react-stylish-gallery</code>
      uses the flexbox model to make everything fit perfectly.
      You can specify the size of each image in the flex by adding the size prop.
      The default size is set to 4.
      You can also specify the height and the padding of each image by adding the theme prop.
    </Typography>
    <CodeSnippet>
      {`
        import React from 'react'
        import { Gallery, Image } from 'react-stylish-gallery'
        import images from '../images/'

        export default () => (
          <Gallery>
            <Image
              src={images.img1}
              alt="image"
              size={3}
              theme={{ padding: '5px' }}
            />
            <Image
              src={images.img5}
              alt="image"
              size={3}
              theme={{ padding: '5px' }}
            />
            <Image
              src={images.img6}
              alt="image"
              size={3}
              theme={{ padding: '5px' }}
            />
            <Image
              src={images.img2}
              alt="image"
              size={3}
              theme={{ padding: '5px' }}
            />
            <Image
              src={images.img3}
              alt="image"
              size={6}
              theme={{ padding: '5px' }}
            />
            <Image
              src={images.img4}
              alt="image"
              size={6}
              theme={{ padding: '5px' }}
            />
          </Gallery>
        )
      `}
    </CodeSnippet>
    <Gallery>
      <Image
        src={images.img1}
        alt="image"
        size={3}
        theme={{ padding: '5px' }}
      />
      <Image
        src={images.img5}
        alt="image"
        size={3}
        theme={{ padding: '5px' }}
      />
      <Image
        src={images.img6}
        alt="image"
        size={3}
        theme={{ padding: '5px' }}
      />
      <Image
        src={images.img2}
        alt="image"
        size={3}
        theme={{ padding: '5px' }}
      />
      <Image
        src={images.img3}
        alt="image"
        size={6}
        theme={{ padding: '5px' }}
      />
      <Image
        src={images.img4}
        alt="image"
        size={6}
        theme={{ padding: '5px' }}
      />
    </Gallery>
  </div>
)
