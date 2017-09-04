// @flow

import entrances from './entranceAnimations'
import exits from './exitAnimations'

export default (theme: Object) => ({
  ...entrances(theme),
  ...exits(theme),
  modal: {
    background: '#000',
    position: 'fixed',
    opacity: 0.6,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    'z-index': 1000,
  },
  scaleUpInital: {
    transform: 'translate(-50%, -50%) scale(0, 0)',
  },
  entrances: {
    test: {
      background: '#fff',
    }
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
  },
  contentContainer: {
    position: 'absolute',
    width: '80%',
    height: '80%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    'z-index': 1001,
  },
  content: {
    background: 'transparent',
    position: 'relative',
    height: '100%',
    top: '-50%',
    left: '-50%',
    transform: 'translate(50%, 50%)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  navLeft: {
    top: '50%',
    left: 0,
  },
  navRight: {
    top: '50%',
    right: 0,
  },
  icon: {
    fontSize: `${theme.iconsSize}rem`,
  },
  iconContainer: {
    position: 'absolute',
    zIndex: '1000',
    color: '#fff',
    background: 'transparent !important',
    border: 'none',
    transition: '.2s',
    '&:hover': {
      color: '#ccc',
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 'none',
    },
  },
})
