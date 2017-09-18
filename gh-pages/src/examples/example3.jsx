// @flow
// Showcase of Overlay

import React from 'react'
import Typography from 'material-ui/Typography'
import { Gallery, Image, Overlay } from 'react-stylish-gallery'

import CodeSnippet from '../utiles/codeSnippet'
import images from '../images'

export default () => (
  <div style={{ padding: '10px 20px 10px 20px', marginTop: '30px' }}>
    <Typography type="display1">
      Example 3
    </Typography>
    <Typography type="body1">
      Add the Overlay component as child of the Image to create a beautiful overlay effect.
      You can specify a title to dispaly over the overlay via the title prop.
      The animation type can be changed via the theme prop.
      The default animation is set to fadeIn.
    </Typography>
    <CodeSnippet>
      {`
        import React from 'react'
        import { Gallery, Image, Overlay } from 'react-stylish-gallery'
        import images from '../images/'

        export default () => (
          <Gallery>
            <Image
              src={images.img1}
              alt="image"
            >
              <Overlay
                title="I fade in by default!"
              />
            </Image>
            <Image
              src={images.img5}
              alt="image"
            >
              <Overlay
                title="I slide left!"
                theme={{
                  animationName: 'slideLeft',
                }}
              />
            </Image>
            <Image
              src={images.img6}
              alt="image"
            >
              <Overlay
                title="I slide right!"
                theme={{
                  animationName: 'slideRight',
                }}
              />
            </Image>
            <Image
              src={images.img2}
              alt="image"
            >
              <Overlay
                title="I slide down!"
                theme={{
                  animationName: 'slideDown',
                }}
              />
            </Image>
            <Image
              src={images.img3}
              alt="image"
            >
              <Overlay
                title="I slide up!"
                theme={{
                  animationName: 'slideUp',
                }}
              />
            </Image>
            <Image
              src={images.img4}
              alt="image"
            >
              <Overlay
                title="I also fade in!"
              />
            </Image>
          </Gallery>
        )
      `}
    </CodeSnippet>
    <Gallery>
      <Image
        src={images.img1}
        alt="image"
      >
        <Overlay
          title="I fade in by default!"
        />
      </Image>
      <Image
        src={images.img5}
        alt="image"
      >
        <Overlay
          title="I slide left!"
          theme={{
            animationName: 'slideLeft',
          }}
        />
      </Image>
      <Image
        src={images.img6}
        alt="image"
      >
        <Overlay
          title="I slide right!"
          theme={{
            animationName: 'slideRight',
          }}
        />
      </Image>
      <Image
        src={images.img2}
        alt="image"
      >
        <Overlay
          title="I slide down!"
          theme={{
            animationName: 'slideDown',
          }}
        />
      </Image>
      <Image
        src={images.img3}
        alt="image"
      >
        <Overlay
          title="I slide up!"
          theme={{
            animationName: 'slideUp',
          }}
        />
      </Image>
      <Image
        src={images.img4}
        alt="image"
      >
        <Overlay
          title="I also fade in!"
        />
      </Image>
    </Gallery>
  </div>
)
