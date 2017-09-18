// @flow

import React from 'react'
import Typography from 'material-ui/Typography'
import { Gallery, Image, Overlay } from 'react-stylish-gallery'


import images from '../images/'
import CodeSnippet from '../utiles/codeSnippet'


export default () => (
  <div style={{ padding: '10px 20px 10px 20px', marginTop: '40px' }}>
    <Typography type="display1">
      Example 5
    </Typography>
    <Typography type="body1">
      You can specify the animationEntrance and the animationExit of the modal via the theme prop supplied to Gallery, just 
      bare in mind that you must also specify the animationTime for the animation to appear.
    </Typography>
    <CodeSnippet>
      {`
        import React from 'react'
        import { Gallery, Image } from 'react-stylish-gallery'
        import images from '../images/'

        export default () => (
          <Gallery
            infinite
            withModal
            theme={{
              animationEntrance: 'slideDown',
              animationExit: 'slideDown',
              animationTime: 0.3,
            }}
          >
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
    <Gallery
      infinite
      withModal
      theme={{
        animationEntrance: 'slideDown',
        animationExit: 'slideDown',
        animationTime: 0.3,
      }}
    >
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
