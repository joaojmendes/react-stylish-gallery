import React from 'react'

import Gallery from './gallery'
import images from './images'

const mockData = [
  {
    src: images.img1,
    alt: 'item 1',
    title : 'item 1',
    size: 4,
  },
  {
    src: images.img2,
    alt: 'item 2',
    title : 'item 2',
    size: 4,
    hover: true,
  },
  {
    src: images.img3,
    alt: 'item 3',
    title : 'item 3',
    size: 4,
    hover: true,
  },
  {
    src: images.img4,
    alt: 'item 4',
    title : 'item 4',
    size: 4,
    hover: true,
  },
  {
    src: images.img5,
    alt: 'item 5',
    title : 'item 5',
    size: 4,
    hover: true,
  },
  {
    src: images.img6,
    alt: 'item 6',
    title : 'item 6',
    size: 4,
    hover: true,
  },
]

const theme: themeType = {
  image: {
    padding: '10px',
  },
  overlay: {
    animationName: 'slideDown',
    animationTime: 0.4,
    animationTimingFunction: 'ease-in',
    background: 'blue',
    color: '#fff',
    opacity: 0.3,
  },
  modalSettings: {
    animationEntrance: 'slideRight',
    animationExit: 'slideRight',
    animationTime: 0.4,
    animationTimingFunction: 'ease-in',
    rightIconClassName: 'material-icons',
    rightIconName: 'keyboard_arrow_right',
    leftIconClassName: 'material-icons',
    leftIconName: 'keyboard_arrow_left',
    iconsSize: 4,
  }
}

const App = () => (
  <div>
    <Gallery images={mockData} theme={theme} withModal />
  </div>
)

export default App;
