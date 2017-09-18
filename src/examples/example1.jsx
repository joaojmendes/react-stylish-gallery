// @flow

import React from 'react'
import Typography from 'material-ui/Typography'
import { Gallery, Image } from 'react-stylish-gallery'

import CodeSnippet from '../utiles/codeSnippet'
import images from '../images'

export default () => (
  <div style={{ padding: '10px 20px 10px 20px' }}>
    <Typography type="display1">
      Example 1
    </Typography>
    <Typography type="body1">
      Simple basic image gallery. Use it to create a simple responsive gallery with arranged images.
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
              />
              <Image
                src={images.img2}
                alt="image"
              />
              <Image
                src={images.img3}
                alt="image"
              />
              <Image
                src={images.img4}
                alt="image"
              />
              <Image
                src={images.img5}
                alt="image"
              />
              <Image
                src={images.img6}
                alt="image"
              />
            </Gallery>
          )
      `}
    </CodeSnippet>
    <Gallery>
      <Image
        src={images.img1}
        alt="image"
      />
      <Image
        src={images.img2}
        alt="image"
      />
      <Image
        src={images.img3}
        alt="image"
      />
      <Image
        src={images.img4}
        alt="image"
      />
      <Image
        src={images.img5}
        alt="image"
      />
      <Image
        src={images.img6}
        alt="image"
      />
    </Gallery>
  </div>
)
