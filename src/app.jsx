// @flow

import React from 'react'
import Gallery from './gallery'
import Image from './image'
import Overlay from './overlay'

import images from './images'


const App = () => (
  <div>
    React stylish gallery!
    <Gallery
      withModal
      infinite
      theme={{
        animationTime: 0.4,
        animationEntrance: 'slideDown',
        animationExit: 'slideDown'
      }}
    >
      <Image
        src={images.img1}
        alt="item 1"
      />
      <Image
        src={images.img2}
        alt="item 1"
      >
        <Overlay />
      </Image>
      <Image
        src={images.img3}
        alt="item 1"
      >
        <Overlay />
      </Image>
      <Image
        src={images.img4}
        alt="item 1"
      >
        <Overlay />
      </Image>
    </Gallery>
  </div>
)

export default App
