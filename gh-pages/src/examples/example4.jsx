// @flow

import React from 'react'
import Typography from 'material-ui/Typography'
import { Gallery, Image, Overlay } from 'react-stylish-gallery'

import images from '../images'
import CodeSnippet from '../utiles/codeSnippet'

export default () => (
  <div style={{ padding: '10px 20px 10px 20px', marginTop: '40px' }}>
    <Typography type="display1">
      Example 4
    </Typography>
    <Typography type="body1">
      Adding a modal is very easy, just specify the withModal prop to the Gallery compoenent.
      The default of withModal is set to false.
    </Typography>
    <CodeSnippet>
      {`
        import React from 'react'
        import { Gallery, Image } from 'react-stylish-gallery'
        import images from '../images/'

        export default () => (
          <Gallery withModal>
            <Image
              src={images.img1}
              alt="image"
            >
              <Overlay />
            </Image>
            <Image
              src={images.img2}
              alt="image"
            >
              <Overlay />
            </Image>
            <Image
              src={images.img3}
              alt="image"
            >
              <Overlay />
            </Image>
            <Image
              src={images.img4}
              alt="image"
            >
              <Overlay />
            </Image>
            <Image
              src={images.img5}
              alt="image"
            >
              <Overlay />
            </Image>
            <Image
              src={images.img6}
              alt="image"
            >
              <Overlay />
            </Image>
          </Gallery>
        )
      `}
    </CodeSnippet>
    <Gallery withModal>
      <Image
        src={images.img1}
        alt="image"
      >
        <Overlay />
      </Image>
      <Image
        src={images.img2}
        alt="image"
      >
        <Overlay />
      </Image>
      <Image
        src={images.img3}
        alt="image"
      >
        <Overlay />
      </Image>
      <Image
        src={images.img4}
        alt="image"
      >
        <Overlay />
      </Image>
      <Image
        src={images.img5}
        alt="image"
      >
        <Overlay />
      </Image>
      <Image
        src={images.img6}
        alt="image"
      >
        <Overlay />
      </Image>
    </Gallery>
  </div>
)
